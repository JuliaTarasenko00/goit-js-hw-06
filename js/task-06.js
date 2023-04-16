const inputEl =document.querySelector('#validation-input');
// console.log(inputEl)

inputEl.addEventListener('blur', (event) =>{
    if(event.currentTarget.value.length === Number(inputEl.dataset.length)){
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    //     console.log(event.currentTarget.value.length);
    //    console.log(Number(inputEl.dataset));
    } else {
       inputEl.classList.add('invalid');
    }
})