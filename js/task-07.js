const inputEl = document.getElementById('font-size-control');
const spanEl = document.getElementById('text');
inputEl.addEventListener('click', (event) => {
    spanEl.style.fontSize = `${event.currentTarget.value}px`
// console.log(spanEl.style.fontSize = `${event.currentTarget.value}px`);
})