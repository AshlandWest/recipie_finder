import react, { useEffect, useState } from "react";

import { API_KEY } from "../env";

const Main = () => {
  const [recipieObj, setRecipieObj] = useState();
  const [ingredients, setIngredients] = useState(["apples", "flour", "sugar"]);

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${ingredients}&ignorePantry=true&ranking=2`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setRecipieObj(JSON.stringify(res));
      });
  }, []);

  return (
    <main>
      <h1>Recipe Finder</h1>
      <button id="edit-pantry">Edit Pantry</button>
      <button id="search-for-recipies">Search for recipies</button>
      <p>{recipieObj}</p>
    </main>
  );
};

export default Main;
