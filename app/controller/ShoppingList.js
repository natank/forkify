import {
  recipe
} from '../model/recipe';
import {
  ShoppingList as ShoppingListView
} from '../view/scripts/ShoppingList';
import {
  ShoppingList as ShoppingListModel
} from '../model/ShoppingList.js';
import {
  domElements
} from '../view/scripts/elements';
import {
  state
} from './state';

export function initShoppingList() {
  state.shoppingList.model = new ShoppingListModel();
  let ingredients = state.shoppingList.model.ingredients;
  state.shoppingList.view = new ShoppingListView(ingredients);
}

export function onAddToShopping(event) {
  // 1 get recipe ingredients from recipe model
  let ingredients = state.recipe.getIngredients();
  // 2 update recipe ingredients in the shoppingList model
  state.shoppingList.model.setIngredients(ingredients);
  // 3 get shopping list ingredients from shoppingList model
  ingredients = state.shoppingList.model.getIngredients();
  // 4 update recipe ingredients in the shopping list view.
  state.shoppingList.view.setIngredients(ingredients);
}

export function onCountChanged(event) {
  let count = event.target.value;
  let ingredient = event.target.closest('.shopping__item').querySelector('.shopping__description').innerText;
  state.shoppingList.model.updateCount(ingredient, count);
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
    state.shoppingList.model.deleteIngredient(ingredient);
  }
}

export function onClearShopping() {
  state.shoppingList.model.clear();
  state.shoppingList.view.clear();
}