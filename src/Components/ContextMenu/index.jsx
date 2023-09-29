import { useContext } from "react"
import { ConsumerMaterialContext } from "../../Context"
import { Link } from "react-router-dom"
const ContextMenu=({id})=>{ 
    const context=useContext(ConsumerMaterialContext)
     return(

        <div className='context_menu absolute bg-teal-600 text-yellow-50 w-32 h-24 top-5 right-5 text-center p-3 rounded-lg'>
            <ul>
                <li onTouchStart={()=>{
                    context.deleteMaterial(id)                  
                    
                    }}><Link to={'../lista-materiales'}>Eliminar</Link></li>
                <li onTouchStart={()=>{context.materialToModify(id)}}><Link to={'../update-material'}>Editar</Link></li> 
                    
            </ul>
        </div>
    )
}
export default ContextMenu


