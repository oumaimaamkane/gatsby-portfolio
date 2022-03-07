import React from "react"
import * as Styles from '../styles/style.module.css';
import classnames from 'classnames'
const Timeline = () => {
  const items = [
    {
      id:'1',
      Title:'Web Developer',
      subTitle : 'From Telecom Company',
      period:'July - August 2019',
      description:'An interesting internship where I learned how to build awesome websites and web applications , and how to host what I built in a live server using tools that I have learned .'
    },
    {
      id:'2',
      Title:'Mobile Developer',
      subTitle : 'Inovagit Company',
      period:'April - July 2020',
      description:'I had the chad to work in this internship with a team  lead by a scrum master , where I had the chance to try mobile development for the first time and it was intersting  '
    }
  ];

  return (
    <>
    <center><h3>My work history</h3></center>
    <div className={Styles.timeline}>
      {items.map(x=>(
        <div className={classnames(Styles.timelineContainer , Styles.timelineTop)} key={x.id}>
        <div className={Styles.timelineContent}>
          <h4>{x.Title}</h4>
          <span>{x.subTitle} ({x.period})</span>
          <p>{x.description}</p>
        </div>
      </div>
      ))}
    </div>
    </>
  )
};

export default Timeline;