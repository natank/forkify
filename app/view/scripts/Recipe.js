import helpers from '../../helpers';
import './elements'
export class RecipeView {
  constructor(props) {
    this.props = props;
  }

  render() {

    renderFigure();
    renderDetails();
    renderIngredients();
    renderDirections();

    function renderFigure() {
      elements.recipe.innerHTML += `<figure class="recipe__fig"><img src="#" alt="Tomato"/>
      <h1 class="recipe__title"><span>Pasta with tomato cream sauce</span></h1>
    </figure>`
    }

    function renderDetails() {
      customElements.recipe.innerHTML += `<div class="recipe__details">
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use xlink:href="./images/spritemap.svg#sprite-stopwatch"></use>
      </svg><span class="recipe__info-data recipe__info-data--minutes">45</span><span class="recipe__info-text"> minutes</span>
    </div>
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use xlink:href="./images/spritemap.svg#sprite-man"></use>
      </svg><span class="recipe__info-data recipe__info-data--people">4</span><span class="recipe__info-text"> servings</span>
      <div class="recipe__info-buttons">
        <button class="btn-tiny">
          <svg>
            <use xlink:href="./images/spritemap.svg#sprite-circle-with-minus"></use>
          </svg>
        </button>
        <button class="btn-tiny">
          <svg>
            <use xlink:href="./images/spritemap.svg#sprite-circle-with-plus"></use>
          </svg>
        </button>
      </div>
    </div>
    <button class="recipe__love">
      <svg class="header__likes">
        <use xlink:href="./images/spritemap.svg#sprite-heart-outlined"></use>
      </svg>
    </button>
  </div>`
    }

    function renderIngredients() {
      customElements.recipe.innerHTML += `<div class="recipe__ingredients">
      <ul class="recipe__ingredient-list">
        <li class="recipe__item">
          <svg class="recipe__icon"></svg>
          <use xlink:href="./images/spritemap.svg#sprite-check"></use>
          <div class="recipe__count">1/4</div>
          <div class="recipe__ingredient"></div><span class="recipe__unit">cup</span>                            fresh basil, chopped or torn
        </li>
      </ul>
      <button class="btn-small recipe__btn">
        <svg class="search__icon">
          <use xlink:href="./images/spritemap.svg#sprite-shopping-cart"></use>
        </svg><span>Add to shopping list</span>
      </button>
    </div>`
    }

    function renderDirections() {
      customElements.recipe.innerHTML += `<div class="recipe__directions">
    <h2 class="heading-2">How to cook it</h2>
    <p class="recipe__directions-text">This recipe was carefully designed and tested by</p><span class="recipe__by">
      The Pioneer Woman. Please check out directions at their website.</span><a class="btn-small recipe__btn" href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/" target="_blank"><span>Directions</span>
      <svg class="search__icon">
        <use xlink:href="./images/spritemap.svg#sprite-triangle-right"></use>
      </svg></a>
  </div>`
    }
  }
}



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
}