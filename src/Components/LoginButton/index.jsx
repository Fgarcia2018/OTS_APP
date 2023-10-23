import { useContext } from 'react';
import { ConsumerMaterialContext } from '../../Context';
import { useNavigate } from 'react-router-dom';

function LoginButton(){
  const navigate=useNavigate() 
  const context=useContext(ConsumerMaterialContext);
  
    const validate=()=>{
      let inputUserName=document.getElementById("username" );
      let inputPass=document.getElementById("pass" );           
      context.validateUser(inputUserName.value,inputPass.value) ? navigate('/Home') : navigate('/')
    }
    
    return (
      <button className="bg-cyan-600 text-white rounded-lg mt-2 p-1" 
       onClick={()=>{
        validate() 
      }}>
         Ingresar
      </button>
    )
  }
export default LoginButton;  