document.getElementById("contact").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    // Get input value
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    document.getElementById("contact").reset();

    sendEmail(name, email, message);
}

function sendEmail(name, email, message) {
    email.send({
        Host: "smtp.gmail.com",
        Username: 'branstoti@gmail.com',
        Password: ""
    })
}