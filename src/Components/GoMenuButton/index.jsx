import {Bars3Icon} from  '@heroicons/react/24/solid';
import '../AddMaterialButton/styles.css';
import { Link } from 'react-router-dom';

function GoMenuButton(){  
    return (
      <Link to={'../home'}>
      <button className="NavButton"
      
      ><Bars3Icon className="h-7 w-7 text-white-500"/></button></Link>  
    );
  }
export default GoMenuButton;  