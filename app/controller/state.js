import {
  LikedRecipes as LikedRecipesModel
} from '../model/LikedRecipes';

import {
  LikedRecipes as LikedRecipesView
} from '../view/scripts/LikedRecipes';
var state = null;
document.addEventListener('DOMContentLoaded', function () {
  let allLikedRecipes = LikedRecipesModel.getAllLikedRecipes();
  let likedRecipeView = new LikedRecipesView(allLikedRecipes);
  state = {
    recipes: {},
    recipe: {},
    recipeView: {},
    currentPage: 1,
    numPages: 1,
    likedRecipes: {
      model: LikedRecipesModel,
      view: likedRecipeView
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