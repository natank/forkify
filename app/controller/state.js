import {
  LikedRecipes as LikedRecipesModel
} from '../model/LikedRecipes';

import {
  LikedRecipes as LikedRecipesView
} from '../view/scripts/LikedRecipes';
var state = null;
document.addEventListener('DOMContentLoaded', function () {
  state = {
    recipes: {},
    recipe: {},
    /*recipeView: {},*/
    currentPage: 1,
    numPages: 1,
    likedRecipes: {
      model: null,
    },
    shoppingList: {
      model: {},
      view: {}
    }
  };
})
export {
  state
};