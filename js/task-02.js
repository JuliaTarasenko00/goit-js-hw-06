const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const items = []; 
const ulEl = document.querySelector('#ingredients')
ingredients.forEach(ingredient =>{ 
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;
  items.push(liEl); 
});
ulEl.append(...items);

