import React from 'react';
import dogsData from '../../data/dogs.json';

const Adoption = () => {
    return (
        <div className="container adoption-page">
            <h1 className="page-title">Adoptable Dogs</h1>
            <div className="dogs-container">
                {dogsData.dogs.map((dog, idx) => (
                    <div className="dog-card" key={idx}>
                        <img 
                            src={dog.cover}
                            className="dog-image"
                            alt={dog.title}
                        />
                        <div className="dog-info">
                            <h2 className="dog-name">{dog.title}</h2>
                            <p className="dog-description">{dog.description}</p>
                            <p className="dog-price">Price: {dog.price}</p>
                            <button className="btn" onClick={() => window.open(dog.url)}>View</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Adoption;
