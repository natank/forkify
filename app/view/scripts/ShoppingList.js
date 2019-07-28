import {
    domElements
} from './elements';

import {
    steps
} from '../../model/units'

import {
    onCountChanged
} from '../../controller/ShoppingList'

import {
    onIngredientDelete
} from '../../controller/ShoppingList'

import {
    onClearShopping
} from '../../controller/ShoppingList'

let getListItemMarkup = function (count, units, name) {
    let markup = `<li class="shopping__item">
    <div class="shopping__count">
        <input type="number" value=${count} min='1' step=${steps.get(units) || 1}>
        <p>${units}</p>
    </div>
    <p class="shopping__description">${name}</p>
    <button class="shopping__delete btn-tiny">
        <svg>
            <use href="images/spritemap.svg#sprite-circle-with-cross"></use>
        </svg>
    </button>
  </li>`

    return markup;

}
let getShoppingDeleteMarkup = function () {
    let markup = `<button class="btn btn-small shopping__btn"><span>
     Clear List</span></button>`
    return markup;
}


export class ShoppingList {
    constructor(ingredients) {
        this.setIngredients(ingredients);
    }
    setIngredients(ingredients) {
        this.ingredients = ingredients;
        this.render();
    }
    clear() {
        this.ingredients = [];
        this.render();
    }
    deleteIngredient(ingredient) {


        // get all children of the shopping list
        let shoppingListChildren = domElements.shoppingList.children;
        let childToDelete = null;
        let currIngredient = null;
        // Find the ingredient to delete
        for (let i = 0; i < shoppingListChildren.length; i++) {
            currIngredient = shoppingListChildren[i].querySelector('.shopping__description').innerText;
            if (currIngredient === ingredient) {
                childToDelete = shoppingListChildren[i];
                break;
            }
        }
        if (childToDelete) {
            domElements.shoppingList.removeChild(childToDelete);
            this.ingredients = this.ingredients.filter(ingredient => !ingredient.ingredient.includes(currIngredient));
        }
        if (this.ingredients.length < 1) {
            this.render();

        }


    }
    render() {
        let domShoppingList = domElements.shoppingList;
        let shoppingDeleteAllBtn = domElements.getShoppingDeleteAllBtn();

        let markup = `<h2>No items yet...</h2>`
        if (this.ingredients.length > 0) { // there are items in the shopping list
            // add the shoppingList markup
            markup = this.ingredients.reduce((acc, ingredient) => {
                markup = getListItemMarkup(ingredient.count, ingredient.unit, ingredient.ingredient);
                return acc + markup
            }, '');
            if (!shoppingDeleteAllBtn) {
                // add the 'clear list' button markup
                let tempElement = document.createElement('div');
                domShoppingList.parentNode.insertBefore(tempElement, domShoppingList.nextSibling);
                tempElement.outerHTML = getShoppingDeleteMarkup();
            }
        } else { // no items in shopping list
            //remove the 'clear all' button

            if (shoppingDeleteAllBtn) {
                shoppingDeleteAllBtn.parentElement.removeChild(shoppingDeleteAllBtn);
            }
        }
        domShoppingList.innerHTML = markup;
        updateShoppingEventListeners();
    }
}

function updateShoppingEventListeners() {
    // update shoppingCount changed event
    let shoppingCountInputs = domElements.getShoppingCountInputs();
    let shoppingDeleteOneBtns = domElements.getShoppingDeleteOneBtns();
    let shoppingDeleteAllBtn = domElements.getShoppingDeleteAllBtn();

    if (shoppingCountInputs) {
        let events = ['change']
        shoppingCountInputs.forEach(elem => {
            events.forEach(event => elem.addEventListener(event, onCountChanged))
        })
    }

    if (shoppingDeleteOneBtns) {
        shoppingDeleteOneBtns.forEach(elem => {
            elem.addEventListener('click', onIngredientDelete)
        })
    }

    if (shoppingDeleteAllBtn) {
        shoppingDeleteAllBtn.addEventListener('click', onClearShopping);
    }
}