// IMPORTS
import {
  domElements
} from './elements';

// CODE
let likedRecipes = [];

var domLikesList;
document.addEventListener('DOMContentLoaded', function () {
  domLikesList = domElements.getLikesList();
});



export function init(recipes) {
  likedRecipes = [...recipes];
  render();
}

export function add(recipe) {
  // add the recipe to the list
  likedRecipes.push(recipe);
  let markup = getRecipeMarkup(recipe);
  // update the UI
  if (likedRecipes.length === 1) domLikesList.innerHTML = '';
  domLikesList.insertAdjacentHTML('beforeend', markup);
}
export function remove(id) {
  likedRecipes = likedRecipes.filter(recipe => id != recipe.recipe_id);
  render();
}
export function render() {
  // Clean current markup
  domLikesList.innerHTML = '';
  if (likedRecipes.length > 0) {
    let markup = likedRecipes.forEach((recipe) => {
      let markup = getRecipeMarkup(recipe);
      domLikesList.insertAdjacentHTML('beforeend', markup);
    });
  } else {
    domLikesList.innerHTML = `<li><h2>You dont have any liked recipes yet...</h2></li>`;
  }
}


let getRecipeMarkup = (recipe) => `<li><a class="likes__link" href="#${recipe.recipe_id}">
<figure class="likes__fig"><img src="${recipe.image_url}" alt="Test"/></figure>
<div class="likes__data">
  <h4 class="likes__name">${recipe.title}</h4>
  <p class="likes__author">${recipe.publisher}</p>
</div></a></li>`