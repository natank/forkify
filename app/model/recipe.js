export class RecipeModel {
  constructor(id) {
    this.id = id;
  }
  static getRecipe(id) {
    let URL = `http://127.0.0.1:3000/recipe/?recipeId=${id}`;

    return fetch(URL)
      .then(function (response) {
        return response.json()
      })
      .then((function (recipe) {
        this.recipeData = recipe;
      }).bind(this))
      .catch(function (error) {
        alert(`Unable to get recipe: ${error.message}`);
      })
  }
}