function myFunction() {
    console.log("im alive")
    let navLinks = document.getElementById('navMenu');
    if (navLinks.style.display === "none") {
        navLinks.style.display = "block";
    } else {
        navLinks.style.display = "none";
    }
}






function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}