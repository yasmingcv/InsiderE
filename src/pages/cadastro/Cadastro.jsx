import Form from '../../components/form/Form';
import Navbar from '../../components/navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import "./index.css"

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
      navigate('/escolha-seu-time'); 
    }, 1000);
  }

  return (
    <section className="cadastro-container">
      <Navbar showButtons={false} />
      <main className="cadastro-content">
        <Form method={handleSubmit} link="/login" title="Crie uma conta" buttonText="Criar conta" cadastro={true} bottonText="Já possui conta?" bottomButton="Entrar"/>
      </main>
      </section>
  );
};

export default Cadastro;
