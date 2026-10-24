const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

const dobInput = document.getElementById("dob");
const today = new Date();

dobInput.max = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0")
].join("-");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value;
    const dob = dobInput.value;
    const course = document.getElementById("course").value;
    const password = document.getElementById("password").value;
    const confirmPassword =
        document.getElementById("confirmPassword").value;

    if (name.length < 3) {
        showMessage("Name must contain at least 3 characters.", "red");
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showMessage("Please enter a valid email address.", "red");
        return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        showMessage("Phone number must contain exactly 10 digits.", "red");
        return;
    }

    if (!dob || dob > dobInput.max) {
        showMessage("Please select a valid date of birth.", "red");
        return;
    }

    if (!course) {
        showMessage("Please select a course.", "red");
        return;
    }

    if (password.length < 8) {
        showMessage("Password must contain at least 8 characters.", "red");
        return;
    }

    if (password !== confirmPassword) {
        showMessage("Passwords do not match.", "red");
        return;
    }

    showMessage(
        "Registration successful! Welcome, " + name + "!",
        "green"
    );

    form.reset();
});

function showMessage(text, color) {
    message.textContent = text;
    message.style.color = color;
}