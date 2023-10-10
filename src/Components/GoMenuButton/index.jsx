import { useContext } from 'react';
import {Bars3Icon} from  '@heroicons/react/24/solid';
import { ConsumerMaterialContext } from '../../Context';
import '../AddMaterialButton/styles.css';
import { Link } from 'react-router-dom';

function GoMenuButton(){
  const context=useContext(ConsumerMaterialContext);
    return (
      <Link to={'../home'}>
      <button className="NavButton"
      
      ><Bars3Icon className="h-5 w-5 text-white-500"/></button></Link>  
    );
  }
export default GoMenuButton;  