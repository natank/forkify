export class Search {
  constructor(query) {
    this.query = query;
  }
  getResults(searchString) {
    let URL = `http://127.0.0.1:3000/search/?searchString=${searchString}`;
    return fetch(URL)
      .then(function (results) {
        return response.json()
      })
      .then(function (recipies) {
        this.recipies = recipies;
      })
      .catch(function (error) {
        alert(error.message)
      });
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