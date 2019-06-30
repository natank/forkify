import RecipeTemplate from './recipeTemplate';
import helpers from '../../helpers';

export default class RecipeRenderer {
  constructor(recipeId, getRecipeCb) {
    getRecipeCb(recipeId)
      .then(recipeData => {
        let recipeTemplate = new RecipeTemplate();

        updateTitle();
        updateIngredients();
        updateImage();

        document.querySelector('.recipe').innerHTML =
          recipeTemplate.node.innerHTML;


        function updateIngredients() {
          let ingredientsList = document.createElement('div');

          // loop over ingredients. create a dom element for each ingredient and append to the list.
          recipeData.recipe.ingredients.forEach(function (theText) {
            // Create the container
            let DOMIngredientContainer = document.createElement('div');
            // append the element template to the contaner
            let DOMRecipeItem = recipeTemplate.node
              .querySelector('.recipe__ingredient-list .recipe__item')
              .cloneNode(true);

            DOMIngredientContainer.appendChild(
              DOMRecipeItem
            );

            // Update the contenet of the template fields with the data from the server.

            // Get the unit from the text via regexp
            const unitRegExp = /(cup|cups|can|cans|ounces|package|packages|tablespoon|tablespoons|handful|handfuls)/;
            const unit = unitRegExp.exec(theText);

            // Get the count from the text by spliting by the unit and taking the first part
            let count = theText.split(unit)[0];
            let ingredient = theText.split(unit)[1];


            DOMIngredientContainer.querySelector('.recipe__count').innerText = count;

            DOMIngredientContainer.querySelector('.recipe__unit').innerText = unit;

            let fte = helpers.getFirstTextNode(DOMRecipeItem);
            fte.nodeValue = ingredient;


            ingredientsList.innerHTML += DOMIngredientContainer.innerHTML;
          });

          recipeTemplate.node.querySelector(
            '.recipe__ingredient-list'
          ).innerHTML = ingredientsList.innerHTML;
        }

        function updateImage() {
          let DOMImage = (recipeTemplate.node.querySelector(
            '.recipe__fig img'
          ).src = recipeData.image_url);
        }

        function updateTitle() {
          let DOMRecipeTitle = recipeTemplate.node.querySelector(
            '.recipe__title span'
          );
          DOMRecipeTitle.innerText = recipeData.recipe.title;
          document.querySelector('.recipe').innerHTML =
            recipeTemplate.node.innerHTML;
        }
      })
      .catch(error => alert(`failed to get recipe data: ${error.stack}`));
  }
}