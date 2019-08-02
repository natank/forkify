import helpers from '../../helpers';
import {
  domElements
} from './elements';

let recipe = {
  ingredients: null,
  servings: 4,
  title: "Spagetti Bolonez",
  publisher: "The great Chef",
  source_url: "https://google.com",
  isLove: true,
  image_url: "https://google.com",
  time: 24
}

export function init(currRecipe) {
  recipe = {
    ...currRecipe
  }
}

export function render() {
  domElements.recipe.innerHTML = '';
  renderFigure();
  renderDetails();
  renderIngredients();
  renderDirections();
}

export function updateIngredients(ingredients = recipe.ingredients, servings = recipe.servings) {
  recipe.ingredients = recipe.ingredients;
  recipe.servings = recipe.servings;
  renderDetails();
  renderIngredients();
}

export function updateLove(isLove = true) {
  recipe.isLove = isLove;
  updateLoveButton(isLove);
}


function updateLoveButton(isLove) {
  let domLove = domElements.getRecipeLove();
  if (isLove) {
    domElements.getRecipeLove().classList.remove('background-image--none');
  } else {
    domElements.getRecipeLove().classList.add('background-image--none');
  }
}

function renderFigure() {
  domElements.recipe.innerHTML += `<figure class="recipe__fig"><img src=${
    recipe.image_url
  } alt="this.props.title"/>
  <h1 class="recipe__title"><span>${recipe.title}</span></h1>
</figure>`;
}

function renderDetails() {
  let markup = `<div class="recipe__details">
  <div class="recipe__info">
    <svg class="recipe__info-icon">
      <use xlink:href="./images/spritemap.svg#sprite-stopwatch"></use>
    </svg><span class="recipe__info-data recipe__info-data--minutes">${recipe.time}</span><span class="recipe__info-text"> minutes</span>
  </div>
  <div class="recipe__info">
    <svg class="recipe__info-icon">
      <use xlink:href="./images/spritemap.svg#sprite-man"></use>
    </svg><span class="recipe__info-data recipe__info-data--people">${
      recipe.servings
    }</span><span class="recipe__info-text"> servings</span>
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
  </div>`;

  let recipeDetails = domElements.getRecipeDetails();
  if (recipeDetails != null) {
    recipeDetails.outerHTML = markup;
  } else {
    domElements.recipe.innerHTML += markup;
  }

  updateLoveButton(recipe.isLove);
}

function renderIngredients() {
  let space = '\u00A0';
  let ingredientsHTML = recipe.ingredients.reduce((markup, ingredient) => {
    return (
      markup +
      `<li class="recipe__item">
        <svg class="recipe__icon"></svg>
        <use xlink:href="./images/spritemap.svg#sprite-check"></use>
        <div class="recipe__count">${ingredient.count}</div>
        <div class="recipe__ingredient"></div><span class="recipe__unit">${
          ingredient.unit
        }</span>${space + ingredient.ingredient}
      </li>`
    );
  }, '');

  let markup = `<div class="recipe__ingredients">
  <ul class="recipe__ingredient-list">
    ${ingredientsHTML}
  </ul>
  <button class="btn-small recipe__btn">
    <svg class="search__icon">
      <use xlink:href="./images/spritemap.svg#sprite-shopping-cart"></use>
    </svg><span>Add to shopping list</span>
  </button>
</div>`;

  let recipeIngredients = domElements.getRecipeIngredients();
  if (recipeIngredients === null) domElements.recipe.innerHTML += markup;
  else {
    recipeIngredients.outerHTML = markup;
  }
}

function renderDirections() {
  domElements.recipe.innerHTML += `<div class="recipe__directions">
<h2 class="heading-2">How to cook it</h2>
<p class="recipe__directions-text">This recipe was carefully designed and tested by<span class="recipe__by">
  ${
    recipe.publisher
  }</span>. Please check out directions at their website.</p><a class="btn-small recipe__btn" href=${
    recipe.source_url
  } target="_blank"><span>Directions</span>
  <svg class="search__icon">
    <use xlink:href="./images/spritemap.svg#sprite-triangle-right"></use>
  </svg></a>
</div>`;
}