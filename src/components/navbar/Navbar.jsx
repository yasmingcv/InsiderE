/* eslint-disable react/prop-types */
import './index.css'
import { Link } from "react-router-dom";
import { Dropdown } from '@nextui-org/dropdown';
import { DropdownTrigger } from '@nextui-org/dropdown';
import { Button } from '@nextui-org/button';
import { DropdownMenu } from '@nextui-org/dropdown';
import { DropdownItem } from '@nextui-org/dropdown';

const Navbar = (props) => {
  return (
    <header>
       <Link to="/"><img id="logo-header-team" src="/src/assets/images/logo_branca.png" alt=""/></Link>
        {props.showButtons ? (
          <div className="buttons buttons-header">
            <button id="entrar"><Link to="/">ENTRAR</Link></button>
            <button id="cadastrar-se"><Link to="/cadastro">CADASTRAR-SE</Link></button>
            <div className="menu-responsivo"> 
              <Dropdown className="dark">
                <DropdownTrigger>
                  <Button isIconOnly color="primary" variant="bordered">
                    <img src="src/assets/images/menu.svg" alt="" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem key="new"><Link to="/login" className="text-white">ENTRAR</Link></DropdownItem>
                  <DropdownItem key="copy"><Link to="/cadastro" className="text-white">CADASTRAR-SE</Link></DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        ): null}
    </header>
  );
};

export default Navbar