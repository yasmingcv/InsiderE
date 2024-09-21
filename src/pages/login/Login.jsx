import Form from '../../components/form/Form';
import Navbar from '../../components/navbar/Navbar';
import './index.css'
import { useNavigate } from "react-router-dom";

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
          navigate('/escolha-seu-time'); 
        }, 1000);
    } else {
        loginMessage.style.color = 'red';
        loginMessage.textContent = 'Email ou senha incorretos.';
    }
  }

  return (
    <section className="login-container">
      <Navbar showButtons={false} />
      <main className="login-content">
        <Form method={handleSubmit} title="Entrar" link="/cadastro" buttonText="Entrar" cadastro={false} bottonText="Não tem uma conta?" bottomButton="Cadastrar-se"/>
      </main>
    </section>
  );
};

export default Login;
