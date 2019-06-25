const DOMSearchField = document.querySelector('.search__field');
const DOMSearch = document.querySelector('.search');
import ResultsRenderer from './resultsRenderer';

export default class Search {
  constructor(getRecipiesCb) {
    this.onSearch = this.onSearch.bind(this);
    DOMSearch.addEventListener('submit', this.onSearch);
    this.getRecipies = getRecipiesCb;
  }
  onSearch(e) {
    e.preventDefault();
    if (DOMSearchField.value) {
      this.getRecipies(DOMSearchField.value)
        .then(function (searchResults) {
          this.resultsRenderer = new ResultsRenderer(searchResults);
        })
        .catch(error => {
          alert(`An error occured while rendering results ${error}`);
        }) 
    }
  }
}