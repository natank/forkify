// This module renders the recipe section of the page
import recipe from '../templates/recipe.pug'


export default class Recipe {
    constructor(details, ingredients){
        this.node = document.createElement('div');
        this.node.innerHTML = recipe();
    }
}