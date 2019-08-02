// This module renders the recipe section of the page
import recipeTemplate from '../templates/recipeTemplate.pug'


export class RecipeTemplate {
    constructor(details, ingredients) {
        this.node = document.createElement('div');
        this.node.innerHTML = recipeTemplate();
    }
}