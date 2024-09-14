import Navbar from '../../components/navbar/Navbar'
import './index.css'

const PageNotFound = () => {
  return (
      <>
        <Navbar showButtons="true"/>
        <div className="container">
          <h1>Página não encontrada</h1>
        </div>
      </>
  )
}

export default PageNotFound