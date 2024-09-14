/* eslint-disable react/prop-types */
import './index.css'
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <header>
       <Link to="/"><img id="logo-header-team" src="images/logo_branca.png" alt=""/></Link>
        {props.showButtons && (
          <div className="buttons buttons-header-chooseYourTeam">
            <button id="entrar"><Link to="/login">ENTRAR</Link></button>
            <button id="cadastrar-se"><Link to="/cadastro">CADASTRAR-SE</Link></button>
          </div>
        )}
    </header>
  );
};

export default Navbar