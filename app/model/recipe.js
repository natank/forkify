import {
  reject
} from 'q';

export class RecipeModel {
  constructor() {}
  getRecipe1(id) {
    let URL = `http://127.0.0.1:3000/recipe?recipeId=${id}`;

    return fetch(URL)
      .then(function (response) {
        return response.json();
      })
      .then(function (recipe) {
        return recipe;
      })
      .catch(function (error) {
        alert(`Unable to get recipe: ${error.message}`);
      });
  }

  getRecipe(id) {
    this.data = {
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
        recipe_id: '7cad96',
        image_url: 'http://static.food2fork.com/CauliflowerPizzaCrustRecipe06fdc.jpg',
        social_rank: 99.99880589962325,
        publisher_url: 'http://www.thevintagemixer.com/',
        title: 'Cauliflower Pizza Crust Recipe',
      }
    };
    let ingredients = parseIngredients(
      this.data.recipe.ingredients
    );
    let servings = 4; // the default servings

    // find if the recipe is loved
    let lovedRecipes = localStorage.getItem('lovedRecipes');
    let isLove = false;
    if (lovedRecipes != null) {
      isLove = lovedRecipes.find(element => element === 'id');
    }


    let obj = {
      ingredients: ingredients,
      servings: servings,
      id: id,
      isLove: isLove,
    }

    this.data.recipe = {
      ...this.data.recipe,
      ...obj
    };

    let p = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data);
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
      const unitsLong = [
        'cup',
        'cups',
        'can',
        'cans',
        'ounce',
        'ounces',
        'package',
        'packages',
        'teaspoon',
        'teaspoons',
        'tablespoon',
        'tablespoons',
        'handful',
        'handfuls'
      ];
      const unitsShort = [
        'cup',
        'cup',
        'can',
        'can',
        'oz',
        'oz',
        'pckg',
        'pckg',
        'tsp',
        'tsp',
        'tbsp',
        'tbsp',
        'hand.',
        'hand.'
      ];
      let newIngredients = ingredients.map(function (theText) {
        // Uniform units
        let ingredient = theText.toLowerCase();
        unitsLong.forEach((unit, i) => {
          ingredient = ingredient.replace(unit, unitsShort[i]);
        });
        // 2 Remove parantheses
        ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');

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
    let lovedRecipes = localStorage.getItem('lovedRecipes');
    let isLove = false;
    let id = this.data.recipe.recipe_id;


    if (lovedRecipes != null) {
      // 1- loveArray exist. check if the recipe is liked
      let foundId = lovedRecipes.find(element => element === id);
      if (foundId != null) {
        // 2 - The recipe is liked - change it to unlike
        // remove the recipe id from lovedRecipes
        lovedRecipes = lovedRecipes.filter(currId => currId != id)
        isLove = false;
      } else {
        // 3 - The recipe is not liked - change it to like
        // push the recipe id to the lovedRecipes
        lovedRecipes.push(id);
        isLove = true
      }
    } else {
      // 4 - lovedRecipes does not exist. 
      localStorage.setItem('lovedReipes', [id]);
      isLove = true;
    }
    return isLove;
  }
}