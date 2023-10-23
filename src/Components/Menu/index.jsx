import { Link } from 'react-router-dom';
import {PencilSquareIcon, ClipboardDocumentListIcon,ArrowLeftOnRectangleIcon} from '@heroicons/react/24/solid';
import './styles.css';
function Menu() {
    return (
      <>
      <div className="flex flex-col justify-center items-center h-screen">
        <Link to={'../record-material'}>
         <button className="menu-button">
             <PencilSquareIcon />Registrar Consumos 
         </button>
         </Link>        
        {/* <button className= "menu-button">Consultar Ordenes De Trabajo</button> */}
        <Link to={'../lista-materiales'}>
            <button className= "menu-button">
              <ClipboardDocumentListIcon/>Ver Lista Materiales
            </button>
        </Link>
        <Link to={'../'}>
              <button className= "menu-button">
              <ArrowLeftOnRectangleIcon/>Salir
              </button>
          </Link>
      </div>  
      </>
    )
  }
  export default Menu