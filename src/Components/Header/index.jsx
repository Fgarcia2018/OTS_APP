import { useContext} from "react"
import { ConsumerMaterialContext } from "../../Context"

const Header=()=>{ 
    const context=useContext(ConsumerMaterialContext)
   
     return(
        
        <div className="bg-cyan-600 text-white text-center text-lg mb-5 sticky w-full top-0 z-10 ">
            <div className='flex p-2 items-center gap-4 w-full'>
                <h3>usuario:</h3>
                <span className=" text-sm w-5/6">{context.employName}</span>
            </div>
            <div className='flex p-2'>
                <h3> Orden:</h3>
                <span className=" text-sm w-5/6">{context.numOt}</span>
            </div>
            <div className='flex p-2'>
                <h3> Cliente:</h3>
                <span className=" text-sm w-5/6">{context.customerOt}</span>
            </div>
        </div>
    )
}
export default Header   