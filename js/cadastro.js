const button = document.getElementById('buttonRegister');

button.addEventListener("click", (e) => {
    e.preventDefault();
    register();
})

function register() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const registerMessage = document.getElementById('message');

    if (password !== confirmPassword) {
        registerMessage.innerText = 'As senhas não coincidem.';
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some(user => user.email === email)) {
        registerMessage.innerText = 'Email já registrado.';
        return;
    }

    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
    registerMessage.innerText = 'Registrado com sucesso.';
    setTimeout(1000);
    location.href = "chooseYourTeam.html";
}