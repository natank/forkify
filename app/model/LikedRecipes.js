import {
  all
} from "q";
var LikedRecipes = null;
document.addEventListener('DOMContentLoaded', function () {
  LikedRecipes = {
    getAllLikedRecipes: () => {
      let allRecipes = localStorage.getItem('likedRecipes');

      if (allRecipes) {
        allRecipes = JSON.parse(allRecipes);
      } else {
        allRecipes = [];
      }

      return allRecipes;
    },

    isLiked: id => {
      let allRecipes = JSON.parse(localStorage.getItem('likedRecipes'));
      let isLiked = false;
      if (allRecipes) {
        for (let i = 0; i < allRecipes.length; i++) {
          if (allRecipes[i].recipe_id == id) {
            isLiked = true;
            break;
          }
        }
      }
      return isLiked;
    },

    addRecipe: recipe => {
      let recipes = JSON.parse(localStorage.getItem('likedRecipes'));
      let newLikedRecipe = {
        recipe_id: recipe.recipe_id,
        image_url: recipe.image_url,
        publisher: recipe.publisher,
        title: recipe.title
      }
      if (recipes) {
        recipes.push(newLikedRecipe);
      } else {
        recipes = [newLikedRecipe];
      }
      localStorage.setItem('likedRecipes', JSON.stringify(recipes));
    },

    removeRecipe: id => {
      let recipes = JSON.parse(localStorage.getItem('likedRecipes'));
      if (recipes) {
        recipes = recipes.filter((recipe) => recipe.recipe_id != id);
        localStorage.setItem('likedRecipes', JSON.stringify(recipes));
      }
    }
  }
});
export {
  LikedRecipes
}