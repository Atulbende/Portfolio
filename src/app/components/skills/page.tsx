"use client";
import { delay, motion } from "framer-motion"
import { data } from "../../lib/data"
export default function Skills() {
    const fadeInAnimation={
        initial:{
            opacity:0,
            y:100
        },
        animate:((index:number)=>(
            {
            opacity:1,
            y:0,
            transition:{
                delay:0.05*index,
            }
        }
        ))
    }
    const fadeOutAnimation={
        initial:{
            opacity:0,
            x:100
        },
        animate:((index:number)=>(
            {
            opacity:1,
            x:0,
            transition:{
                delay:0.03,
            }
        }
        ))
    }
    return (<>
        <section id={'skill'} className="home-div mt-3 mb-5 flex flex-col  item-center m-auto w-4/5  scroll-mt-32">
        <div className='flex justify-center'>
        <motion.h1 
        className="bg-white  rounded-full px-5 py-2"
        variants={fadeOutAnimation}
        initial="initial"
        whileInView="animate"
        viewport={{
           once:true
        }}
        custom={0}
        >Skills</motion.h1>
        </div>
            <ul className="profile-pic text-center flex flex-wrap gap-2 mt-4 justify-center text-center text-lg">
                {data.skills.map((skill,index)=>(
                    <motion.li 
                    className="bg-white  rounded-full px-5 py-3 shadow-lg shadow-blue-500/50 cursor-pointer"
                     key={skill}
                     variants={fadeInAnimation}
                     initial="initial"
                     whileInView="animate"
                     viewport={{
                        once:true
                     }}
                     custom={index}
                     >
                        {skill}
                    </motion.li>))}
            </ul>
            <strong>

            </strong>
        </section>
    </>)
}