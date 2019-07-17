let domElements = {
  search: document.querySelector('.search'),
  results: document.querySelector('.results'),
  recipe: document.querySelector('.recipe'),
  getPaginationBtns: () => [...document.querySelectorAll('.btn-inline')],
  getResults: () => [...document.querySelectorAll('.results__link')],
  getServings: () => document.querySelector('.recipe__info-data--pepople'),
  getInfoButtons: () => [
    ...document.querySelector('.recipe__info-buttons').children
  ],
  getRecipeDetails: () => document.querySelector('.recipe__details'),
  getRecipeIngredients: () => document.querySelector('.recipe__ingredients'),
  getRecipeLove: () => document.querySelector('.recipe__love')
};

export {
  domElements
};