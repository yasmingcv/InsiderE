import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/reset.css'
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import PageNotFound from './pages/notfound/PageNotFound.jsx'
import ChooseYourTeam from './pages/chooseYourTeam/ChooseYourTeam'
import App from './App.jsx'
import TeamDetails from './pages/teamDetails/TeamDetails.jsx'
import Escalacao from './pages/escalacao/Escalacao'
import SelecionaPiloto from './pages/selecionaPiloto/SelecionaPiloto'
import SelecionarPole from './pages/selecionarPole/SelecionarPole'
import SelecionarEquipe from './pages/selecionarEquipe/SelecionarEquipe'
import Ranking from './pages/ranking/Ranking.jsx'
import RankingUsers from './pages/rankingUsers/RankingUsers.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Login/> },
      { path: '/cadastro', element: <Cadastro/> },
      { path: '/escolha-seu-time', element: <ChooseYourTeam/> },
      { path: '/escalacao', element: <Escalacao/> },
      { path: '/podio', element: <SelecionaPiloto/> },
      { path: '/pole', element: <SelecionarPole/> },
      { path: '/maiorPontuadora', element: <SelecionarEquipe/> },
      { path: '/time/:id', element: <TeamDetails/> },
      { path: '/ranking', element: <Ranking/> },
      { path: '/rankingUsers', element: <RankingUsers/> },
      { path: '/*', element: <PageNotFound/> },
    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
