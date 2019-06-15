// This module renders the recipe list
import Recipe from '../../view/scripts/recipe';

const DOMResults = document.querySelector('.results__list');

export default class Results {
  constructor(results) {
    let result = new Recipe();
    DOMResults.appendChild(result.node);
  }
  render(results) {
    var x = new Recipe();
    var x2 = new Recipe();
    this.DOMResults.appendChild()
  }
}