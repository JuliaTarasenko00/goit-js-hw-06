const counterValue = document.querySelector('#value');
// console.log(counterValue);
const decrementEl =  document.querySelector('button[data-action="decrement"]');
const incrementEl =  document.querySelector('button[data-action="increment"]');
// console.log(incrementEl);
// console.log(decrementEl);
let counterValueEl = 0;

incrementEl.addEventListener("click", () => {
    counterValueEl += 1;
    counterValue.textContent = counterValueEl;
});
decrementEl.addEventListener('click', () => {
    counterValueEl -= 1;
    counterValue.textContent = counterValueEl;
  });

