// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// const divControls = document.querySelector('#controls');
// const divBoxes = document.querySelector('#boxes');
// const btnCreate = document.querySelector('[data-create]');
// const btnDestroy = document.querySelector('[data-destroy]');
// function createBoxes(amounts){
//   // const box = document.createElement("div");
//   let size = 30;
//  for(const amount of amounts){
//   const box = document.createElement("div");
//   console.log(document.createElement("div"));
//   box.style.width = `${size}px`;
// box.style.height = `${size}px`;
// box.style.background = getRandomHexColor();
// divBoxes.prepend(box);
//  }
// // box.style.width = `${size}px`;
// // box.style.height = `${size}px`;
// // box.style.background = getRandomHexColor();
// // divBoxes.prepend(box);
// // btnCreate.addEventListener("click", onCreBtn);
// // btnDestroy.addEventListener("click", onDecBtn);
// // function onCreBtn() {
// //   if (size) {
// //     return;
// //   }
// //   size += 10;
// //   box.style.width = `${size}px`;
// //   box.style.height = `${size}px`;
// // }

// // function onDecBtn() {
// //   if (size === 10) {
// //     return;
// //   }
// //   size -= 10;
// //   box.style.width = `${size}px`;
// //   box.style.height = `${size}px`;
// // }
// }
// console.log(createBoxes([4,3,3,3,3,3,2]));