document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please fill in both fields.");
        return;
    }

    const validUsername = "user123";
    const validPassword = "password123";

    if (username !== validUsername || password !== validPassword) {
        alert("Invalid username or password.");
        return;
    }

    alert(`Welcome, ${username}!`);

    window.location.href = "homepage.html";
});