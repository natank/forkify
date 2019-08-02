import {
  promised
} from "q";

export function getResults(query) {
  if (query) {
    let URL = `${location.origin}/search/?searchString=${query}`;
    return fetch(URL)
      .then(function (response) {
        return response.json()
      })
      .then(function (recipes) {
        return recipes;
      })
  } else {
    let p = new promised(() => "no query");
  }
}
/* develblock:start */
export function getResults1(query) {
  let data = {
    count: 30,
    recipes: [{
        publisher: 'All Recipes',
        f2f_url: 'http://food2fork.com/view/21636',
        title: 'Pizza Casserole',
        source_url: 'http://allrecipes.com/Recipe/Pizza-Casserole/Detail.aspx',
        recipe_id: '21636',
        image_url: 'http://static.food2fork.com/5100898cc5.jpg',
        social_rank: 99.9999671450989,
        publisher_url: 'http://allrecipes.com'
      },
      {
        publisher: 'Chow',
        f2f_url: 'http://food2fork.com/view/28d71e',
        title: 'Breakfast Pita-Pizza Recipe',
        source_url: 'http://www.chow.com/recipes/30076-breakfast-pita-pizza',
        recipe_id: '28d71e',
        image_url: 'http://static.food2fork.com/30076_breakfast_pita_pizza_620eb14.jpg',
        social_rank: 99.99995076785578,
        publisher_url: 'http://www.chow.com'
      },
      {
        publisher: 'The Pioneer Woman',
        f2f_url: 'http://food2fork.com/view/46999',
        title: 'Fig-Prosciutto Pizza with Arugula',
        source_url: 'http://thepioneerwoman.com/cooking/2011/09/fig-prosciutto-pizza-with-arugula/',
        recipe_id: '46999',
        image_url: 'http://static.food2fork.com/5278973957_3f9f9a21c2_o7a1b.jpg',
        social_rank: 99.9999308909559,
        publisher_url: 'http://thepioneerwoman.com'
      },
      {
        publisher: 'Simply Recipes',
        f2f_url: 'http://food2fork.com/view/36941',
        title: 'Skillet Tortilla Pizza',
        source_url: 'http://www.simplyrecipes.com/recipes/skillet_tortilla_pizza/',
        recipe_id: '36941',
        image_url: 'http://static.food2fork.com/skillettortillapizza300x2006c814e2a.jpg',
        social_rank: 99.99977934745917,
        publisher_url: 'http://simplyrecipes.com'
      },
      {
        publisher: 'Smitten Kitchen',
        f2f_url: 'http://food2fork.com/view/419ddf',
        title: 'breakfast pizza',
        source_url: 'http://smittenkitchen.com/blog/2010/03/breakfast-pizza/',
        recipe_id: '419ddf',
        image_url: 'http://static.food2fork.com/4420552280_bb575420043571.jpg',
        social_rank: 99.99972659075107,
        publisher_url: 'http://www.smittenkitchen.com'
      },
      {
        publisher: 'The Pioneer Woman',
        f2f_url: 'http://food2fork.com/view/47154',
        title: 'Caramelized Onion &amp; Prosciutto Pizza',
        source_url: 'http://thepioneerwoman.com/cooking/2010/03/caramelized-onion-prosciutto-pizza/',
        recipe_id: '47154',
        image_url: 'http://static.food2fork.com/4440156362_bd748d2c2183ef.jpg',
        social_rank: 99.99970993161892,
        publisher_url: 'http://thepioneerwoman.com'
      },
      {
        publisher: 'Jamie Oliver',
        f2f_url: 'http://food2fork.com/view/910dcc',
        title: 'Pizza dough',
        source_url: 'http://www.jamieoliver.com/recipes/uncategorised-recipes/pizza-dough',
        recipe_id: '910dcc',
        image_url: 'http://static.food2fork.com/394_1_1350903924_lrgeb1d.jpg',
        social_rank: 99.99967014287945,
        publisher_url: 'http://www.jamieoliver.com'
      },
      {
        publisher: 'Vintage Mixer',
        f2f_url: 'http://food2fork.com/view/7cad96',
        title: 'Cauliflower Pizza Crust Recipe',
        source_url: 'http://www.thevintagemixer.com/2013/03/cauliflower-pizza-crust-recipe/',
        recipe_id: '7cad96',
        image_url: 'http://static.food2fork.com/CauliflowerPizzaCrustRecipe06fdc.jpg',
        social_rank: 99.99880589962325,
        publisher_url: 'http://www.thevintagemixer.com/'
      },
      {
        publisher: 'Closet Cooking',
        f2f_url: 'http://food2fork.com/view/35625',
        title: 'Taco Pizza',
        source_url: 'http://www.closetcooking.com/2011/08/taco-pizza.html',
        recipe_id: '35625',
        image_url: 'http://static.food2fork.com/Taco2BPizza2B5002B92525560a1b9.jpg',
        social_rank: 99.99832411531516,
        publisher_url: 'http://closetcooking.com'
      },
      {
        publisher: '101 Cookbooks',
        f2f_url: 'http://food2fork.com/view/47620',
        title: 'Grilled Pizza',
        source_url: 'http://www.101cookbooks.com/archives/grilled-pizza-recipe.html',
        recipe_id: '47620',
        image_url: 'http://static.food2fork.com/grilled_pizza_recipeaaa8.jpg',
        social_rank: 99.99824050260295,
        publisher_url: 'http://www.101cookbooks.com'
      },
      {
        publisher: 'All Recipes',
        f2f_url: 'http://food2fork.com/view/14018',
        title: 'Fruit Pizza I',
        source_url: 'http://allrecipes.com/Recipe/Fruit-Pizza-I/Detail.aspx',
        recipe_id: '14018',
        image_url: 'http://static.food2fork.com/2510990f18.jpg',
        social_rank: 99.99823911404995,
        publisher_url: 'http://allrecipes.com'
      },
      {
        publisher: 'All Recipes',
        f2f_url: 'http://food2fork.com/view/21663',
        title: 'Pizza On The Grill I',
        source_url: 'http://allrecipes.com/Recipe/Pizza-On-The-Grill-I/Detail.aspx',
        recipe_id: '21663',
        image_url: 'http://static.food2fork.com/161102660.jpg',
        social_rank: 99.99818989315614,
        publisher_url: 'http://allrecipes.com'
      },
      {
        publisher: 'BBC Good Food',
        f2f_url: 'http://food2fork.com/view/7a2557',
        title: 'Tuna, olive &amp; rocket pizzas',
        source_url: 'http://www.bbcgoodfood.com/recipes/2940669/tuna-olive-and-rocket-pizzas',
        recipe_id: '7a2557',
        image_url: 'http://static.food2fork.com/2940669_MEDIUM2f86.jpg',
        social_rank: 99.99683197587346,
        publisher_url: 'http://www.bbcgoodfood.com'
      },
      {
        publisher: '101 Cookbooks',
        f2f_url: 'http://food2fork.com/view/48016',
        title: 'Japanese Pizza',
        source_url: 'http://www.101cookbooks.com/archives/japanese-pizza-recipe.html',
        recipe_id: '48016',
        image_url: 'http://static.food2fork.com/japanese_pizza_recipec7e3.jpg',
        social_rank: 99.99628895861389,
        publisher_url: 'http://www.101cookbooks.com'
      },
      {
        publisher: 'The Pioneer Woman',
        f2f_url: 'http://food2fork.com/view/47155',
        title: 'CPK’s BBQ Chicken Pizza',
        source_url: 'http://thepioneerwoman.com/cooking/2010/03/cpks-bbq-chicken-pizza/',
        recipe_id: '47155',
        image_url: 'http://static.food2fork.com/4433733640_8b0a5d19fbace0.jpg',
        social_rank: 99.99563714789078,
        publisher_url: 'http://thepioneerwoman.com'
      },
      {
        publisher: 'Closet Cooking',
        f2f_url: 'http://food2fork.com/view/47761',
        title: 'Cauliflower Pizza Crust (with BBQ Chicken Pizza)',
        source_url: 'http://feedproxy.google.com/~r/ClosetCooking/~3/xvkmVGnlXNQ/cauliflower-pizza-crust-with-bbq.html',
        recipe_id: '47761',
        image_url: 'http://static.food2fork.com/BBQChickenPizzawithCauliflowerCrust5004699695624ce.jpg',
        social_rank: 99.99324250703283,
        publisher_url: 'http://closetcooking.com'
      },
      {
        publisher: 'All Recipes',
        f2f_url: 'http://food2fork.com/view/1012',
        title: 'Amazing Whole Wheat Pizza Crust',
        source_url: 'http://allrecipes.com/Recipe/Amazing-Whole-Wheat-Pizza-Crust/Detail.aspx',
        recipe_id: '1012',
        image_url: 'http://static.food2fork.com/4827001426.jpg',
        social_rank: 99.99119512867206,
        publisher_url: 'http://allrecipes.com'
      },
      {
        publisher: 'Epicurious',
        f2f_url: 'http://food2fork.com/view/dc8ff6',
        title: 'Butternut Squash, Spinach and Goat Cheese Pizza',
        source_url: 'http://www.epicurious.com/recipes/food/views/Butternut-Squash-Spinach-and-Goat-Cheese-Pizza-367831',
        recipe_id: 'dc8ff6',
        image_url: 'http://static.food2fork.com/3678314a02.jpg',
        social_rank: 99.98825771070683,
        publisher_url: 'http://www.epicurious.com'
      },
      {
        publisher: 'BBC Good Food',
        f2f_url: 'http://food2fork.com/view/23d98e',
        title: 'Superhealthy pizza',
        source_url: 'http://www.bbcgoodfood.com/recipes/10117/superhealthy-pizza',
        recipe_id: '23d98e',
        image_url: 'http://static.food2fork.com/10117_MEDIUMb4ba.jpg',
        social_rank: 99.98708482295521,
        publisher_url: 'http://www.bbcgoodfood.com'
      },
      {
        publisher: 'Closet Cooking',
        f2f_url: 'http://food2fork.com/view/35073',
        title: 'Apple Crisp Pizza with Caramel Sauce',
        source_url: 'http://www.closetcooking.com/2012/11/apple-crisp-pizza-with-caramel-sauce.html',
        recipe_id: '35073',
        image_url: 'http://static.food2fork.com/Apple2BCrisp2BPizza2Bwith2BCaramel2BSauce2B5002B866415672f3c.jpg',
        social_rank: 99.9859764843071,
        publisher_url: 'http://closetcooking.com'
      },
      {
        publisher: 'All Recipes',
        f2f_url: 'http://food2fork.com/view/33914',
        title: 'Veggie Pizza',
        source_url: 'http://allrecipes.com/Recipe/Veggie-Pizza/Detail.aspx',
        recipe_id: '33914',
        image_url: 'http://static.food2fork.com/391236ba85.jpg',
        social_rank: 99.98306523721695,
        publisher_url: 'http://allrecipes.com'
      },
      {
        publisher: 'All Recipes',
        f2f_url: 'http://food2fork.com/view/21651',
        title: 'Pizza Dough I',
        source_url: 'http://allrecipes.com/Recipe/Pizza-Dough-I/Detail.aspx',
        recipe_id: '21651',
        image_url: 'http://static.food2fork.com/1187192f38.jpg',
        social_rank: 99.9707397061906,
        publisher_url: 'http://allrecipes.com'
      },
      {
        publisher: 'BBC Good Food',
        f2f_url: 'http://food2fork.com/view/3fe9fd',
        title: 'Easy tomato pizzas',
        source_url: 'http://www.bbcgoodfood.com/recipes/12389/easy-tomato-pizzas',
        recipe_id: '3fe9fd',
        image_url: 'http://static.food2fork.com/12389_MEDIUMb5b0.jpg',
        social_rank: 99.97019875890032,
        publisher_url: 'http://www.bbcgoodfood.com'
      },
      {
        publisher: 'Cookie and Kate',
        f2f_url: 'http://food2fork.com/view/b8c895',
        title: 'All Recipes',
        source_url: 'http://cookieandkate.com/2013/strawberry-basil-and-balsamic-pizza/',
        recipe_id: 'b8c895',
        image_url: 'http://static.food2fork.com/strawberrybasilbalsamicpizzarecipe703d.jpg',
        social_rank: 99.99883773037472,
        publisher_url: 'http://cookieandkate.com'
      },
      {
        publisher: 'Closet Cooking',
        f2f_url: 'http://food2fork.com/view/35383',
        title: 'Jalapeno Popper Pizza',
        source_url: 'http://www.closetcooking.com/2012/06/jalapeno-popper-pizza.html',
        recipe_id: '35383',
        image_url: 'http://static.food2fork.com/Jalapeno2BPopper2BPizza2B5002B2518b8ba4d61.jpg',
        social_rank: 99.96740826157281,
        publisher_url: 'http://closetcooking.com'
      },
      {
        publisher: 'All Recipes',
        f2f_url: 'http://food2fork.com/view/33820',
        title: 'Vegetable Pizza I',
        source_url: 'http://allrecipes.com/Recipe/Vegetable-Pizza-I/Detail.aspx',
        recipe_id: '33820',
        image_url: 'http://static.food2fork.com/96343147.jpg',
        social_rank: 99.95474071232178,
        publisher_url: 'http://allrecipes.com'
      },
      {
        publisher: 'Epicurious',
        f2f_url: 'http://food2fork.com/view/b12500',
        title: 'Gardener\'s Pizza',
        source_url: 'http://www.epicurious.com/recipes/food/views/Gardeners-Pizza-395569',
        recipe_id: 'b12500',
        image_url: 'http://static.food2fork.com/395569cf8a.jpg',
        social_rank: 99.94570667284421,
        publisher_url: 'http://www.epicurious.com'
      },
      {
        publisher: 'Cookie and Kate',
        f2f_url: 'http://food2fork.com/view/40f116',
        title: 'Tortilla Pizzas',
        source_url: 'http://cookieandkate.com/2012/simple-tortilla-pizzas/',
        recipe_id: '40f116',
        image_url: 'http://static.food2fork.com/tortillapizzarecipe4d025.jpg',
        social_rank: 99.91239894894808,
        publisher_url: 'http://cookieandkate.com'
      },
      {
        publisher: '101 Cookbooks',
        f2f_url: 'http://food2fork.com/view/47745',
        title: 'White Whole Wheat Pizza Dough',
        source_url: 'http://www.101cookbooks.com/archives/001506.html',
        recipe_id: '47745',
        image_url: 'http://static.food2fork.com/wholewheatpizzadoughff04.jpg',
        social_rank: 99.89397502325701,
        publisher_url: 'http://www.101cookbooks.com'
      },
      {
        publisher: 'All Recipes',
        f2f_url: 'http://food2fork.com/view/13072',
        title: 'Fast English Muffin Pizzas',
        source_url: 'http://allrecipes.com/Recipe/Fast-English-Muffin-Pizzas/Detail.aspx',
        recipe_id: '13072',
        image_url: 'http://static.food2fork.com/191121d99d.jpg',
        social_rank: 99.8528705165802,
        publisher_url: 'http://allrecipes.com'
      }
    ]
  }
  let p = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(data);
    }, 2300);
  })
  return p
    .then((function (recipes) {
      return recipes;
    }).bind(this))
    .catch(function (error) {
      alert(error.message)
    });
}
/* develblock:end */