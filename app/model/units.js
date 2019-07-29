export const unitsLong = [
  'cup',
  'cups',
  'can',
  'cans',
  'ounce',
  'ounces',
  'package',
  'packages',
  'teaspoon',
  'teaspoons',
  'tablespoon',
  'tablespoons',
  'handful',
  'handfuls',
  'pound',
  'pounds'
];
export const unitsShort = [
  'cup',
  'cup',
  'can',
  'can',
  'oz',
  'oz',
  'pckg',
  'pckg',
  'tsp',
  'tsp',
  'tbsp',
  'tbsp',
  'hand.',
  'hand.',
  'pound',
  'pound'
];

// represent the step when incrementing related quantities
export const steps = new Map([
  ['cup', .5],
  ['can', .5],
  ['oz', 10],
  ['pckg', .5],
  ['tsp', .5],
  ['tbsp', .5],
  ['hand', 1],
  ['', 1]
]);