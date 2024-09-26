'use client'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import React from 'react';
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css';
import { data } from '../../lib/data';
export default function Career() {
    return (<>
        <motion.section
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0, 0.71, 0.2, 1.01]
            }}
            
            id='career' className="home-div scroll-mt-28">
            <div className='flex justify-center'><h1 className='bg-white  rounded-full px-5 py-2'>Career</h1></div>
            <section className="profile-pic m-auto">

                <VerticalTimeline>
                    {data.career.map((item, index) => {
                    let pos=[0,2].includes(index)?'right':'left'
                    return (<React.Fragment key={index}>
                        <VerticalTimelineElement
                            visible={true}
                            position={pos}
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: item.bgColor, color: item.Color }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date={item.date}
                            iconStyle={{ background: item.bgColor, color: item.Color }}
                        >
                            <h3 className="vertical-timeline-element-title">{item.company}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{item.position}</h4>
                            <p className=''>
                                {item.place}
                            </p>
                        </VerticalTimelineElement>
                    </React.Fragment>)})}

                </VerticalTimeline>
            </section>
        </motion.section>
    </>)
}