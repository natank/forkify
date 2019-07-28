var domElements = {};
document.addEventListener('DOMContentLoaded', function () {
  domElements = {
    search: document.querySelector('.search'),
    searchField: document.querySelector('.search__field'),
    results: document.querySelector('.results'),
    recipe: document.querySelector('.recipe'),
    likes: document.querySelector('.likes'),
    shoppingList: document.querySelector('.shopping__list'),
    getPaginationBtns: () => [...document.querySelectorAll('.btn-inline')],
    getResults: () => [...document.querySelectorAll('.results__link')],
    getServings: () => document.querySelector('.recipe__info-data--pepople'),
    getInfoButtons: () => [
      ...document.querySelector('.recipe__info-buttons').children
    ],
    getRecipeDetails: () => document.querySelector('.recipe__details'),
    getRecipeIngredients: () => document.querySelector('.recipe__ingredients'),
    getRecipeLove: () => document.querySelector('.recipe__love'),
    getRecipeMinutes: () => document.querySelector('.recipe__info-data--minutes'),
    getLikesList: () => document.querySelector('.likes__list'),
    getAddToShoppingBtn: () => document.querySelector('.recipe__btn'),
    getShoppingCountInputs: () => document.querySelectorAll('.shopping__count input'),
    getShoppingDeleteOneBtns: () => document.querySelectorAll('.shopping__delete'),
    getShoppingDeleteAllBtn: () => document.querySelector('.shopping__btn')
  }
})

export {
  domElements
};