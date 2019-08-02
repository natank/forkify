import {
  LikedRecipes
} from './LikedRecipes';

import {
  parseIngredients
} from './parseIngredients';

export function fetchRecipe(id) {
  let URL = `${location.origin}/recipe?recipeId=${id}`;
  return fetchData(URL)
    .then(newRecipe => {
      this.recipe = {
        ...newRecipe.recipe
      };
      let ingredients = parseIngredients(this.recipe.ingredients);
      let servings = 4; // the default servings
      let time = this.getTime();
      // find if the recipe is loved

      let isLove = LikedRecipes.isLiked(id);

      let obj = {
        ingredients: ingredients,
        servings: servings,
        id: this.recipe.recipe_id,
        isLove: isLove,
        time: time
      };

      this.recipe = {
        ...this.recipe,
        ...obj
      };
      return this.recipe;
    })
}


function fetchData(URL) {
  return fetch(URL)
    .then(function (response) {
      return response.json();
    })
}
/* develblock:start */
function fetchData1(URL) {
  let id = URL.split('=')[1];
  let newRecipe = {
    data: {
      recipe: {
        publisher: 'The Pioneer Woman',
        f2f_url: 'http://food2fork.com/view/47154',
        ingredients: [
          '1 whole Pizza Crust',
          'Olive Oil, For Drizzling',
          '1 whole Large Red Onion, Halved And Thinly Sliced',
          '1/4 cup Brown Sugar',
          'Kosher Salt To Taste',
          'Parmesan Cheese, Grated',
          '10 ounces, weight Fresh Mozzarella Cheese, Thinly Sliced',
          '8 slices Prosciutto (more To Taste)',
          '1 teaspoon Instant Or Active Dry Yeast',
          '1-1/2 cup Warm Water',
          '4 cups All-purpose Flour',
          '1 teaspoon Kosher Salt',
          '1/3 cup Olive Oil'
        ],
        source_url: 'http://thepioneerwoman.com/cooking/2010/03/caramelized-onion-prosciutto-pizza/',
        recipe_id: id,
        image_url: 'http://static.food2fork.com/4440156362_bd748d2c2183ef.jpg',
        social_rank: 99.99970993161892,
        publisher_url: 'http://thepioneerwoman.com',
        title: 'Caramelized Onion &amp; Prosciutto Pizza'
      }
    }
  };
  let p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(newRecipe);
    }, 300);
  });
  return p;
}
/* develblock:end */