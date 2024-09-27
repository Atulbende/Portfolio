
'use client';
import React, { useEffect, useState, useRef, useMemo } from 'react';
import { FaPaperPlane } from "react-icons/fa";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { motion } from "framer-motion";
import { io } from "socket.io-client";
import { sendMessageToHost } from "@/app/server/actions";
interface Item {
  type?: string | undefined;
  message?: string | undefined;
}
function Chat({urlParam}:any) {
  const sockets =useMemo(()=>{return (io('https://portfolio-atul-s-projects-b035b0ba.vercel.app', { withCredentials: true }));},[]);
  const [chatHistory, setChatHistory] = useState<Item[]>([]);
  const [senderMessage, setSenderMessage] = useState('');
  const chatContainerRef = useRef<HTMLDivElement>(null); // Ref for the chat container
  useEffect(() => {
    sockets.on('connect',()=>{
        sessionStorage.setItem('me',sockets.id || '');
        if(!urlParam)sessionStorage.setItem('isChat',"true");
    })
    sockets.on("message", (msg) => {
      setChatHistory((prev) => [...prev, { type: 'receiver', message: msg }]);
    });

    return () => {
      sockets.off("message");
      sockets.off("connect");
      sockets.off("disconnect");
    };
  }, [sockets]);
  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight; // Scroll to the bottom
    }
  }, [chatHistory]); // Scroll down whenever chat history changes

  const fadeOutAnimation = {
    initial: {
      opacity: 0,
      x: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.03,
      },
    }),
  };

const sentMessage=async(e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault(); 
    setChatHistory((prev) => [...prev, { type: 'sender', message: senderMessage }]);
    const id= sessionStorage.getItem('me');
    const senderId=sessionStorage.getItem('sender');
    const isChat=sessionStorage.getItem('isChat');
    sockets.emit('message', {id:senderId,message:senderMessage});
    setSenderMessage(''); // Clear input after sending
    if(isChat){
        const id=sessionStorage.getItem('me');
        sessionStorage.removeItem('isChat');
        const res =await sendMessageToHost(senderMessage,`https://portfolio-hn16.vercel.app/?url=${id}`);
    }
  }
 
  return (
    <>
      <motion.section
        className="chat-wrapper"
        variants={fadeOutAnimation}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        custom={0}
      >
        <header className='chat-header'>
          <span><IoChatbubbleEllipses /> </span>
        </header>
        <form onSubmit={sentMessage}>
        <section className='chat-main' ref={chatContainerRef} style={{ height: '400px', overflowY: 'auto' }}>
          {chatHistory.map((_v, _index) => (
            <section key={_index}>
              {_v.type === 'receiver' ? 
                <section className='chat-receiver'>
                  <span>{_v.message}</span>
                </section> : null
              }
              {_v.type === 'sender' ? 
                <section className='chat-sender'>
                  <span>{_v.message}</span>
                </section> : null
              }
            </section>
          ))}
        </section>
        <footer className='chat-footer'>
          <input
            type="text"
            className='chat-input'
            value={senderMessage}
            onChange={(e) => setSenderMessage(e.target.value)}
          />
          <button type='submit' className="group text-[#ffffffb8] bg-[#686a7b5c] w-[7rem] h-[2.5rem] rounded-full flex justify-center items-center gap-2 hover:scale-60 active:scale-105">
            <FaPaperPlane className="text-xs opacity-70 group-hover:translate-x-1" />
            {" "}
          </button>
      
        </footer>
        </form>
      </motion.section>
    </>
  );
}

export default Chat;
