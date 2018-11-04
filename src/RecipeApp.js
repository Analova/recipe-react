import React, { Component } from 'react';
import logo from './logo.svg';
import './RecipeApp.css';
import Recipe from "./Recipe"

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <Recipe title="Italian Pasta" 
        ingretients= {["water", "flour"]}
        instructions="Mix ingredients"
        img="img1.jpg"
        />
       
      </div>
    );
  }
}

export default RecipeApp;
