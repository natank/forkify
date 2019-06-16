import '../view/scripts/main';
import '../model/main';
import Results from '../view/scripts/results';
import Recipe from '../view/scripts/recipe';
import Shopping from '../view/scripts/shopping';

const DOMContainer = document.querySelector('.container');
const DOMResults = document.querySelector('.results');
const DOMRecipe = document.querySelector(".recipe");
const DOMShopping = document.querySelector('.shopping');

var results = new Results();
var recipe = new Recipe();
var shopping = new Shopping();
var likes 

DOMResults.innerHTML = results.node.innerHTML;
DOMRecipe.innerHTML = recipe.node.innerHTML;
DOMShopping.innerHTML = shopping.node.innerHTML;
