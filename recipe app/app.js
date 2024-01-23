import React from 'react';
import './app.css';
import RecipeList from './components/RecipeList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Recipe App</h1>
        <RecipeList />
      </header>
    </div>
  );
}

export default App;
