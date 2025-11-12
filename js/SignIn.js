document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById("preloader");
    window.addEventListener("load", () => {
        if (preloader) {
            preloader.style.opacity = "0";
            setTimeout(() => preloader.remove(), 600);
        }
    });
    const signInForm = document.getElementById('signInForm');
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');
    const generalError = document.createElement('div');
    generalError.className = 'text-danger small mt-2';
    signInForm.insertBefore(generalError, signInForm.querySelector('button[type="submit"]'));
    if (signInForm) {
        signInForm.addEventListener('submit', (event) => {
            event.preventDefault();
            generalError.textContent = '';
            const email = emailInput.value;
            const password = passwordInput.value;
            const user = findUser(email, password);
            if (user) {
                setSession(user);
                console.log('Successful login for:', user.name);
                window.location.href = 'index.html';
            } else {
                generalError.textContent = 'Invalid email or password.';
            }
        });
    }
});