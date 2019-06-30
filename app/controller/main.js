import '../view/scripts/main';

import {
  Search
} from '../model/Search';
/*
import Shopping from '../view/scripts/shopping';
import Likes from '../view/scripts/likes';
import Model from '../model/main';
import Search from '../view/scripts/search';

const DOMContainer = document.querySelector('.container');
const DOMResults = document.querySelector('.results');
const DOMRecipe = document.querySelector(".recipe");
const DOMShopping = document.querySelector('.shopping');
const DOMLikes = document.querySelector('.likes__list');


var shopping = new Shopping();
var likes = new Likes();

// DOMRecipe.innerHTML = recipe.node.innerHTML;
DOMShopping.innerHTML = shopping.node.innerHTML;
DOMLikes.innerHTML = likes.node.innerHTML;
*/

let search = new Search('pizza');
console.log(search);