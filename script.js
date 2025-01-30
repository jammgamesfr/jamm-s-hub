function toggleHelpWindow() {
    const helpWindow = document.getElementById("help-window");
    helpWindow.classList.toggle("open");
}

function closeWindow(id) {
    document.getElementById(id).style.display = "none";
}

document.getElementById("help-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    // Send Email (Using FormSubmit API)
    fetch("https://formsubmit.co/ajax/kidb8450@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: name,
            email: email,
            message: "Help request from Jamm's Hub. Please send the Discord call link.",
        })
    }).then(response => response.json())
    .then(data => {
        document.getElementById("confirmation-message").style.display = "block";
    }).catch(error => console.error("Error:", error));
});
