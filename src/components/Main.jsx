import react, { useEffect, useState } from "react";
import { API_KEY } from "../env";

import { Route, Routes } from "react-router-dom";

import FullRecipie from "./FullRecipie";
import EditPantry from "./EditPantry";

const Main = () => {
  const [recipieObj, setRecipieObj] = useState();
  const [ingredients, setIngredients] = useState(["apples", "flour", "sugar"]);

  const singleRecipe = {
    id: 673463,
    title: "Slow Cooker Apple Pork Tenderloin",
    image: "https://spoonacular.com/recipeImages/673463-312x231.jpg",
    imageType: "jpg",
    usedIngredientCount: 2,
    missedIngredientCount: 2,
    missedIngredients: [
      {
        id: 6008,
        amount: 2.0,
        unit: "cups",
        unitLong: "cups",
        unitShort: "cup",
        aisle: "Canned and Jarred",
        name: "beef broth",
        original: "2 cups beef broth",
        originalString: "2 cups beef broth",
        originalName: "beef broth",
        metaInformation: [],
        meta: [],
        image: "https://spoonacular.com/cdn/ingredients_100x100/beef-broth.png",
      },
      {
        id: 10218,
        amount: 1.0,
        unit: "serving",
        unitLong: "serving",
        unitShort: "serving",
        aisle: "Meat",
        name: "pork tenderloin",
        original: "Pork Tenderloin",
        originalString: "Pork Tenderloin",
        originalName: "Pork Tenderloin",
        metaInformation: [],
        meta: [],
        image:
          "https://spoonacular.com/cdn/ingredients_100x100/pork-tenderloin-raw.png",
      },
    ],
    usedIngredients: [
      {
        id: 9003,
        amount: 1.0,
        unit: "serving",
        unitLong: "serving",
        unitShort: "serving",
        aisle: "Produce",
        name: "apple",
        original: "apple slicer (*optional)",
        originalString: "apple slicer (*optional)",
        originalName: "apple slicer (*optional)",
        metaInformation: ["(*optional)"],
        meta: ["(*optional)"],
        image: "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg",
      },
      {
        id: 1069003,
        amount: 2.0,
        unit: "",
        unitLong: "",
        unitShort: "",
        aisle: "Produce",
        name: "green apples",
        original: "2 green apples",
        originalString: "2 green apples",
        originalName: "green apples",
        metaInformation: ["green"],
        meta: ["green"],
        image:
          "https://spoonacular.com/cdn/ingredients_100x100/grannysmith-apple.png",
      },
    ],
    unusedIngredients: [],
    likes: 0,
  };

  // useEffect(() => {
  //   fetch(
  //     `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${ingredients}&ignorePantry=true&ranking=2`
  //   )
  //     .then((res) => res.json())
  // }, []);

  return (
    <main>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <FullRecipie
              recipieTitle={singleRecipe.title}
              recipieID={singleRecipe.id}
              recipieImage={singleRecipe.image}
            />
          }
        />
        <Route exact path="/EditPantry" element={<EditPantry />} />
      </Routes>
    </main>
  );
};

export default Main;
