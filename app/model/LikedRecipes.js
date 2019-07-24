import {
  all
} from "q";

let LikedRecipes = {
  getAllLikedRecipes: () => {
    let allRecipes = localStorage.getItem('likedRecipes');

    if (allRecipes) {
      allRecipes = allRecipes.split(',')

      allRecipes = allRecipes.map((id) => {
        let recipe = {
          title: 'Cauliflower Pizza Crust Volve Recipe',
          publisher: 'Zigi Golbo',
          image_url: 'http://static.food2fork.com/CauliflowerPizzaCrustRecipe06fdc.jpg',
          recipe_id: id
        }
        return recipe
      })
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

export {
  LikedRecipes
}