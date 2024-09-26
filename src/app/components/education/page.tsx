'use client'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import React from 'react';
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css';
import { data } from '../../lib/data';
export default function Education() {
    return (<>
        <motion.section
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{
                duration: 0.7,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}
            whileInView="animate"
            viewport={{
                once: false
            }}
            id=' ' className="home-div mt-5 scroll-mt-28">
            <div className='flex justify-center'><h1 className='text-grey-500 bg-white  rounded-full px-5 py-2'>Education</h1></div>
            <section className="profile-pic m-auto">
                <VerticalTimeline>
                    {data.education.map((item, index) => <React.Fragment key={index}>
                        <VerticalTimelineElement
                            visible={true}
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: item.bgColor, color: item.Color }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date={item.date}
                            iconStyle={{ background: item.bgColor, color: item.Color }}
                        >
                            <h3 className="vertical-timeline-element-title">{item.class}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{item.place}</h4>
                            <p className=''>
                                {item.location}
                            </p>
                        </VerticalTimelineElement>
                    </React.Fragment>)}

                </VerticalTimeline>
            </section>
            <strong>

            </strong>
        </motion.section>
    </>)
}