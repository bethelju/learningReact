import React from 'react';
import style from './recipe.module.css'

const Recipe = ({id, title, calories, image, ingredients}) => {
    return(
        <div className = {style.recipe}>
            <h1>{title}</h1>
            <p>{calories}</p>
            <img className = {style.img}src={image} alt=""/>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
        </div>
    );
}

export default Recipe;