/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import "./index.css"

const Form = (props) => {

  return (
          <form onSubmit={props.method}>
            <div className="formulario">
              <h1 className="titulo-form">{props.title}</h1>

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

                {props.cadastro ? ( <div className="input-single">
                <label htmlFor="confirmPassword">Confirmar senha</label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Informe sua senha"
                  required
                  />
                </div>
                ) : null}
              <p id="message"></p>

              <div className="input-single">
                <button id="buttonRegister" type="submit">{props.buttonText}</button>
              </div>

              <div className="input-single btn-cadastro">
                <p>{props.bottonText}</p>
                <Link to={props.link}>{props.bottomButton}</Link>
              </div>
            </div>
          </form>
  )
}

export default Form