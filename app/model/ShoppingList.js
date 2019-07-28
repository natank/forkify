export class ShoppingList {
  constructor() {
    this.readIngredients();
  }
  setIngredients(ingredients) {
    ingredients.forEach((ingredient) => {
      this.updateIngredient(ingredient);
    })
    this.saveIngredients();
  }
  getIngredients() {
    return this.ingredients;
  }
  deleteIngredient(name) {
    this.ingredients = this.ingredients.filter((ingredient) => !ingredient.ingredient.startsWith(name));
    this.saveIngredients();
  }

  // updateIngredient - update the model of a single ingredient
  // Note-without saving the model in the local storage(!)
  updateIngredient(ingredient) {
    let exsistingIngredient = false;
    this.ingredients = this.ingredients.map((elem) => {
      if (elem.ingredient === ingredient.ingredient) {
        exsistingIngredient = true;
        elem.count += ingredient.count;
      }
      return elem;
    })
    if (!exsistingIngredient) this.ingredients.push(ingredient);
  }

  saveIngredients() {
    let ingredients = JSON.stringify(this.ingredients);
    localStorage.setItem('shoppingList', ingredients);
  }

  readIngredients() {
    this.ingredients = JSON.parse(localStorage.getItem('shoppingList'));
    if (this.ingredients === null) this.ingredients = [];
  }
  updateCount(ingredient, newCount) {
    for (let i = 0; i < this.ingredients.length; i++) {
      if (this.ingredients[i].ingredient === ingredient) {
        this.ingredients[i].count = newCount;
        this.saveIngredients();
        break;
      }
    }
  }

  clear() {
    this.ingredients = [];
    this.saveIngredients();
  }

}