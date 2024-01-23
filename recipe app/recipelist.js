import React, { useState } from 'react';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([
    { id: 1, title: 'Pasta Carbonara', ingredients: ['pasta', 'eggs', 'bacon', 'parmesan'] },
    { id: 2, title: 'Vegetable Stir Fry', ingredients: ['vegetables', 'soy sauce', 'rice'] },
  ]);

  return (
    <div>
      <h2>Recipe List</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <strong>{recipe.title}</strong>
            <ul>
              {recipe.ingredients.map(ingredient => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
