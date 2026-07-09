 let totalRegistrations = 0;
function validateForm() {
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    

    if (username.includes('_') || username.includes('-')) {
        document.getElementById("usernameError").innerHTML = "Username cannot contain hyphens or underscores.";
    } if (username.length < 5 || username.length > 15) {
        document.getElementById("usernameError").innerHTML = "Username must be between 5 and 15 characters.";
    }
    if (password.length < 8) {
        document.getElementById("passwordError").innerHTML = "Password must be at least 8 characters long.";
    }
    totalRegistrations++;
    document.getElementById("total").innerHTML = "Total Registratons: " + totalRegistrations;
    
    return false;
}