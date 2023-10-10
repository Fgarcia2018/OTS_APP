import { useContext } from 'react';
// import {CircleStackIcon} from  '@heroicons/react/24/solid';
import { ConsumerMaterialContext } from '../../Context';
// import './styles.css';

function LoginButton(){
  const context=useContext(ConsumerMaterialContext);
  
   
    const validate=()=>{
    //   let path=document.location.pathname
      let inputUserName=document.getElementById("username" );
      let inputPass=document.getElementById("pass" );        
     
      context.validateUser(inputUserName.value,inputPass.value)
    }
    
    return (
      <button className=""  onClick={()=>validate()}>
        Ingresar
      </button>
    )
  }
export default LoginButton;  