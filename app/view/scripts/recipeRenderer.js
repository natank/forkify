import RecipeTemplate from './recipeTemplate';

export default class RecipeRenderer {
  constructor(recipeId, getRecipeCb) {


    getRecipeCb(recipeId)
      .then((recipeData) => {
        let recipeTemplate = new RecipeTemplate();

        // Update the title
        let DOMRecipeTitle = recipeTemplate.node.querySelector('.recipe__title span');
        DOMRecipeTitle.innerText = recipeData.recipe.title;
        document.querySelector('.recipe').innerHTML = recipeTemplate.node.innerHTML;

        // Update ingredients
        function updateIngredients() {

          let ingredientsList = document.createElement('div');

          // loop over ingredients. create a dom element for each ingredient and append to the list.
          recipeData.recipe.ingredients.forEach(function (theText) {
            let DOMIngredient = recipeTemplate.node.querySelector('.recipe__ingredient-list li');
            // a regular expression to get the ingredient count out of the text.
            var re = /\d+[/]?[\d+]?/;
            DOMIngredient.querySelector('.recipe__count').innerText = re.exec(theText);
            ingredientsList.appendChild(DOMIngredient)
          })
          alert(ingredientsList);
          document.querySelector('.recipe__ingredient-list').innerHTML = ingredientsList.innerHTML;
        }
        updateIngredients();




      })
      .catch(error => alert(`failed to get recipe data: ${error}`));
  }
}