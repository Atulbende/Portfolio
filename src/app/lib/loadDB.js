'use server';
import { DataAPIClient } from "@datastax/astra-db-ts";

import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import 'dotenv/config';
import OpenAI from "openai";
import dataSet from './dataSet.json' with {type:"json"};

const openai=new OpenAI({
    apiKey:process.env.OPENAI_API_KEY
});

const client=new DataAPIClient(process.env.TOKEN);
const db=client.db(process.env.ENDPOINT,{
    namespace:process.env.NAMESPACE
});
const splitter=new RecursiveCharacterTextSplitter({
    chunkSize:1000,
    chunkOverlap:200
});
const createCollection=async()=>{
    try {
        await db.createCollection('portfolio',{
            vector:{
                dimension:1536
            }
        })
    } catch (error) {
        console.log(error)
    }
}
const loadData = async () => {
    const collection = await db.collection("portfolio")
    try {
        
  
    for await (const { id, info, description } of dataSet) {
        const chunks = await splitter.splitText(description);
        let i = 0;
        for await (const chunk of chunks) {
            const { data } = await openai.embeddings.create({
                model: "gpt-3.5-turbo",
                input: chunk,
                model: "text-embedding-3-small"
            })

            const res = await collection.insertOne({
                document_id: id,
                $vector: data[0]?.embedding,
                info,
                description:chunk
            })

            i++
        }
    }
        } catch (error) {
                console.log('error:',error)   
        }
    console.log("data added");
}

createCollection().then(()=>loadData())