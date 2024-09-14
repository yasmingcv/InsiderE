import Navbar from '../../components/navbar/Navbar';
import './index.css'
import { Link, useNavigate } from "react-router-dom";

const Cadastro = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
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
    registerMessage.style.color = 'green';
    registerMessage.innerText = 'Registrado com sucesso.';

    setTimeout(() => {
      navigate('/chooseYourTeam'); 
    }, 1000);
  }

  return (
    <>
      <Navbar showButtons="true" />
      <section className="form-container">
        <div className="container-login">
          <form onSubmit={handleSubmit}>
            <div className="formulario">
              <h1 className="titulo-form">Crie uma conta</h1>

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
                  placeholder="Informe sua senha"
                  required
                  />
              </div>

              <div className="input-single">
                <label htmlFor="confirmPassword">Confirmar senha</label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Informe sua senha"
                  required
                  />
              </div>

              <p id="message"></p>

              <div className="input-single">
                <button id="buttonRegister" type="submit">Criar conta</button>
              </div>

              <div className="input-single btn-cadastro">
                <p>Já possui conta?</p>
                <Link to="/login">Entrar</Link>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Cadastro;
