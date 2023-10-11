import { useContext} from "react"
import FormLogin from "../../Components/FormLogin"
import { ConsumerMaterialContext } from "../../Context"

function Login() {
  const context=useContext(ConsumerMaterialContext)
    return (
      <>
        <div className="flex flex-col h-screen  items-center ">
            <div className='flex bg-cyan-600 w-full h-20 text-3xl  text-white justify-center items-center'>
                   <p>REGOT</p>
            </div>    
            <div className="flex flex-col h-full justify-center w-72 ">
                  <FormLogin/>
                  <p className="flex justify-center text-red-500 mt-3">
                      {context.messageLogin}
                  </p>
            </div>
            <div className="w-full h-10 text-xs text-cyan-600 text-center">
                   © 2023, Fernando García
            </div>   
        </div>
        
      </>
    )
  }
  export default Login