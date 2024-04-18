const form = document.getElementById('findPetForm');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    let hasError = false;
    const formData = new FormData(form);
    formData.forEach((value, key) => {
        const element = document.getElementById(key);
        const errorSpan = element.nextElementSibling;

        if (value.trim() === '' || value.trim() === 'Select a pet') {
            errorSpan.textContent = 'This field is required';
            hasError = true;
        } else {
            errorSpan.textContent = '';
        }
    });

    if (!hasError) {
        form.submit();
    }
});
function validateForm() {
    var isValid = true;
    var errorMessage = "";
    
    var petType = document.forms["giveawayForm"]["petType"].value;
    if (petType === "") {
        errorMessage += "Please select a pet type.\n";
        isValid = false;
    }
    
    var ownersName = document.forms["giveawayForm"]["ownersName"].value;
    if (ownersName === "") {
        errorMessage += "Please enter the owner's name.\n";
        isValid = false;
    }
    
    var ownersEmail = document.forms["giveawayForm"]["ownersEmail"].value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(ownersEmail)) {
        errorMessage += "Please enter a valid email address.\n";
        isValid = false;
    }

    if (!isValid) {
        alert(errorMessage);
    }

    return isValid;
}