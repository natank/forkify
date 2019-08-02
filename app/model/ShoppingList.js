let shoppingList = [];

export function setIngredients(ingredients) {
  ingredients.forEach((ingredient) => {
    updateIngredient(ingredient);
  })
  saveIngredients();
  return [...shoppingList];
}
export function getIngredients() {
  return [...shoppingList];
}
export function deleteIngredient(name) {
  shoppingList = shoppingList.filter((ingredient) => !ingredient.ingredient.startsWith(name));
  saveIngredients();
  return [...shoppingList]
}

// updateIngredient - update the model of a single ingredient
// Note-without saving the model in the local storage(!)
export function updateIngredient(ingredient) {
  let currIngredient = shoppingList.find(elem => elem.ingredient === ingredient.ingredient);
  if (currIngredient) currIngredient.count = ingredient.count;
  else shoppingList.push(ingredient);
  saveIngredients();
  return [...shoppingList];
}

export function saveIngredients() {
  let data = JSON.stringify(shoppingList);
  localStorage.setItem('shoppingList', data);
}

export function readIngredients() {
  shoppingList = JSON.parse(localStorage.getItem('shoppingList'));
  if (shoppingList === null) shoppingList = [];
  return [...shoppingList];
}

export function clear() {
  shoppingList.length = 0;
  saveIngredients();
  return [...shoppingList];
}