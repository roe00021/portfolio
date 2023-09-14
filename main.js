// Get the content parameter from the URL
function getUrlParameter(name) {
    name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Define passwords and their associated protected pages
const passwords = {
    "roe2023": {
        "protected-content1": "ggp.html",
        "protected-content2": "e-learning-portal.html"
    },
    // Add more passwords and content page mappings here
};

// Get form and password input elements
const passwordForm = document.getElementById("passwordForm");
const passwordInput = document.getElementById("passwordInput");
const passwordMessage = document.getElementById("passwordMessage");

// Add form submit event listener
passwordForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const enteredPassword = passwordInput.value;
    const contentParam = getUrlParameter("content");

    if (passwords.hasOwnProperty(enteredPassword)) {
        const contentPage = passwords[enteredPassword][contentParam];
        if (contentPage) {
            // Correct password, redirect to the associated protected content page
            window.location.href = contentPage;
        } else {
            // Incorrect content parameter
            passwordMessage.textContent = "Invalid content parameter.";
        }
    } else {
        // Incorrect password
        passwordMessage.textContent = "Incorrect password. Please try again.";
        passwordInput.value = ""; // Clear the input field
    }
});
