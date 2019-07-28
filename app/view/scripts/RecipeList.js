// This module renders the recipe list

/* Search recipe
count: Number of recipes in result (Max 30)
recipes: List of Recipe Parameters ->
	image_url: URL of the image
	source_url: Original Url of the recipe on the publisher's site
	f2f_url: Url of the recipe on Food2Fork.com
	title: Title of the recipe
	publisher: Name of the Publisher
	publisher_url: Base url of the publisher
	social_rank: The Social Ranking of the Recipe (As determined by our Ranking Algorithm)
	page: The page number that is being returned (To keep track of concurrent requests)
Sample Response
Request: https://www.food2fork.com/api/search?key={API_KEY}&q=shredded%20chicken

{
"count": 1, 
"recipes": [{
"publisher": "Allrecipes.com",
"social_rank": 99.81007979198002, 
"f2f_url": "https://www.food2fork.com/recipes/view/29159", 
"publisher_url": "http://allrecipes.com", 
"title": "Slow-Cooker Chicken Tortilla Soup", 
"source_url": "http://allrecipes.com/Recipe/Slow-Cooker-Chicken-Tortilla-Soup/Detail.aspx",
"page":1}]
}
*/

import {
  domElements
} from './elements'
let spinner = require('../templates/spinningLoader.pug');

export class RecipeList {
  constructor(recipes) {
    this.recipes = recipes;
  }
  render() {
    let DOMResultslist = document.createElement('ul');
    DOMResultslist.classList.add('results__list');
    // 1 - reset the results display
    const DOMResults = document.querySelector('.results');
    domElements.results.innerHTML = '';

    // 2 - determine the content of the list to display

    if (this.recipes) {
      // recipe list exists
      this.recipes.forEach(function (recipe) {
        // get the id
        const regex = /(?<=\/)\w*$/;
        const id = regex.exec(recipe.f2f_url);
        // get other fields
        const img = recipe.image_url;
        const resultName = recipe.title;
        const resultAuthor = recipe.publisher;

        // build the HTML
        const recipeHTML = getRecipeHTML(id, img, resultName, resultAuthor);

        // add the recipe to the list
        DOMResultslist.innerHTML += recipeHTML;
      })
    } else {
      // no recipe list - just render a spinner
      domElements.results.innerHTML = spinner();
    }

    // 3 - add the list to the DOM.
    domElements.results.appendChild(DOMResultslist);
  }

}

function getRecipeHTML(id, img, resultName, resultAuthor) {
  const recipeHTML = `<li><a class="results__link results__link--active" href="#${id}">
  <figure class="results__fig"><img src="${img}" alt="Test"/></figure>
  <div class="results__data">
    <h4 class="results__name">${resultName}</h4>
    <p class="results__author">${resultAuthor}</p>
  </div></a></li>`;
  return recipeHTML
}