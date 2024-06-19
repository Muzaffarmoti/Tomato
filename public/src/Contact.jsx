import React from 'react';
import './Contact.css';
import Header from './Header';

const Contact = () => {
    const contacts = [
        {
            title: 'Phone Number',
            info: '+91 90368 99938',
            icon: '📞'
        },
        {
            title: 'Email Address',
            info: 'muzaffarmoti@gmail.com',
            icon: '✉️'
        },
        {
            title: 'Physical Address',
            info: '123 Main Sit,tumkur',
            icon: '🏠'
        }
    ];

    return (
        <div className="contact-container">
            <Header/>
            <h1>Contact Us</h1>
            <div className="cards-container">
                {contacts.map((contact, index) => (
                    <div key={index} className="card">
                        <div className="card-icon">{contact.icon}</div>
                        <h2>{contact.title}</h2>
                        <p>{contact.info}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contact;
