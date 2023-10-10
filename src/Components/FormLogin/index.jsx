import '../FormMaterial/styles.css'
import LoginButton from '../LoginButton'

function FormLogin() {     
    // let path=document.location.pathname
  return (  
        <>
            <form action="" className='flex flex-col'>       
            <label >Usuario:</label>
            <input type="text" name="username" id="username"  required/>
            <label >Contraseña:</label>
            <input type="password" name="pass" id="pass"    required/>
                   
        </form>
         <LoginButton/> 
        </>        

          
  )
}
export default FormLogin