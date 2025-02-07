document.addEventListener('DOMContentLoaded', function() {
    const passwordExpiry = localStorage.getItem('passwordExpiry');
    const now = new Date().getTime();

    // Automatically redirect if the stored expiry time is valid
    if (passwordExpiry && now < parseInt(passwordExpiry, 10)) {
        window.location.href = "HomePage.html"; // Redirect automatically if logged in
    }
});

function checkPassword() {
    const correctPassword = "mysecurepassword"; // Replace with your password
    const inputPassword = document.getElementById('passwordInput').value;
    const errorMessage = document.getElementById('errorMessage');

    if (inputPassword === correctPassword) {
        // Set expiry time for one week
        const now = new Date().getTime();
        const oneWeek = 604800;
        localStorage.setItem('passwordExpiry', now + oneWeek);

        // Redirect to another HTML page
        window.location.href = "HomePage.html";
        window.alert("Keep this page a secret!");
    } else {
        errorMessage.style.display = "block";
        window.alert("Haha! Keep guessing, buddy!");
    }
}
