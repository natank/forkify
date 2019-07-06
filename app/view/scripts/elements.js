let domElements = {
  search: document.querySelector('.search'),
  results: document.querySelector('.results'),
  recipe: document.querySelector('.recipe'),
  getPaginationBtns: () => [...document.querySelectorAll('.btn-inline')],
  getResults: () => [...document.querySelectorAll('.results__link')]
}

export {
  domElements
};