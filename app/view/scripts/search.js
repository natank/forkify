const DOMSearchField = document.querySelector('.search__field');
const DOMSearch = document.querySelector('.search');

export default class Search {
  constructor(getRecipiesCb) {
    this.onSearch = this.onSearch.bind(this);
    DOMSearch.addEventListener('submit', this.onSearch);
    this.getRecipies = getRecipiesCb;
  }
  onSearch() {
    if (DOMSearchField.value) {
      this.getRecipies(DOMSearchField.value)
        .then(function (recipies) {
          console.log(recipies);
        })
    }
  }
}