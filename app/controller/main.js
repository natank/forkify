import '../view/scripts/main';

import {
  RecipeModel
} from '../model/recipe';

import {
  RecipeView
} from '../view/scripts/Recipe';
import {
  LikedRecipes as LikedRecipesView
} from '../view/scripts/LikedRecipes';

import {
  LikedRecipes as LikedRecipesModel
} from '../model/LikedRecipes';
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
  initShoppingList,
  onAddToShopping
} from './ShoppingList';
import {
  all
} from 'q';

// Global Veriables
const recipesPerPage = 10;
// wait for the DOM to load before accessing domElements
document.addEventListener('readystatechange', () => {
  if (document.readyState === 'complete') {
    // Attanching global Event handlers
    domElements.search.addEventListener('submit', onSearch);
    window.onhashchange = hashHandler;
    initLikedRecipes();
    initShoppingList();
  }
});
// Event handlers
function onSearch(event) {
  event.preventDefault();
  // reset the recipes property
  state.recipes.recipes = null;
  // display waiting spinner
  controlRecipeList('waiting');

  try {
    let queryString = domElements.searchField.value;
    if (queryString === '') {
      controlRecipeList('noQuery');
    } else if (queryString) {
      var search = new Search(queryString);
      search.getResults().then(() => {
        state.recipes = search.recipes;
        state.currentPage = 1;
        state.numPages = Math.ceil(state.recipes.count / recipesPerPage);
        if (state.recipes.error) {
          controlRecipeList('error');
        } else {
          controlRecipeList('validList');
          controlPagination();
        }
      });
    }
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
      controlRecipeList('validList');
      controlPagination();
    }
  } else if (btn.classList.contains('results__btn--next')) {
    if (state.currentPage < state.numPages) {
      state.currentPage++;
      controlRecipeList('validList');
      controlPagination();
    }
  }
}

// Control the status of the recipe list
function controlRecipeList(listState) {
  if (listState === 'noQuery') {
    state.recipeList = new RecipeList(listState);
  } else if (listState === 'validList') {
    let recipes = state.recipes.recipes;

    // recipes already arrived from the model
    let pageStartIndex = (state.currentPage - 1) * recipesPerPage;

    state.recipeList = new RecipeList(
      listState,
      state.recipes.recipes.slice(
        pageStartIndex,
        pageStartIndex + recipesPerPage
      )
    );
  } else if (listState === 'waiting' || listState === 'error') {
    // No recipes - Create a RecipeList with no list - waiting for items to come
    state.recipeList = new RecipeList(listState);
  }

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


// controlLove:
// save liked recipe to local storage
// update likedRecies and recipe view.
function controlLove() {
  return state.recipe
    .toggleLove() // update the model
    .then(() => {
      // updated the view
      let recipe = state.recipe.data.recipe;
      state.recipeView.updateLove(recipe.isLove);
      // update the likedRecipes view
      if (recipe.isLove) {
        state.likedRecipes.view.add(recipe);
      } else {
        state.likedRecipes.view.remove(recipe.recipe_id);
      }
    })
    .catch(err => alert(err));
}
// initLikedRecipes:
// get all liked recipes on document load
function initLikedRecipes() {
  state.likedRecipes.model = LikedRecipesModel;
  let allLikedRecipes = state.likedRecipes.model.getAllLikedRecipes();
  state.likedRecipes.view = new LikedRecipesView(allLikedRecipes);
}

function attachRecipeEventListeners() {
  domElements
    .getInfoButtons()[0]
    .addEventListener('click', onSubstractServings);
  domElements.getInfoButtons()[1].addEventListener('click', onAddServings);
  domElements.getRecipeLove().addEventListener('click', onLove);
  domElements.getAddToShoppingBtn().addEventListener('click', onAddToShopping);
}