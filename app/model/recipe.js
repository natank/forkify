import {
  LikedRecipes
} from './LikedRecipes';

import {
  fetchRecipe
} from './fetchRecipe';

export class Recipe {

  constructor(id) {
    this.id = id;
  }

  fetchData() {
    return this.fetchRecipe(this.id)
      .then(recipe => this.recipe = recipe);
  }


  getData() {
    return this.recipe;
  }

  // Fun
  updateServings(isAdd) {
    var currServings = this.recipe.servings;
    let newServings = currServings;
    if (isAdd && currServings < 12) newServings = currServings + 2;
    else if (!isAdd && currServings > 2) newServings = currServings - 2;
    this.recipe.ingredients.map(objIng => {
      objIng.count = (objIng.count * newServings) / currServings;
      return objIng;
    });

    this.recipe.servings = newServings;
    return this.recipe;
  }
  toggleLove() {
    let recipe = this.recipe;
    let id = recipe.recipe_id;
    let isLove = recipe.isLove;

    // 1 - Recipe is liked - so unlike it - remove id from LikedRecipes
    if (isLove) LikedRecipes.removeRecipe(id);
    // 2- Recipe is unliked - like it - add the id to LikedRecipes
    else LikedRecipes.addRecipe(recipe);

    this.recipe.isLove = LikedRecipes.isLiked(id);
    let p = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 300);
    });
    return p;
  }

  getIngredients() {
    let ingredients = this.recipe.ingredients;
    return ingredients;
  }

  getTime() {
    let numIngredients = this.recipe.ingredients.length;
    let time = numIngredients * 4;
    return time;
  }
}

Recipe.prototype.fetchRecipe = fetchRecipe;