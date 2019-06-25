/**************************************************
This module is responsible for the functionality of the recipe section
 It renders the section and handle related events such as:
  Add to favorites
  Update servings 
  Add to shopping list
  
***************************************************/
import result from '../templates/result.pug';

export default class SingleResult {
  constructor(data) {
    this.node = document.createElement('div');
    this.node.innerHTML = result();
  }
}