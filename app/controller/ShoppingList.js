import {
  ShoppingList as ShoppingListView
} from '../view/scripts/ShoppingList';

import * as shoppingList from '../model/ShoppingList.js';

import {
  state
} from './state';

export function initShoppingList() {
  state.shoppingList.model = shoppingList.getIngredients();
  let ingredients = shoppingList.readIngredients();
  state.shoppingList.view = new ShoppingListView(ingredients);
}

export function onAddToShopping(event) {
  // 1 get recipe ingredients from recipe model
  let ingredients = state.recipe.getIngredients();
  // 2 update recipe ingredients in the shoppingList model
  state.shoppingList.model = shoppingList.setIngredients(ingredients);
  // 3 update recipe ingredients in the shopping list view.
  ingredients = state.shoppingList.model;
  state.shoppingList.view.setIngredients(ingredients);
}

export function onCountChanged(event) {
  let count = Number(event.target.value);
  let ingredient = event.target.closest('.shopping__item').querySelector('.shopping__description').innerText;
  let updatedIngredient = {
    ingredient: ingredient,
    count: count
  }
  state.shoppingList.model = shoppingList.updateIngredient(updatedIngredient);
}

export function onIngredientDelete(event) {
  let shoppingDeleteBtn = event.target;
  let shoppingItem = shoppingDeleteBtn.closest('.shopping__item');
  let ingredient = null;
  if (shoppingItem) {
    ingredient = shoppingItem.querySelector('.shopping__description').innerText;
  }
  if (ingredient) {
    state.shoppingList.view.deleteIngredient(ingredient);
    state.shoppingList.model = shoppingList.deleteIngredient(ingredient);
  }
}

export function onClearShopping() {
  state.shoppingList.model = shoppingList.clear();
  state.shoppingList.view.clear();
}