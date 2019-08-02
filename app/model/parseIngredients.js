import {
  unitsLong,
  unitsShort
} from './units';

export function parseIngredients(ingredients) {
  /*
  Example strings
    1 teaspoon parsley
    1 teaspoon salt
    1/2 cup Manchengo sheep milk cheese (or Mozzarella)
    2 eggs
    cornmeal, to dust the pizza stone
  */
  // loop over ingredients.

  let newIngredients = ingredients.map(function (theText) {
    // Uniform units
    let ingredient = theText.toLowerCase();
    unitsLong.forEach((unit, i) => {
      ingredient = ingredient.replace(unit, unitsShort[i]);
    });
    // 2 Remove parantheses
    ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');

    ingredient = ingredient.slice(0, 35); //Limit ingredient length to 15 chars
    // 3) Parse ingredients into count, unit and ingredient
    const arrIng = ingredient.split(' ');
    const unitIndex = arrIng.findIndex(el2 => unitsShort.includes(el2));

    let objIng;
    if (unitIndex > -1) {
      // There is a unit
      const arrCount = arrIng.slice(0, unitIndex);
      let count;
      try {
        if (arrCount.length === 1) {
          count = eval(arrIng[0].replace('-', '+'));
        } else {
          count = eval(arrIng.slice(0, unitIndex).join('+'));
        }
      } catch (err) {
        count = 1;
      }
      var roundedCount = Math.floor(count) + (Math.round(count - Math.floor(count)) ? 0.5 : 0.0);
      // If count is 0 - fix rounding to 0.25
      count = roundedCount ? roundedCount : 0.25;
      objIng = {
        count: count,
        unit: arrIng[unitIndex],
        ingredient: arrIng.slice(unitIndex + 1).join(' ')
      };
    } else if (parseInt(arrIng[0], 10)) {
      // There is NO unit, but 1st element is a number
      objIng = {
        count: parseInt(arrIng[0]),
        unit: '',
        ingredient: arrIng.slice(1).join(' ')
      };
    } else if (unitIndex === -1) {
      // There is NO unit and NO number in 1st position
      objIng = {
        count: 1,
        unit: '',
        ingredient: ingredient
      };
    }
    return objIng;
  });
  return newIngredients;
}