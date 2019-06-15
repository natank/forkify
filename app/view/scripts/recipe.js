/**************************************************
This module is responsible for the functionality of the recipe section
 It renders the section and handle related events such as:
  Add to favorites
  Update servings 
  Add to shopping list
  
***************************************************/
import recipe from '../templates/recipe.pug';

export default class Recipe {
  constructor(data) {
    this.node = document.createElement('LI');
    this.node.innerHTML = recipe();
  }
}