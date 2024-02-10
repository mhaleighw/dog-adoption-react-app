import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from "../AnimatedLetters";
import './index.scss';
import dogsData from '../../data/dogs.json';

const Adoption = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const idTimeOut = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => clearTimeout(idTimeOut);
    }, [])

    const renderAdoption = (dogs) => {
        return (
            <div className="images-container">
                {
                    dogs.map((dog, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img 
                                    src={dog.cover}
                                    className="dog-image"
                                    alt="dog"
                                />
                                <div className="content">
                                    <p className="title">{dog.title}</p>
                                    <h4 className="description">{dog.description}</h4>
                                </div>
                            </div>
                        )
                    })
                }
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

