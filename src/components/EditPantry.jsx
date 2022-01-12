import React, { useState, useEffect } from "react";

const EditPantry = () => {
  const oldStorage = localStorage.getItem("ingredients")
    ? JSON.parse(localStorage.getItem("ingredients"))
    : [];
  console.log(oldStorage);
  const [storage, setStorage] = useState(oldStorage);

  const addItem = () => {
    const ingrdntField = document.getElementById("ingrdntField");
    if (ingrdntField.value) {
      const output = [...storage];
      output.push(ingrdntField.value);
      setStorage(output);
    }
  };

  useEffect(() => {
    localStorage.setItem("ingredients", JSON.stringify(storage));
  }, [storage]);

  return (
    <div id="edit-pantry">
      <h1>Edit Pantry</h1>
      <fieldset>
        <legend>Ingredients</legend>
        <input type="text" id="ingrdntField" />
        <br />
        <button id="addItemButton" onClick={addItem}>
          Add Item
        </button>
      </fieldset>

      <div>{storage.join(", ")}</div>
    </div>
  );
};

export default EditPantry;
