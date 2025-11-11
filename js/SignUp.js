document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById("preloader");
    window.addEventListener("load", () => {
        if (preloader) {
            preloader.style.opacity = "0";
            setTimeout(() => preloader.remove(), 600);
        }
    });
    const signUpForm = document.getElementById('signUpForm');
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');
    const confirmPasswordInput = document.getElementById('confirmPasswordInput');
    const passwordError = document.getElementById('passwordError');
    const generalError = document.createElement('div');
    generalError.className = 'text-danger small mt-2';
    if (signUpForm) {
        signUpForm.insertBefore(generalError, signUpForm.querySelector('button[type="submit"]'));
        signUpForm.addEventListener('submit', (event) => {
            event.preventDefault();
            generalError.textContent = '';
            const name = nameInput.value;
            const email = emailInput.value;
            if (passwordInput.value !== confirmPasswordInput.value) {
                passwordError.style.display = 'block';
                confirmPasswordInput.classList.add('is-invalid');
                return;
            }
            passwordError.style.display = 'none';
            confirmPasswordInput.classList.remove('is-invalid');
            if (users.find(user => user.email === email)) {
                generalError.textContent = 'This email is already registered. Try signing in.';
                return;
            }
            addUser(name, email, passwordInput.value);
            setSession({ name: name, email: email });
            window.location.href = 'index.html';
        });
    }
});