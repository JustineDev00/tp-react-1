import React from 'react';
import CategoryCard from '../../Components/CategoryCard/CategoryCard';
import './HomeScreen.css';



const HomeScreen = () => {
    const tableau = [
        {"id" : "1", "title" : "Hommes", "description" : "La mode pour les hommes", "image" : "./assets/images/man-cat.jpg"}, 
        {"id" : "2", "title" : "Femmes", "description" : "La mode pour les femmes", "image" : "./assets/images/woman-cat.jpg"}, 
        {"id" : "3", "title" : "Enfants", "description" : "La mode pour les enfants", "image" : "./assets/images/child-cat.jpg"}, 
        {"id" : "4", "title" : "Bébés", "description" : "La mode pour les bébés", "image" : "./assets/images/baby-cat.jpg"}
    ]
    
    const catCards = tableau.map(category => <CategoryCard key={category.id} title={category.title} description = {category.description} image={category.image}/>)
    
    
    return (
        <div>
            <h1>La boutique de Justine Vérin</h1>
            <div className="container">
                <div className="row">
                    {catCards}
                </div>
            </div>

        </div>
    );
};

export default HomeScreen;