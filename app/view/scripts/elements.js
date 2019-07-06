let domElements = {
  search: document.querySelector('.search'),
  results: document.querySelector('.results'),
  getPaginationBtns: () => [...document.querySelectorAll('.btn-inline')]
}

export {
  domElements
};