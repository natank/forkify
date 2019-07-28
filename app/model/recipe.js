import {
  reject,
  promised
} from 'q';

import {
  LikedRecipes
} from './LikedRecipes';

import {
  unitsLong
} from './units';

import {
  unitsShort
} from './units'

export class RecipeModel {
  constructor() {}
  getRecipe(id) {
    let URL = `http://127.0.0.1:3000/recipe?recipeId=${id}`;
    let that = this;
    return fetch(URL)
      .then(function (response) {
        return response.json();
      })
      .then(function (recipe) {
        that.data = recipe;
        let ingredients = parseIngredients(that.data.recipe.ingredients);
        let servings = 4; // the default servings
        let time = that.getTime();
        // find if the recipe is loved

        let isLove = LikedRecipes.isLiked(id);

        let obj = {
          ingredients: ingredients,
          servings: servings,
          id: that.data.recipe.recipe_id,
          isLove: isLove,
          time: time
        };

        that.data.recipe = {
          ...that.data.recipe,
          ...obj
        };
      })
      .catch(function (error) {
        alert(`Unable to get recipe: ${error.message}`);
      });

    function parseIngredients(ingredients) {
      /*
      Example strings
        1 teaspoon parsley
        1 teaspoon salt
        1/2 cup Manchengo sheep milk cheese (or Mozzarella)
        2 eggs
        cornmeal, to dust the pizza stone
      */
      // loop over ingredients.

      let newIngredients = ingredients.map(function (theText) {
        // Uniform units
        let ingredient = theText.toLowerCase();
        unitsLong.forEach((unit, i) => {
          ingredient = ingredient.replace(unit, unitsShort[i]);
        });
        // 2 Remove parantheses
        ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');

        ingredient = ingredient.slice(0, 35); //Limit ingredient length to 15 chars
        // 3) Parse ingredients into count, unit and ingredient
        const arrIng = ingredient.split(' ');
        const unitIndex = arrIng.findIndex(el2 => unitsShort.includes(el2));

        let objIng;
        if (unitIndex > -1) {
          // There is a unit
          const arrCount = arrIng.slice(0, unitIndex);
          let count;
          if (arrCount.length === 1) {
            count = eval(arrIng[0].replace('-', '+'));
          } else {
            count = eval(arrIng.slice(0, unitIndex.join('+')));
          }
          var roundedCount = Math.floor(count) + (Math.round((count - Math.floor(count))) ? 0.5 : 0.0);
          count = roundedCount;
          objIng = {
            count: count,
            unit: arrIng[unitIndex],
            ingredient: arrIng.slice(unitIndex + 1).join(' ')
          };
        } else if (parseInt(arrIng[0], 10)) {
          // There is NO unit, but 1st element is a number
          objIng = {
            count: parseInt(arrIng[0]),
            unit: '',
            ingredient: arrIng.slice(1).join(' ')
          };
        } else if (unitIndex === -1) {
          // There is NO unit and NO number in 1st position
          objIng = {
            count: 1,
            unit: '',
            ingredient: ingredient
          };
        }
        return objIng;
      });
      return newIngredients;
    }

  }

