import React from 'react';
import CategoryCard from '../../Components/CategoryCard/CategoryCard';
import './HomeScreen.css'
const HomeScreen = () => {
    return (
        <div>
            <h1>La boutique de Justine Vérin</h1>
            <div className="container">
                <div className="row">
                    <CategoryCard />
                </div>
            </div>

        </div>
    );
};

export default HomeScreen;