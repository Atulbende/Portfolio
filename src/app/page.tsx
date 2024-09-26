'use client';
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';
import { Suspense } from "react";
const Header = dynamic(() => import('./components/header/page'), { loading: () => <>loading...</> });
const Profile = dynamic(() => import('./components/profile/page'), { loading: () => <>loading...</> });
const Education = dynamic(() => import('./components/education/page'), { loading: () => <>loading...</> });
const Skills = dynamic(() => import('./components/skills/page'), { loading: () => <>loading...</> });
const Career = dynamic(() => import('./components/career/page'), { loading: () => <>loading...</> });
const Footer = dynamic(() => import('./components/footer/page'), { loading: () => <>loading...</> });
const Contact = dynamic(() => import('./components/contact/page'), { loading: () => <>loading...</> });
const Chat = dynamic(() => import('./components/chatwithme/page'), { loading: () => <>loading...</> })
export default function Home() {
  const [isChat,setIsChat]=useState(false);
  const searchParams = useSearchParams(); // Get search parameters
  const urlParam =  searchParams.get('url')|| null;
useEffect(()=>{

  if(!!urlParam)sessionStorage.setItem('sender',urlParam);
},[urlParam])
  return (
    <>  
        <Suspense fallback={<div>Loading...</div>}>

            {isChat && <Chat urlParam={urlParam}/>}
            <div className="chat-icon-bg">
              <span className="chat-icons" onClick={()=>{setIsChat(!isChat)}}>
              {!isChat ?  <svg viewBox="0 0 28 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M28 32s-4.714-1.855-8.527-3.34H3.437C1.54 28.66 0 27.026 0 25.013V3.644C0 1.633 1.54 0 3.437 0h21.125c1.898 0 3.437 1.632 3.437 3.645v18.404H28V32zm-4.139-11.982a.88.88 0 00-1.292-.105c-.03.026-3.015 2.681-8.57 2.681-5.486 0-8.517-2.636-8.571-2.684a.88.88 0 00-1.29.107 1.01 1.01 0 00-.219.708.992.992 0 00.318.664c.142.128 3.537 3.15 9.762 3.15 6.226 0 9.621-3.022 9.763-3.15a.992.992 0 00.317-.664 1.01 1.01 0 00-.218-.707z" fill="#ffffff"></path>
                </svg>:<span className="spinner"><svg width="25px" height="25px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"  fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>cross-square</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" > <g id="Icon-Set-Filled"  transform="translate(-206.000000, -1037.000000)" fill="#ffffff"> <path d="M226.95,1056.54 C227.34,1056.93 227.34,1057.56 226.95,1057.95 C226.559,1058.34 225.926,1058.34 225.536,1057.95 L222,1054.41 L218.464,1057.95 C218.074,1058.34 217.441,1058.34 217.05,1057.95 C216.66,1057.56 216.66,1056.93 217.05,1056.54 L220.586,1053 L217.05,1049.46 C216.66,1049.07 216.66,1048.44 217.05,1048.05 C217.441,1047.66 218.074,1047.66 218.464,1048.05 L222,1051.59 L225.536,1048.05 C225.926,1047.66 226.559,1047.66 226.95,1048.05 C227.34,1048.44 227.34,1049.07 226.95,1049.46 L223.414,1053 L226.95,1056.54 L226.95,1056.54 Z M234,1037 L210,1037 C207.791,1037 206,1038.79 206,1041 L206,1065 C206,1067.21 207.791,1069 210,1069 L234,1069 C236.209,1069 238,1067.21 238,1065 L238,1041 C238,1038.79 236.209,1037 234,1037 L234,1037 Z" id="cross-square" > </path> </g> </g> </g></svg></span> 
              
                }
              </span>
            
              </div>
   

      <Header />
      <Profile />
      <Education />
      <Career />
      <Skills />
      <Contact />
      <Footer />
      </Suspense>
    </>
  );
}
