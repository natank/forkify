// This module renders the recipe list
import SingleResult from './singleResult';
import Pagination from './pagination';

// The Results Renderer object renders the search results on the page.
// it receives a results object which contains the list of recipies found on the server

export default class ResultsRenderer {
  constructor(results) {
    this.results = results;

    // Create the container of the result list
    this.node = document.createElement('div');
    // add the result list
    this.node.appendChild(this.createResultsHTML());
    // add the pagination
    this.node.innerHTML += this.createPaginationHTML();

    this.render();
  }


  // returns a ul element
  createResultsHTML(){

    // Create the result list element
    let DOMResultsList = document.createElement('ul');
    DOMResultsList.classList.add('.results__list');

    // Read the template HTML of a single result
    const singleResultTemplate = new SingleResult(); //html
    
    //loop over search results
    
    this.results.recipes.forEach(function(elem){
      // Create the container for single result
      let result = document.createElement('div');
      // Add the html template of the element to the container
      result.innerHTML = singleResultTemplate.node.innerHTML;
      // Set the href attribute of the link
      result.querySelector('.results__link').href = '#'+elem.f2f_url.slice(elem.f2f_url.indexOf('view')+5);
      //  set the src attribute of the image
      result.querySelector('img').src=elem.image_url;
      // Set the name of result
      result.querySelector('.results__name').innerText = elem.title;
      // Set the author
      result.querySelector('.results__author').innerText = elem.publisher;
      // Add result HTML content to the results list
      DOMResultsList.innerHTML += result.innerHTML;
    })

    return DOMResultsList;
  }
  createPaginationHTML(){
    // Read the template HTML of the pagination
    let pagination = new Pagination(); 
    return pagination.node.innerHTML;

  }

  render() {
    document.querySelector('.results').innerHTML = this.node.innerHTML;
  }
 }

