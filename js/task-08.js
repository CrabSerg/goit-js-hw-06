const formBtnEl = document.querySelector(".login-form");

const handleSubmit = (event) => {
    event.preventDefault();
    const {
    elements: { email, password }
    } = event.currentTarget;
    
if (email.value === "" || password.value === "") {
return alert("Вы ничего не ввели. Введите даные и можете загадать желание :)");
}
    const objForm = {
        email: email.value,
        password: password.value,
   } 
    console.log(objForm);
         
    event.currentTarget.reset();
    
}

formBtnEl.addEventListener("submit", handleSubmit);
