import React from 'react';
import './CategoryCard.css';
const CategoryCard = () => {
    return (
        <div className="col-12 col-lg-3">
            <div className="card">
                <img className="card-img-top" src="https://picsum.photos/200/300" alt="Title"/>
                <div className="card-body">
                    <h4 className="card-title text-start">Category title</h4>
                    <p className="card-text text-start">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptates reprehenderit maiores natus? Accusantium tempore quidem doloribus explicabo consequatur nihil ratione fugiat, quisquam exercitationem numquam consectetur eveniet modi quam eligendi?</p>
                </div>
            </div>

        </div>
    );
};

export default CategoryCard;