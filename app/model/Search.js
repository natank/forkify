export class Search {
  constructor(query) {
    this.query = query;
  }
  getResults() {
    if (this.query) {
      let URL = `http://127.0.0.1:3000/search/?searchString=${this.query}`;
      return fetch(URL)
        .then(function (response) {
          return response.json()
        })
        .then((function (recipes) {
          this.recipes = recipes;
        }).bind(this))
        .catch(function (error) {
          alert(error.message)
        });
    }
  }
}

/*
  getRecipe(recipeId) {
    let URL = `http://127.0.0.1:3000/recipe/?recipeId=${recipeId}`;

    return fetch(URL)
      .then(function (response) {
        return response.json()
      })
      .catch(function (error) {
        alert(`Unable to get recipe: ${error.message}`);
      })
  }
}
*/