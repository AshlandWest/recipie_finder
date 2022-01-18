import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const EditPantry = () => {
  const oldStorage = localStorage.getItem("ingredients")
    ? JSON.parse(localStorage.getItem("ingredients"))
    : [];
  const [storage, setStorage] = useState(oldStorage);

  const addItem = () => {
    const ingrdntField = document.getElementById("ingrdntField");
    if (ingrdntField.value) {
      const output = [...storage];
      output.push(ingrdntField.value);
      setStorage(output);
    }
  };

  const removeItem = (item) => {
    console.log(`removing ${item}`);
    const output = [...storage];
    const itemIndex = output.indexOf(item);
    output.splice(itemIndex, 1);
    setStorage(output);
  };

  useEffect(() => {
    localStorage.setItem("ingredients", JSON.stringify(storage));
  }, [storage]);

  return (
    <div id="edit-pantry">
      <h1>Edit Pantry</h1>
      <TextField id="ingrdntField" label="Add Ingredient" variant="standard" />
      <br />
      <button id="addItemButton" onClick={addItem}>
        Add Item
      </button>

      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          // bgcolor: "background.paper",
          position: "relative",
          overflow: "auto",
          maxHeight: 300,
          "& ul": { padding: 0 },
          margin: "auto",
          marginTop: 3,
          border: 1,
        }}
        subheader={<li />}
      >
        <ListItem key={`Staple Placeholder`}>
          <ListItemText primary={`Staples`} />
        </ListItem>

        <ListSubheader>{`Pantry Items`}</ListSubheader>
        {storage.map((item) => (
          <ListItem
            key={`item-pantryItems-${item}`}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => {
                  removeItem(item);
                }}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default EditPantry;
