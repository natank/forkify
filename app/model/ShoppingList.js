export class ShoppingList {
  constructor() {
    this.readIngredients();
  }
  setIngredients(ingredients) {
    this.ingredients = ingredients;
  }
  getIngredients() {
    return this.ingredients;
  }
  deleteIngredient(name) {
    this.ingredients = this.ingredients.filter((ingredient) => ingredient.ingredient != name);
    this.saveIngredients();
  }
  updateIngredient(ingredient) {
    this.ingredients = this.ingredients.filter((ingredient) => ingredient.ingredient != ingredient.ingredient);
    this.ingredients.push(ingredient);
    this.saveIngredients();
  }

  saveIngredients() {
    let ingredients = JSON.stringify(this.ingredients);
    localStorage.setItem('shoppingList', ingredients);
  }

  readIngredients() {
    this.ingredients = JSON.parse(localStorage.getItem('shoppingList'));
    if (this.ingredients === null) this.ingredients = [];
  }


}