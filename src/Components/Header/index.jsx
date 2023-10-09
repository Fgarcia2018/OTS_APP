import { useContext} from "react"
import { ConsumerMaterialContext } from "../../Context"

const Header=()=>{ 
    const context=useContext(ConsumerMaterialContext)

     return(
        
        <div className="bg-teal-600 text-center mb-5 sticky w-full top-0 z-10">
            <div className='flex p-2'>
                <h3>usuario:</h3>
                <span>Fernando García</span>
            </div>
            <div className='flex p-2'>
                <h3> Orden:</h3>
                <span>{context.numOt}</span>
            </div>
            <div className='flex p-2'>
                <h3> Cliente:</h3>
                <span>{context.customerOt}</span>
            </div>
        </div>
    )
}
export default Header   