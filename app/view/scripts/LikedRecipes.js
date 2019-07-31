import {
  domElements
} from './elements';

var domLikesList;
document.addEventListener('DOMContentLoaded', function () {
  domLikesList = domElements.getLikesList();
});

let getRecipeMarkup = (recipe) => `<li><a class="likes__link" href="#${recipe.recipe_id}">
<figure class="likes__fig"><img src="${recipe.image_url}" alt="Test"/></figure>
<div class="likes__data">
  <h4 class="likes__name">${recipe.title}</h4>
  <p class="likes__author">${recipe.publisher}</p>
</div></a></li>`


export class LikedRecipes {
  constructor(recipes) {
    this.recipes = recipes;
    this.render();
  }

  add(recipe) {
    let {
      publisher,
      recipe_id,
      image_url,
      title
    } = recipe;
    recipe = {
      publisher,
      recipe_id,
      image_url,
      title
    };
    if (Array.isArray(this.recipes)) {
      this.recipes.push(recipe);
    } else {
      this.recipes = [recipe]
    }
    let markup = getRecipeMarkup(recipe);
    domLikesList.insertAdjacentHTML('beforeend', markup);

  }
  remove(id) {
    if (Array.isArray(this.recipes)) {
      this.recipes = this.recipes.filter(recipe => id != recipe.recipe_id);
    }
    this.render();
  }
  render() {
    domLikesList.innerHTML = '';
    if (this.recipes.length > 0) {
      let markup = this.recipes.forEach((recipe) => {
        let markup = getRecipeMarkup(recipe);
        domLikesList.insertAdjacentHTML('beforeend', markup);
      });
    } else {
      domLikesList.innerHTML = `<li><h2>You dont have any liked recipes yet...</h2></li>`;
    }
  }
}