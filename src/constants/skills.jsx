import React from 'react';
import * as Styles from '../styles/style.module.css';
import ProgressBar from '../constants/progress-bar.jsx';
import { Container , Row , Col } from 'react-bootstrap';
const Skills = ()=>{
    const coding = [
        {id:'1', title: 'HTML5/CSS3',bgcolor: "#d6225a", completed: 100 },
        {id:'2', title: 'PHP',bgcolor: "#d6225a", completed: 90 },
        {id:'3', title: 'LARAVEL',bgcolor: "#d6225a", completed: 80 },
        {id:'4', title: 'JAVASCRIPT',bgcolor: "#d6225a", completed: 60 },
        {id:'5', title: 'REACT JS',bgcolor: "#d6225a", completed: 50 },
      ];
      const design = [
        {id:'1', title: 'UI/UX',bgcolor: "#d6225a", completed: 40 },
      ];
      
    return (
        <div className={Styles.skills}>
            <h1>My Skills</h1>
            <h5>Professional Skills</h5>
            <Container>
                <Row>
                    <Col lg={6} md={6}>
                        <h4>Coding Skills</h4>
                            {coding.map((item) => (
                                <div key={item.id}>
                                <span style={{marginBottom:20}}>{item.title}</span>
                                <ProgressBar  bgcolor={item.bgcolor} completed={item.completed} />
                                </div>
                            ))}
                    </Col>
                    <Col lg={6} md={6}>
                        <h4>Design Skills</h4>
                        {design.map((item) => (
                            <div key={item.id}>
                                <span>{item.title}</span>
                                <ProgressBar bgcolor={item.bgcolor} completed={item.completed} />
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Skills;