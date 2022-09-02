import React from 'react';
import CategoryCard from '../../Components/CategoryCard/CategoryCard';
import './HomeScreen.css';



const HomeScreen = () => {
    const cat1 = {
        title: 'Hommes',
        image: './assets/images/man-cat.jpg',
        description: 'La mode pour les hommes',
    }
    
    const cat2 = {
        title: 'Femmes',
        image: './assets/images/woman-cat.jpg',
        description: 'La mode pour les femmes',
    }
    
    
    
    
    return (
        <div>
            <h1>La boutique de Justine Vérin</h1>
            <div className="container">
                <div className="row">
                    <CategoryCard title={cat1.title} image={cat1.image} description={cat1.description}/>
                    <CategoryCard title={cat2.title} image={cat2.image} description={cat2.description}/>
                </div>
            </div>

        </div>
    );
};

export default HomeScreen;