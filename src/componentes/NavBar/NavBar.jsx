import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = (props) => {
  return (
    <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <h1>Camisetas</h1>
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          Inicio
        </li>
        <li className="nav-item">
          Catálogo
        </li>
        <li className="nav-item">
          Nosotros
        </li>
        <li className="nav-item">
          Contacto
        </li>
       
      </ul>

      <form className="d-flex barra-search" role="search">
        <input className="form-control me-2" type="search" placeholder="Buscá tu camiseta!" aria-label="Search" />
        <button className="btn btn-outline-danger" type="submit">Buscar</button>
      </form>
    </div>
    <CartWidget></CartWidget>
  </div>
  
</nav>

    </header>
  )
}

export default NavBar