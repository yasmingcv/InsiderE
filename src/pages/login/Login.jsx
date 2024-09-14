import Navbar from '../../components/navbar/Navbar';
import './index.css'
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const loginMessage = document.getElementById('message');

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        loginMessage.style.color = 'green';
        loginMessage.textContent = 'Login bem-sucedido!';
        setTimeout(() => {
          navigate('/chooseYourTeam'); 
        }, 1000);
    } else {
        loginMessage.style.color = 'red';
        loginMessage.textContent = 'Email ou senha incorretos.';
    }
  }

  return (
    <>
      <Navbar showButtons="true" />
      <section className="form-container">
        <div className="container-login">
          <form onSubmit={handleSubmit}>
            <div className="formulario">
              <h1 className="titulo-form">Entrar</h1>

              <div className="input-single">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  placeholder="exemplo@gmail.com"
                  required
                  />
              </div>

              <div className="input-single">
                <label htmlFor="password">Senha</label>
                <input
                  type="password"
                  id="password"
                  placeholder="informe sua senha"
                  required
                  />
              </div>

              <p id="message"></p>

              <div className="input-single">
                <button id="loginButton" type="submit">Entrar</button>
              </div>

              <div className="input-single btn-cadastro">
                <p>Não tem uma conta?</p>
                <Link to="/cadastro">Cadastrar-se</Link>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
