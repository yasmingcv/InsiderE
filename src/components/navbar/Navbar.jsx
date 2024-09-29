/* eslint-disable react/prop-types */
import './index.css'
import { Link } from "react-router-dom";
import { Dropdown } from '@nextui-org/dropdown';
import { DropdownTrigger } from '@nextui-org/dropdown';
import { Button } from '@nextui-org/button';
import { DropdownMenu } from '@nextui-org/dropdown';
import { DropdownItem } from '@nextui-org/dropdown';
import { menu } from '../../assets';

const Navbar = (props) => {
  return (
    <header>
       <Link to="/"><img id="logo-header-team" src="/src/assets/images/logo_branca.png" alt=""/></Link>
        {props.showButtons ? (
          <div className="buttons buttons-header">
            <button className={`text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-4 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`} id="entrar"><Link to="/">ENTRAR</Link></button>

            <button id="cadastrar-se"><Link to="/cadastro">CADASTRAR-SE</Link></button>

            {
              props.showButtons && props.showJogar ?
              <button type="button" className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-4 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" id="jogar"> 
               <Link to="/escalacao" className="text-white">JOGAR</Link>
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </button>
            : 
            null
            }
            <div className="menu-responsivo"> 
              <Dropdown className="dark">
                <DropdownTrigger>
                  <Button isIconOnly color="primary" variant="bordered">
                    <img src={menu} alt="" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem key="new"><Link to="/" className="text-white">ENTRAR</Link></DropdownItem>
                  <DropdownItem key="copy"><Link to="/cadastro" className="text-white">CADASTRAR-SE</Link></DropdownItem>
                  <DropdownItem key="copy"><Link to="/escalacao" className="text-white">JOGAR</Link></DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        ): null}
    </header>
  );
};

export default Navbar