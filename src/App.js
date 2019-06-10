import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';
import { async } from 'q';

const App = () => {
  const applicationID = 'b81a2622';
  const applicationKEY = '2fd6a1284573065b7e5030e8a8d11971';

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${applicationID}&app_key=${applicationKEY}`;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${applicationID}&app_key=${applicationKEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  useEffect(() => {
  getRecipes()
}, [query]);

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return(
    <div className="App">
        <form onSubmit={getSearch} className="searchForm">
          <input onChange={updateSearch} className="searchBar" type="text" value ={search}/>
          <button className = "searchButton" type="submit">
            Search
          </button>
        </form>
          <div className = "recipes">
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
  )
}

export default App;
