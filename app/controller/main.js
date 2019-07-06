import '../view/scripts/main';

import {
  RecipeModel
} from '../model/Recipe'

import {
  RecipeView
} from '../view/scripts/Recipe'

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

var state = {};
const recipesPerPage = 10;

domElements.search.addEventListener('submit', onSearch);

// Event handlers
function onSearch(event) {
  event.preventDefault();
  try {
    var search = new Search('pizza');
    search
      .getResults()
      .then(() => {
        state.recipes = search.recipes;
        state.currentPage = 1;
        state.numPages = Math.ceil(state.recipes.count / recipesPerPage);

        controlRecipeList();
        controlPagination();
      })
  } catch (error) {
    console.log(`error getting search results: ${error}`);
  }
}


function onRecipe(event) {
  event.preventDefault();
  const hash = window.location.hash;
  state.recipe.Model = new RecipeModel(hash);
  state.recipe.Model.getData()
    .then(data => {
      state.recipe.Model.data = data;
      controlRecipe();
    });
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
    state.recipes.recipes.slice(
      pageStartIndex, pageStartIndex + recipesPerPage)
  );

  state.recipeList.render();

  domElements.getResults().forEach(recipe => {
    recipe.addEventListener('click', onRecipe, false);
  });
}

// Control the status of the pagination area
function controlPagination() {
  let props = {
    currentPage: state.currentPage,
    numPages: state.numPages
  };
  let pagination = new Pagination(props);
  pagination.render();
  domElements.getPaginationBtns().forEach((btn) => {
    btn.addEventListener('click', onPagination);
  });
}

function controlRecipe() {
  let data = state.recipe.Model.data;
  let props = {
    recipeId: data.id,
    imgUrl: data.image_url,
    title: data.title,
    ingredients: data.ingredients,
    sourceUrl: data.source_url,
    publisher: data.publisher
  }
  state.recipeView = new RecipeView(props);
  state.recipeView.render();

}