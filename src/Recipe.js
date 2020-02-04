import React from "react";
import style from "./recipe.module.css";
const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h2>{title}</h2>
      <b>Ingredients: </b>
      <ol>
        {ingredients.map(ingredient => (
          <li type="I">{ingredient.text}</li>
        ))}
      </ol>
      <p><b>Calories: </b>{calories}</p>
      <img className= {style.image}src={image} alt=""></img>
    </div>
  );
};

export default Recipe;
