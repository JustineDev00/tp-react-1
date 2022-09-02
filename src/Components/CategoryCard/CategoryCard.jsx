import React from 'react';
import './CategoryCard.css';
const CategoryCard = ({title, image, description}) => {
    return (
        <div className="col-12 col-lg-3">
            <div className="card">
                <img className="card-img-top" src={image} alt={title}/>
                <div className="card-body">
                    <h4 className="card-title text-start">{title}</h4>
                    <p className="card-text text-start">{description}</p>
                </div>
            </div>

        </div>
    );
};

export default CategoryCard;