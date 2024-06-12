const button = document.getElementById('loginButton');

button.addEventListener("click", (e) => {
    e.preventDefault();
    login();
})


// Função para fazer login
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const loginMessage = document.getElementById('message');

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        loginMessage.style.color = 'green';
        loginMessage.textContent = 'Login bem-sucedido!';
        console.log("login");
        location.href = "chooseYourTeam.html";
    } else {
        loginMessage.style.color = 'red';
        loginMessage.textContent = 'Email ou senha incorretos.';
    }
}