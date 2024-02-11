import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from "../AnimatedLetters";
import './index.scss';
import dogsData from '../../data/dogs.json';

const Adoption = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const idTimeOut = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => clearTimeout(idTimeOut);
    }, []);

    const renderAdoption = (dogs) => {
        return (
            <div className="images-container">
                {dogs.map((dog, idx) => (
                    <div className="image-box" key={idx}>
                        <div className="dog-info">
                            <img 
                                src={dog.cover}
                                className="dog-image"
                                alt="dog"
                            />
                        <div className="content">
                            <p><strong>Name:</strong> {dog.title}</p>
                            <p><strong>Age:</strong> {dog.age}</p>
                            <p><strong>Description:</strong> {dog.description}</p>
                            <p><strong>Price:</strong> {dog.price}</p>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }    

    return (
        <>
            <div className="container adoption-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Adopt a Frenchie!".split("")}
                        idx={10}
                    />
                </h1>
                <div>{renderAdoption(dogsData.dogs)}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Adoption;
