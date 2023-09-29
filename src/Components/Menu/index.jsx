import { Link } from 'react-router-dom';
import './styles.css';
function Menu() {
    return (
      <>
      <div className="flex flex-col justify-center items-center h-screen">
        <Link to={'../record-material'}> <button className="menu-button">Registrar Consumos</button></Link>       
        <button className= "menu-button">Consultar Ordenes De Trabajo</button>
        <Link to={'../lista-materiales'}><button className= "menu-button">Lista Materiales</button></Link>
        <Link to={'../login'}><button className= "menu-button">Salir</button></Link>
      </div>  
      </>
    )
  }
  export default Menu