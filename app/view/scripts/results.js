// This module renders the recipe list
import Result from '../../view/scripts/result';
import Pagination from './pagination';

export default class Results {
  constructor(results) {
    let result = new Result(); //html
    let pagination = new Pagination();  //html

    let resultsList = document.createElement('ul');
    resultsList.classList.add('.results__list');
    resultsList.innerHTML += result.node.innerHTML;

    this.node = document.createElement('div');
    this.node.appendChild(resultsList);
    this.node.innerHTML += pagination.node.innerHTML;
  }
}