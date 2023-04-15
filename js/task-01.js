const categories = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach(itemEl =>{
  const h2El = itemEl.firstElementChild;
  const liEl = itemEl.lastElementChild;
  const liChildren = liEl.children;
console.log(`Category: ${h2El.textContent} 
Elements: ${liChildren.length}`)
});
