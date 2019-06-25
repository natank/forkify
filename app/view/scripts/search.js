const DOMSearchField = document.querySelector('.search__field');
const DOMSearch = document.querySelector('.search');
import ResultsRenderer from './resultsRenderer';

export default class Search {
  constructor(getRecipiesCb) {
    this.onSearch = this.onSearch.bind(this);
    this.getRecipies = getRecipiesCb;
    DOMSearch.addEventListener('submit', this.onSearch);
  }
  onSearch(e) {
    e.preventDefault();
    if (DOMSearchField.value) {
      this.getRecipies(DOMSearchField.value)
        .then((function (searchResults) {
          this.resultsRenderer = new ResultsRenderer(searchResults);
        }).bind(this))
        .catch(error => {
          alert(`An error occured while rendering results ${error}`);
        }) 
    }
  }
}