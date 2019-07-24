import {
    domElements
} from './elements';

let getMarkup = function (count, units, name) {
    return `<li class="shopping__item">
    <div class="shopping__count">
        <input type="number" value=${count} step="100">
        <p>${units}</p>
    </div>
    <p class="shopping__description">${name}</p>
    <button class="shopping__delete btn-tiny">
        <svg>
            <use href="images/spritemap.svg#sprite-circle-with-cross"></use>
        </svg>
    </button>
  </li>`

}

export class ShoppingList {
    constructor(ingredients) {
        this.setIngredients(ingredients);
    }
    setIngredients(ingredients) {
        this.ingredients = ingredients;
        this.render();
    }
    render() {
        let domShoppingList = domElements.shoppingList;

        let markup = this.ingredients.reduce((acc, ingredient) => {
            let markup = getMarkup(ingredient.count, ingredient.unit, ingredient.ingredient);
            return acc + markup
        }, '');
        domShoppingList.innerHTML = markup;
    }
}