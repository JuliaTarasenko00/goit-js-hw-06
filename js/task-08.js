const formEl = document.querySelector(".login-form");
const loginEl = document.querySelector('[type="email"]');
const passwordEl = document.querySelector('[type="password"]');
formEl.addEventListener("submit", handleSubmit);
function handleSubmit(ev) {
ev.preventDefault();
const elements = {
    password: passwordEl,
    login: loginEl,
}
if(elements.password.value === '' || elements.login.value === ''){
alert('Введіть login та password :)')
}
console.log(`Login: ${elements.login.value }, Password: ${elements.password.value}`);
  ev.currentTarget.reset();
 
}
