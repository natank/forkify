import {
  all
} from "q";
var LikedRecipes = null;
document.addEventListener('DOMContentLoaded', function () {
  LikedRecipes = {
    getAllLikedRecipes: () => {
      let allRecipes = localStorage.getItem('likedRecipes');

      if (allRecipes) {
        allRecipes = allRecipes.split(',')
      } else {
        allRecipes = [];
      }

      return allRecipes;
    },

    isLiked: id => {
      let strRecipes = localStorage.getItem('likedRecipes');
      if (strRecipes) {
        return strRecipes.includes(id);
      } else return false;
    },

    addRecipe: id => {
      let recipes = localStorage.getItem('likedRecipes');
      if (recipes) {
        recipes = recipes.split(',').concat(id).join(',')

        localStorage.setItem('likedRecipes', recipes)
      } else {
        localStorage.setItem('likedRecipes', id);
      }
    },

    removeRecipe: id => {
      let recipes = localStorage.getItem('likedRecipes');
      if (recipes) {
        recipes = recipes.split(',').filter((elem) => elem != id).join(',');
        localStorage.setItem('likedRecipes', recipes);
      }

    }
  }
});
export {
  LikedRecipes
}