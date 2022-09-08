const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const arrayOfListItems = ingredients.map(element => {
  const listItem = document.createElement("li");
  listItem.textContent = element;
  listItem.classList.add('item')
  return listItem;
});

const ingredientsList = document.querySelector('ul#ingredients');
ingredientsList.append(...arrayOfListItems);