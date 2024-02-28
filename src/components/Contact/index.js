import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import React from 'react';

const Contact = () => {
    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                   <AnimatedLetters strArray={"Contact us!".split("")} idx={10} letterClass="text-animate"/> 
                </h1>

            </div>
        </div>
        </>
    )

}

export default Contact;