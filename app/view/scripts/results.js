// This module renders the recipe list
import Result from '../../view/scripts/result';
import Pagination from './pagination';

export default class Results {
  constructor(results) {
    const resultTemplate = new Result(); //html
    let pagination = new Pagination();  //html

    let DOMResultsList = document.createElement('ul');
    DOMResultsList.classList.add('.results__list');
    
    
    //loop over search results
    // alert(results.recipes[0].publisher);

    results.recipies.foreach(elem, function(){
      // Create the container of the new element
      let result = document.createElement('div');
      // Add the html template of the element to the container
      result.innerHTML = resultTemplate.node.innerHTML;
      // Set the href attribute of the link
      result.querySelector('.results__link').href = '#'+elem.f2f_url.slice(elem.f2f_url.indexOf('view')+5);
      //  set the src attribute of the image

      // Set the name of result

      // Set the author
    })
    
    
    
    DOMResultsList.innerHTML += result.node.innerHTML;

    this.node = document.createElement('div');
    this.node.appendChild(DOMResultsList);
    this.node.innerHTML += pagination.node.innerHTML;
  }
  render() {
    
  }
}