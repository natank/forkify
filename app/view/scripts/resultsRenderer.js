// This module renders the recipe list
import SingleResult from './singleResult';
import Pagination from './pagination';
import RecipeRenderer from './recipeRenderer';

// The Results Renderer object renders the search results on the page.
// it receives a results object which contains the list of recipes found on the server

export default class ResultsRenderer {
  constructor(results, getRecipeCb) {
    this.results = results;
    this.getRecipeCb = getRecipeCb;

    this.currentPage = 1;
    this.resultsPerPage = 10;

    this.numPages = Math.ceil(this.results.recipes.length / this.resultsPerPage);
    this.pagination = new Pagination(this.numPages, this.currentPage);

    // Create the container of the result list
    this.node = document.createElement('div');

    this.render();
  }

  render() {
    // clear the element
    this.node.innerHTML = '';
    // add the result list HTML
    this.node.appendChild(this.createResultsHTML());
    // add the pagination HTML
    this.node.innerHTML += this.createPaginationHTML(this.currentPage, this.numPages);

    // Add the results to the DOM
    document.querySelector('.results').innerHTML = this.node.innerHTML;

    // Assign event listeners to results DOM elements
    document.querySelector('.results__btn--prev').addEventListener('click', (() => {
      this.onPagination(false)
    }).bind(this));
    document.querySelector('.results__btn--next').addEventListener('click', (() => {
      this.onPagination(true)
    }).bind(this));


    // Recipe link
    let links = document.querySelectorAll('.results__link');
    let getRecipeCb = this.getRecipeCb;

    [].forEach.call(links, function (link) {
      link.addEventListener('click', function (e) {
        let recipeId = this.getAttribute('href').replace('#', '');
        let recipeRenderer = new RecipeRenderer(recipeId, getRecipeCb);
      })
    })

  }

  onPagination(isNextPage) {
    if (isNextPage) {
      // Can't go beyond number of pages
      if (this.currentPage < this.numPages) {
        this.currentPage++;
        this.render();
      }
    } else {
      // Can't go less than 1
      if (this.currentPage > 1) {
        this.currentPage--;
        this.render();
      }
    }

  }
  // returns a ul element
  createResultsHTML() {

    // Create the result list element
    let DOMResultsList = document.createElement('ul');
    DOMResultsList.classList.add('.results__list');

    // Read the template HTML of a single result
    const singleResultTemplate = new SingleResult(); //html

    //loop over search results

    // this.results.recipes.forEach(function(elem, index){
    for (let i = 0; i < this.resultsPerPage; i++) {
      // Get the index based on the current page
      let index = i + (this.currentPage - 1) * this.resultsPerPage;
      // Break the loop if index exceeds number of elements
      if (index >= this.results.recipes.length) {
        break;
      }

      let elem = this.results.recipes[index]
      // Create the container for single result
      let result = document.createElement('div');
      // Add the html template of the element to the container
      result.innerHTML = singleResultTemplate.node.innerHTML;
      // Set the href attribute of the link
      result.querySelector('.results__link').href = '#' + elem.f2f_url.slice(elem.f2f_url.indexOf('view') + 5);
      //  set the src attribute of the image
      result.querySelector('img').src = elem.image_url;
      // Set the name of result
      result.querySelector('.results__name').innerText = elem.title;
      // Set the author
      result.querySelector('.results__author').innerText = elem.publisher;
      // Add result HTML content to the results list
      DOMResultsList.innerHTML += result.innerHTML;
    }

    return DOMResultsList;
  }
  createPaginationHTML() {
    // Read the template HTML of the pagination
    let pagination = new Pagination(this.numPages, this.currentPage);
    return pagination.node.innerHTML;

  }
}