import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";

const App = () => {
  const APP_ID = "830cf297";
  const APP_KEY = "52c69f4b376519977a932b39db5eb444";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('fish')

  useEffect(() => {
    getRecipies();
    console.log("Fetching data");
  }, [query]);

  const getRecipies = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search)
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('')
  }

  return (
    <div className="App">
      <h1>Ganesh</h1>
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch}></input>
        <button className="searh-button" type="submit" >
          Search
        </button>
      </form>
      <div className="recipies">
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
};

export default App;
