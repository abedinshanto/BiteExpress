// product expand and collapse
$(document).ready(function() {
    $('#hide-btn').click(function() {
        $('.hide').toggle();

        var button = $(this).find('button');
        var icon = $(this).find('i');

        if (button.text() === 'See more products') {
            button.text('See fewer products');
            icon.removeClass('fa-square-caret-down').addClass('fa-square-caret-up');
        } else {
            button.text('See more products');
            icon.removeClass('fa-square-caret-up').addClass('fa-square-caret-down');
        }
    });
});
// newsletter functionality
function getContact(event) {
    event.preventDefault();

    const emailInput = event.target.email;
    const email = emailInput.value;
    const successContainer = document.getElementById("success-container");

    // Clear the success container before appending a new message
    successContainer.innerHTML = '';

    const emailParagraph = document.createElement("p");

    // Validate email input
    if (email === "") {
        emailParagraph.innerText = "Please enter an email.";
    } else if (!validateEmail(email)) {
        emailParagraph.innerText = "Please enter a valid email.";
    } else {
        // Extract the part before the @ symbol
        const username = email.split('@')[0];
        emailParagraph.innerText = `Thank you for subscribing, ${username}`;
    }

    successContainer.appendChild(emailParagraph);

    // Clear the input field after submission
    emailInput.value = '';
}

// Email validation function using a regex pattern
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
