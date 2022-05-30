function myFunction() {
    console.log("im alive")
    let navLinks = document.getElementById('navMenu');
    if (navLinks.style.display === "none") {
        navLinks.style.display = "block";
    } else {
        navLinks.style.display = "none";
    }
}
//
const form = document.getElementById('form');
const manateeName = document.getElementById('manateeName');
const email = document.getElementById('email');
const yourName = document.getElementById('yourName');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();

});

function checkInputs() {
    const manateeNameValue = manateeName.value.trim();
    const emailValue = email.value.trim();
    const yourNameValue = yourName.value.trim();

    if (manateeName === '') {
        //showerror
        //add error class
        form.small.display === display;
        setErrorFor(manateeName, 'Manatee Name cannot be blank')
    } else {
        //addsucces class
        setSuccessFor(username);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; //.formcontrol
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form.control error';
}
//

function validateForm() {
    let adoptionForm = document.forms["myForm"]["fname"].value;
    if (adoptionForm == "") {
        alert("Name must be filled out");
        return false;
    } else {
        alert("Thank you for naming");
    }
}