import React from 'react';
import './About.css';
import Header from './Header';

function About()  {
    const students = [
        {
            name: 'Dr.Pramod T C',
            phone: "+91 7667677891",
            major: 'B.E,M.Tech Ph.D',
            description: 'Assistant Professors of CSE Dept. SIT tumkur.',
        },
        {
            name: 'Arif A',
            phone:"+91 7259110820",
            major: 'CSE (1SI21CS402)',
            description: 'Student at SIT,tumkur ',
        },
        {
            name: 'Aditya K M ',
            phone:"+91 7259110820",
            major: 'CSE (1SI21CS003)',
            description: 'Student at SIT,tumkur ',
        },
        {
            name: 'Muzaffar M Motiwale',
            phone:"+91 7259110820",
            major: 'CSE (1SI21CS064)',
            description: 'Student at SIT,tumkur ',
        },
    ];

    return (
        <div className="about-container">
            <Header/>
            <h1>About Us</h1>
            <div className="cards-container">
                {students.map((student, index) => (
                    <div key={index} className="card">
                        <h2>{student.name}</h2>
                        <p><span>{student.major}</span> </p>
                        <p><strong>Phone:</strong> {student.phone}</p>
                        <p>{student.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
