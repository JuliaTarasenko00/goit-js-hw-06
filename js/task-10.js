function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const divControls = document.querySelector('#controls');
const divBoxes = document.querySelector('#boxes');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
let size = 30;
function createBoxes(amount){
 for(let i = 0; i < amount; i += 1){
 const box = document.createElement("div");
  box.style.width = `${size}px`;
  box.style.height = `${size}px`;
  box.style.background = getRandomHexColor();
  size += 10;
  divBoxes.append(box);
  btnCreate.addEventListener('click', onClickCreate);
  btnDestroy.addEventListener('click', onClickDestroy);
   function onClickCreate() {
    if(size === 500){
        return
    }
   size += 10;
   box.style.width = `${size}px`;
   box.style.height = `${size}px`;
  }
  function onClickDestroy(){
    if(size === 30){
        return
    }
     size -= 10;
 box.style.width = `${size}px`;
 box.style.height = `${size}px`; 
  }
}
}
// function destroyBoxes() {
//     boxesContainer.innerHTML = '';
//   }
console.log(createBoxes(4));