  getRecipe1(id) {
    this.data = {

      recipe: {
        publisher: "The Pioneer Woman",
        f2f_url: "http://food2fork.com/view/47154",
        ingredients: ["1 whole Pizza Crust", "Olive Oil, For Drizzling", "1 whole Large Red Onion, Halved And Thinly Sliced", "1/4 cup Brown Sugar", "Kosher Salt To Taste", "Parmesan Cheese, Grated", "10 ounces, weight Fresh Mozzarella Cheese, Thinly Sliced", "8 slices Prosciutto (more To Taste)", "1 teaspoon Instant Or Active Dry Yeast", "1-1/2 cup Warm Water", "4 cups All-purpose Flour", "1 teaspoon Kosher Salt", "1/3 cup Olive Oil"],
        source_url: "http://thepioneerwoman.com/cooking/2010/03/caramelized-onion-prosciutto-pizza/",
        recipe_id: id,
        image_url: "http://static.food2fork.com/4440156362_bd748d2c2183ef.jpg",
        social_rank: 99.99970993161892,
        publisher_url: "http://thepioneerwoman.com",
        title: "Caramelized Onion &amp; Prosciutto Pizza"
      }

    }

    /*this.data = {
      recipe: {
        publisher: 'Vintage Mixer',
        f2f_url: 'http://food2fork.com/view/7cad96',
        ingredients: [
          '1 small head of cauliflower, leaves and stems removed',
          '1 teaspoon basil',
          '1 teaspoon oregano',
          '1 teaspoon parsley',
          '1 teaspoon salt',
          '1/2 cup Manchengo sheep milk cheese (or Mozzarella)',
          '2 eggs',
          'cornmeal, to dust the pizza stone',
          '1 jar marinara or pizza sauce',
          '1/2 cup sheep milk cheese',
          '5-8 basil leaves'
        ],
        source_url: 'http://www.thevintagemixer.com/2013/03/cauliflower-pizza-crust-recipe/',
        recipe_id: id,
        image_url: 'http://static.food2fork.com/CauliflowerPizzaCrustRecipe06fdc.jpg',
        social_rank: 99.99880589962325,
        publisher_url: 'http://www.thevintagemixer.com/',
        title: 'Cauliflower Pizza Crust Recipe'
      }
    };*/
    let ingredients = parseIngredients(this.data.recipe.ingredients);
    let servings = 4; // the default servings
    let time = this.getTime();
    // find if the recipe is loved

    let isLove = LikedRecipes.isLiked(id);


    let obj = {
      ingredients: ingredients,
      servings: servings,
      id: this.data.recipe.recipe_id,
      isLove: isLove,
      time: time
    };

    this.data.recipe = {
      ...this.data.recipe,
      ...obj
    };

    let p = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 300);
    });
    return p;

    function parseIngredients(ingredients) {
      /*
      Example strings
        1 teaspoon parsley
        1 teaspoon salt
        1/2 cup Manchengo sheep milk cheese (or Mozzarella)
        2 eggs
        cornmeal, to dust the pizza stone
      */
      // loop over ingredients.

      let newIngredients = ingredients.map(function (theText) {
        // Uniform units
        let ingredient = theText.toLowerCase();
        unitsLong.forEach((unit, i) => {
          ingredient = ingredient.replace(unit, unitsShort[i]);
        });
        // 2 Remove parantheses
        ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');
        ingredient = ingredient.slice(0, 35); //limit the length of ingredient to 15 chars
        // 3) Parse ingredients into count, unit and ingredient
        const arrIng = ingredient.split(' ');
        const unitIndex = arrIng.findIndex(el2 => unitsShort.includes(el2));

        let objIng;
        if (unitIndex > -1) {
          // There is a unit
          const arrCount = arrIng.slice(0, unitIndex);
          let count;
          if (arrCount.length === 1) {
            count = eval(arrIng[0].replace('-', '+'));
          } else {
            count = eval(arrIng.slice(0, unitIndex.join('+')));
          }
          let roundedCount = Math.floor(count) + (Math.round((count - Math.floor(count))) ? .5 : .0);
          count = roundedCount;
          objIng = {
            count: count,
            unit: arrIng[unitIndex],
            ingredient: arrIng.slice(unitIndex + 1).join(' ')
          };
        } else if (parseInt(arrIng[0], 10)) {
          // There is NO unit, but 1st element is a number
          objIng = {
            count: parseInt(arrIng[0]),
            unit: '',
            ingredient: arrIng.slice(1).join(' ')
          };
        } else if (unitIndex === -1) {
          // There is NO unit and NO number in 1st position
          objIng = {
            count: 1,
            unit: '',
            ingredient: ingredient
          };
        }
        return objIng;
      });
      return newIngredients;
    }


  }

  getTime() {
    let numIngredients = this.data.recipe.ingredients.length;
    let time = numIngredients * 4;
    return time;
  }

  // Fun
  updateServings(isAdd) {
    var currServings = this.data.recipe.servings;
    let newServings = currServings;
    if (isAdd && currServings < 12) newServings = currServings + 2;
    else if (!isAdd && currServings > 2) newServings = currServings - 2;
    this.data.recipe.ingredients.map(objIng => {
      objIng.count = (objIng.count * newServings) / currServings;
      return objIng;
    });

    this.data.recipe.servings = newServings;
    return this.data.recipe;
  }
  toggleLove() {
    let id = this.data.recipe.recipe_id;
    let isLove = LikedRecipes.isLiked(id);

    // 1 - Recipe is liked - so unlike it - remove id from LikedRecipes
    if (isLove) LikedRecipes.removeRecipe(id);
    // 2- Recipe is unliked - like it - add the id to LikedRecipes
    else LikedRecipes.addRecipe(id);

    this.data.recipe.isLove = LikedRecipes.isLiked(id);
    let p = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 300);
    });
    return p;
  }

  getIngredients() {
    let ingredients = this.data.recipe.ingredients;
    return ingredients;
  }
}