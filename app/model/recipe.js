import {
  reject
} from "q";

export class RecipeModel {
  constructor(id) {
    this.id = id;
  }
  static getRecipe1(id) {
    let URL = `http://127.0.0.1:3000/recipe?recipeId=${id}`;

    return fetch(URL)
      .then(function (response) {
        return response.json()
      })
      .then(function (recipe) {
        return recipe;
      })
      .catch(function (error) {
        alert(`Unable to get recipe: ${error.message}`);
      })
  }

  static getRecipe() {
    let data = {
      "recipe": {
        "publisher": "Vintage Mixer",
        "f2f_url": "http://food2fork.com/view/7cad96",
        "ingredients": ["1 small head of cauliflower, leaves and stems removed", "1 teaspoon basil", "1 teaspoon oregano", "1 teaspoon parsley", "1 teaspoon salt", "1/2 cup Manchengo sheep milk cheese (or Mozzarella)", "2 eggs", "cornmeal, to dust the pizza stone", "1 jar marinara or pizza sauce", "1/2 cup sheep milk cheese", "5-8 basil leaves"],
        "source_url": "http://www.thevintagemixer.com/2013/03/cauliflower-pizza-crust-recipe/",
        "recipe_id": "7cad96",
        "image_url": "http://static.food2fork.com/CauliflowerPizzaCrustRecipe06fdc.jpg",
        "social_rank": 99.99880589962325,
        "publisher_url": "http://www.thevintagemixer.com/",
        "title": "Cauliflower Pizza Crust Recipe"
      }
    }
    data.recipe.ingredients = parseIngredients(data.recipe.ingredients);

    let p = new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(data);
      }, 300)
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
      const unitsLong = ['cup', 'cups', 'can', 'cans', 'ounce', 'ounces', 'package', 'packages', 'teaspoon', 'teaspoons', 'tablespoon', 'tablespoons', 'handful', 'handfuls'];
      const unitsShort = ['cup', 'cup', 'can', 'can', 'oz', 'oz', 'pckg', 'pckg', 'tsp', 'tsp', 'tbsp', 'tbsp', 'hand.', 'hand.']
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
          }
        } else if (parseInt(arrIng[0], 10)) {
          // There is NO unit, but 1st element is a number
          objIng = {
            count: parseInt(arrIng[0]),
            unit: '',
            ingredient: arrIng.slice(1).join(' ')
          }
        } else if (unitIndex === -1) {
          // There is NO unit and NO number in 1st position
          objIng = {
            count: 1,
            unit: '',
            ingredient: ingredient
          }
        }
        return objIng;
      })
      return newIngredients;
    }
  }


}