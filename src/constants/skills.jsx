import React from 'react';
import * as Styles from '../styles/style.module.css';
import ProgressBar from '../constants/progress-bar.jsx';

const Skills = ()=>{
    const coding = [
        { title: 'HTML5/CSS3',bgcolor: "#d6225a", completed: 100 },
        { title: 'PHP',bgcolor: "#d6225a", completed: 90 },
        { title: 'LARAVEL',bgcolor: "#d6225a", completed: 80 },
        { title: 'JAVASCRIPT',bgcolor: "#d6225a", completed: 60 },
        { title: 'REACT JS',bgcolor: "#d6225a", completed: 50 },
      ];
      const design = [
        { title: 'UI/UX',bgcolor: "#d6225a", completed: 40 },
      ];
      
    return (
        <div className={Styles.skills}>
            <h1>My Skills</h1>
            <h5>Professional Skills</h5>
                <div className="row">
                    <div className="col-lg-6" style={{paddingLeft:'2em'}}>
                        <h4>Coding Skills</h4>
                            {coding.map((item, idx) => (
                                <>
                                <span style={{marginBottom:20}}>{item.title}</span>
                                <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                                </>
                            ))}
                    </div>
                    <div className="col-lg-6">
                        <h4>Design Skills</h4>
                        {design.map((item, idx) => (
                            <>
                                <span>{item.title}</span>
                                <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                            </>
                        ))}
                    </div>
                </div>
        </div>
    );
}
export default Skills;