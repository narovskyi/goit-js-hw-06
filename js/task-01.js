const numberOfCategories = document.querySelectorAll('li.item');

const arrayofCategories = document.querySelectorAll('li.item');

const showDataOfCategory = function (categories) {
    for (const category of categories) {
        console.log(`Category: ${category.querySelector('h2').textContent}`);
        console.log(`Elements: ${category.querySelectorAll('li').length}`);
    }
}

console.log(`Number of categories: ${numberOfCategories.length}`);
showDataOfCategory(arrayofCategories);
