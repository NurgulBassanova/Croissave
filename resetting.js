function resetForm() {
    document.querySelectorAll('input').forEach(input => {
        if (input.type === 'text' || input.type === 'email' || input.type === 'number' || input.type === 'password') {
            input.value = '';
        }
    });
    document.getElementById("error-message").style.display = "none";
}

document.getElementById("form1").addEventListener("submit", function(event) {
    event.preventDefault();

    const firstName = document.getElementById("first_name").value.trim();
    const surname = document.getElementById("surname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("psswrd1").value.trim();
    const confirmPassword = document.getElementById("psswrd2").value.trim();
    const errorMessage = document.getElementById("error-message");
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match!";
        errorMessage.style.display = "block";
        return;
    }

    const userExists = existingUsers.some(user => 
        user.firstName === firstName && 
        user.surname === surname && 
        user.email === email
    );

    if (userExists) {
        errorMessage.textContent = "User with these details already exists!";
        errorMessage.style.display = "block";
    } else {
        const newUser = { firstName, surname, email, password };
        existingUsers.push(newUser);
        localStorage.setItem("users", JSON.stringify(existingUsers));
        errorMessage.style.display = "none";
        alert("You have successfully registered!");
        document.getElementById("form1").reset();
    }
});
