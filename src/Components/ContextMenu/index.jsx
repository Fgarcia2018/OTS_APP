import { useContext } from "react"
import {TrashIcon, PencilSquareIcon} from '@heroicons/react/24/solid';
import { ConsumerMaterialContext } from "../../Context"
import { Link } from "react-router-dom"
const ContextMenu=({id})=>{ 
    const context=useContext(ConsumerMaterialContext)
     return(

        <div className='context_menu absolute bg-cyan-600 text-yellow-50 w-32 h-24 top-5 right-5 text-center p-3 rounded-lg'>
            <ul>
                <li className="flex gap-2 mb-3" onTouchStart={()=>{
                    context.deleteMaterial(id) 
                    }}>
                        <TrashIcon className="h-5 w-5"/>
                        <Link to={'../lista-materiales'}>Eliminar</Link>
                </li>
                <li className="flex gap-2 mb-3" onTouchStart={()=>{
                    context.materialToModify(id)
                    }}>
                    <PencilSquareIcon className="h-5 w-5"/>
                    <Link to={'../update-material'}>Editar</Link>
                </li> 
                    
            </ul>
        </div>
    )
}
export default ContextMenu


