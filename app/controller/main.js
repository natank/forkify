import '../view/scripts/main';

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

function onSearch(event) {
  event.preventDefault();
  try {
    var search = new Search('pizza');
    search.getResults()
      .then(() => {
        state.recipes = search.recipes;
        state.currentPage = 1;                        
        state.numPages = Math.ceil(state.recipes.count / recipesPerPage);
        state.recipeList = new RecipeList(state.recipes.slice(state.currentPage*(recipesPerPage-1, recipesPerPage)));
        state.recipeList.render();
      })
      .then(() => {
        let props = {
          currentPage: state.currentPage,
          numPages: state.numPages
        };
        let pagination = new Pagination(props);
        pagination.render();

        let recipes = document.querySelectorAll('.results__link')
        recipes.forEach((recipe) => {
          recipe.addEventListener('click', onRecipe)
        })
      });
  } catch (error) {
    console.log(`error getting search results: ${error}`);
  }


}

function onRecipe(event) {
  const hash = window.location.hash;
  const recipeModel = new RecipeModel(hash);
  recipeModel.getData()
    .then((data) => {

    });

}

function onPagination(event){
  if(event.target.classList.includes('results__btn--prev')) {
    if(state.currentPage > 1 && state.currentPage < state.numPages) {
      state.currentPage++;
      state.recipeList.render();
    }
  } else if (event.target.classList.includes('results__btn--next')) {
    
  }
}