// product expand and collapse
$(document).ready(function() {
    // Toggle hide and show
    $('#hide-btn').click(function() {
        $('.hide').toggle();

        // Select icon and button
        var button = $(this).find('button');
        var icon = $(this).find('i');

        // If the button text is see more products then updates it to see fewer prodyucts
        if (button.text() === 'See more products') {
            button.text('See fewer products');
            icon.removeClass('fa-square-caret-down').addClass('fa-square-caret-up');
        }
        // If not then the text will remain the samee
        else {
            button.text('See more products');
            icon.removeClass('fa-square-caret-up').addClass('fa-square-caret-down');
        }
    });
});
// Newsletter functionality
function getContact(event) {
    //Prevents from reloading the website I guess? 
    event.preventDefault();

    // Gets thhe email and stores it in a variable called emailInput
    const emailInput = event.target.email;
    // Now the email value is assignned tto this new variable
    const email = emailInput.value;
    // Access the success container (from around module 15)
    const successContainer = document.getElementById("success-container");

    // Clear the success container before appending a new message
    successContainer.innerHTML = '';
    
    // Creates a new paragraph tag
    const emailParagraph = document.createElement("p");

    // Validate email input
    // if the email == empty then this message will be shown in the paragraph created
    if (email === "") {
        emailParagraph.innerText = "Please enter an email.";
    }
    // If the email is not valid then this message will be shown, regex is used for this. (Regular expression, taught last semester)
    else if (!validateEmail(email)) {
        emailParagraph.innerText = "Please enter a valid email.";
    }
    // Trims the part after the @ from the email address, ex. abc@gmail.com to abc. Looks nicer. (ChatGPT)
    else {
        // Extract the part before the @ symbol
        const username = email.split('@')[0];
        emailParagraph.innerText = `Thank you for subscribing, ${username}`;
    }

    // Appends the paragraph
    successContainer.appendChild(emailParagraph);

    // Clear the input field after submission
    emailInput.value = '';
}

// Email validation function using a regex pattern
function validateEmail(email) {
    // basic pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
