import '../view/scripts/main';
import '../model/main';
import Results from '../view/scripts/results';
import Recipe from '../view/scripts/recipe';
import Shopping from '../view/scripts/shopping';
import Likes from '../view/scripts/likes';


const DOMContainer = document.querySelector('.container');
const DOMResults = document.querySelector('.results');
const DOMRecipe = document.querySelector(".recipe");
const DOMShopping = document.querySelector('.shopping');
const DOMLikes = document.querySelector('.likes__list');

var results = new Results();
var recipe = new Recipe();
var shopping = new Shopping();
var likes = new Likes();

DOMResults.innerHTML = results.node.innerHTML;
DOMRecipe.innerHTML = recipe.node.innerHTML;
DOMShopping.innerHTML = shopping.node.innerHTML;
DOMLikes.innerHTML =  likes.node.innerHTML;
