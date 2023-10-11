import{EllipsisVerticalIcon} from '@heroicons/react/24/solid';
import { ConsumerMaterialContext } from '../../Context';
import ContextMenu from '../ContextMenu';
import './styles.css';
import { useContext,useState } from 'react';


function Card({data}) {
  const context=useContext(ConsumerMaterialContext)
  const [contextMenu,setContextMenu]=useState(false) 
   
  const [materialSelected,setMaterialSelected]=useState('')  
  
  const renderMenu=(id)=>{ 
    const isMaterialSelected=context.materialConsumed.filter(material=>material.id===id).length==1
    if (isMaterialSelected){
      console.log(id)
      if (contextMenu) return (<ContextMenu id={id}/>)
     }
    }     
    return (
      <>
      <div className="relative border rounded-lg border-cyan-600 ml-5 mr-5 mb-2 pl-3 pr-6 pb-3 h-auto" >
        <div className="relative text-center">
            <span className='align-center '>{data.descripcion}</span> 
        </div>
        <div className="flex justify-items-center align-middle gap-3 ">
            <h3 className='label-card'>Unidad: </h3><span>{data.unidad}</span> 
        </div>

       <div className="flex align-middle gap-3">
            <h3 className='label-card'>Cantidad: </h3><span>{data.cantidad}</span>
       </div>
        <div className="flex flex-col align-middle gap-1 h-auto">
             <h3 className='label-card'>Observación: </h3>
               <span className='card-observation'> {data.observacion}</span>
        </div>
        <EllipsisVerticalIcon className="h-8 w-8 text-blue-500  top-0 right-0 absolute" 
       onTouchStart={()=>{
       
        setMaterialSelected(data.id)
        setContextMenu(!contextMenu)      
        }} />  

        {
          renderMenu(materialSelected)
        }      
       
         
        </div>
        
      </>
    )
  }
  export default Card