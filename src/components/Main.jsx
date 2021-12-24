import react, { useEffect, useState } from "react";

import { API_KEY } from "../env";

const Main = () => {
  const [recipieObj, setRecipieObj] = useState();

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/716429/information?apiKey=${API_KEY}&includeNutrition=true`
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