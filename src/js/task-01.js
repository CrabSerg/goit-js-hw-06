const listItemsRef = document.querySelectorAll('.item');

console.log(`Number of categories: ${listItemsRef.length}`);

const allCategoriesArray = listItemsRef.forEach(el => {
    console.log(`Category: ${el.querySelector("h2").textContent}`);
    console.log(`Elements: ${el.querySelectorAll("li").length}`);
});