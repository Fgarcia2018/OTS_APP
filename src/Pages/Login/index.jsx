import { useContext,useEffect } from "react"
import FormLogin from "../../Components/FormLogin"
import { ConsumerMaterialContext } from "../../Context"

function Login() {
  const context=useContext(ConsumerMaterialContext)
   
  // console.log('OTS:'+context.users);


    return (
      <>
        <div className='bg-cyan-600'>
          Login
        </div>
        <FormLogin/>
        <p className="flex justify-center">
          {context.messageLogin}
        </p>
      </>
    )
  }
  export default Login