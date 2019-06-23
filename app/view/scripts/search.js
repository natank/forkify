const DOMSearchField = document.querySelector('.search__field');
const DOMSearch = document.querySelector('.search');
import Results from './results';

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
          let results = new Results(searchResults);
          results.render();
        })
    }
  }
}