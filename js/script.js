const form = document.querySelector('form');

const nameInput = document.querySelector(
    'input[email="email"]'
);

const validateEmail = () => { 
    if (!nameInput.value){
        nameInput.classList.add("invalid");
        nameInput.nextElementSibling.classlist.remove("hide");
    }
};

form.addEventListener('Submit', (e) => {
    e.preventDefault();
    validateEmail();
});