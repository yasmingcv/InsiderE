import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/reset.css'
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import PageNotFound from './pages/notfound/PageNotFound.jsx'
import ChooseYourTeam from './pages/chooseYourTeam/ChooseYourTeam'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageNotFound />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/cadastro',
    element: <Cadastro />,
  },
  {
    path: '/escolha-seu-time',
    element: <ChooseYourTeam />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
