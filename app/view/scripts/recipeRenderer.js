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
            let DOMIngredient = document.createElement('div');
            DOMIngredient.innerHTML = recipeTemplate.node.querySelector('.recipe__ingredient-list li').innerHTML;

            // a regular expression to get the ingredient count out of the text.
            var re = /\d+[/]?[\d+]?/;
            // alert('1')
            DOMIngredient.querySelector('.recipe__count').innerText = re.exec(theText);
            ingredientsList.appendChild(DOMIngredient)
            // remove the count from the text
            theText = theText.slice(re.exec(theText))[1];
            
            // a regular expression to get the unit part of the text
            re =/(cup|g)/;
            DOMIngredient.querySelector('.recipe__unit').innerText = re.exec(theText);
            theText = theText.slice(re.exec(theText))[1];
            // alert('2')
            // What's left is the innerText
            DOMIngredient.innerText = theText;

            ingredientsList.innerHTML += DOMIngredient.innerHTML;
          })
          alert('3')
          // alert(ingredientsList);
          recipeTemplate.node.querySelector('.recipe__ingredient-list').innerHTML = ingredientsList.innerHTML;
          alert('4')
        }

        function updateImage() {
          let DOMImage = recipeTemplate.node.querySelector('.recipe__fig img').src = recipeData.image_url
        }


        updateIngredients();
        updateImage();

        document.querySelector('.recipe').innerHTML = recipeTemplate.node.innerHTML;



      })
      .catch(error => alert(`failed to get recipe data: ${error.stack}`));
  }
}