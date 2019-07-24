import '../view/scripts/main';

import {
  RecipeModel
} from '../model/recipe';

import {
  RecipeView
} from '../view/scripts/Recipe';

import {
  RecipeList
} from '../view/scripts/RecipeList';

import {
  domElements
} from '../view/scripts/elements';

import {
  Search
} from '../model/Search';

import {
  Pagination
} from '../view/scripts/pagination';

import {
  state
} from './state';

import {
  initShoppingList
} from './ShoppingList';

import {
  onAddToShopping
} from './ShoppingList'
// Global Veriables

const recipesPerPage = 10;

// Attanching global Event handlers
domElements.search.addEventListener('submit', onSearch);
window.onhashchange = hashHandler;
initShoppingList();
// Event handlers
function onSearch(event) {
  event.preventDefault();
  try {
    var search = new Search('pizza');
    search.getResults().then(() => {
      state.recipes = search.recipes;
      state.currentPage = 1;
      state.numPages = Math.ceil(state.recipes.count / recipesPerPage);

      controlRecipeList();
      controlPagination();
    });
  } catch (error) {
    console.log(`error getting search results: ${error}`);
  }
}

function hashHandler(event) {
  const hash = window.location.hash.substr(1);
  if (hash != '') {
    state.recipe = new RecipeModel();

    state.recipe.getRecipe(hash).then(() => {
      controlRecipe();
    });
  }
  window.location.hash = '';
}

function onAddServings(event) {
  let add = true;
  state.recipe.updateServings(add);
  controlRecipeIngredients();
}

function onSubstractServings(event) {
  let substract = false;
  state.recipe.updateServings(substract);
  controlRecipeIngredients();
}

function onLove(event) {
  // Model
  // Call toggleLove
  // Get new love value from model
  controlLove();

  // View
  // Call Recipe.updateLove to render the new value
}

function onPagination(event) {
  let btn = event.target.closest('.btn-inline');

  if (btn.classList.contains('results__btn--prev')) {
    if (state.currentPage > 1) {
      state.currentPage--;
      controlRecipeList();
      controlPagination();
    }
  } else if (btn.classList.contains('results__btn--next')) {
    if (state.currentPage < state.numPages) {
      state.currentPage++;
      controlRecipeList();
      controlPagination();
    }
  }
}

// Control the status of the recipe list
function controlRecipeList() {
  let pageStartIndex = (state.currentPage - 1) * recipesPerPage;
  state.recipeList = new RecipeList(
    state.recipes.recipes.slice(pageStartIndex, pageStartIndex + recipesPerPage)
  );

  state.recipeList.render();
}

// Control the status of the pagination area
function controlPagination() {
  let props = {
    currentPage: state.currentPage,
    numPages: state.numPages
  };
  let pagination = new Pagination(props);
  pagination.render();
  domElements.getPaginationBtns().forEach(btn => {
    btn.addEventListener('click', onPagination);
  });
}

function controlRecipe() {
  let props = state.recipe.data.recipe;

  state.recipeView = new RecipeView(props);
  state.recipeView.render();
  attachRecipeEventListeners();
}

function controlRecipeIngredients() {
  state.recipeView.updateIngredients(state.recipe.data);
  attachRecipeEventListeners();
}

function controlLove() {
  return state.recipe
    .toggleLove()
    .then(() => {
      let recipe = state.recipe.data.recipe;
      state.recipeView.updateLove(recipe.isLove);
      // update the likedRecipes view
      if (recipe.isLove) {
        state.likedRecipes.view.add(recipe);
      } else state.likedRecipes.view.remove(recipe.recipe_id);
    })
    .catch(err => alert(err));
}

function controlLikedRecipes() {
  let likedRecipe = {
    image_url: recipe.image_url,
    title: recipe.title,
    publisher_url: recipe.publisher_url
  };
  state.LikedRecipes.view.add(recipe);
}

function attachRecipeEventListeners() {
  domElements
    .getInfoButtons()[0]
    .addEventListener('click', onSubstractServings);
  domElements.getInfoButtons()[1].addEventListener('click', onAddServings);
  domElements.getRecipeLove().addEventListener('click', onLove);
  domElements.getAddToShoppingBtn().addEventListener('click', onAddToShopping);
}