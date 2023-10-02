import { createContext,useState } from "react";
export const ConsumerMaterialContext=createContext();

export const ConsumerMaterialProvider=({children})=>{

         // Message - state
         const[messageMaterial,setMessageMaterial]=useState('');



        // Material -  state  - API 
        const [material,setMaterial]=useState(null);

        // Materials consumed - state - localstorage
        let materialsConsumed=JSON.parse(localStorage.getItem('MaterialesConsumidos'))
        const [materialConsumed,setMaterialConsumed]=useState(materialsConsumed);
        const [materialModified,setMaterialModified]=useState([]);
        
        // Modal
        const[openModal,setOpenModal]=useState(false)

        // Modal - Show Modal

        const showModal=(msg)=>{
            setMessageMaterial(msg)
            setOpenModal(true)
            setTimeout(() => {
                setOpenModal(false)
            }, 2000);            
        }

        // Materials  - Add 
            const addMaterial=(id,descripcion,unidad,cantidad,observacion)=>{
                materialsConsumed.push({id,descripcion,unidad,cantidad,observacion})      
                localStorage.setItem('MaterialesConsumidos',JSON.stringify(materialsConsumed))
                setMaterialConsumed(materialsConsumed)
                showModal('Material Almacenado')
               
            }   
        //Materials - Delete 

            const findId=(id)=>{
                let filter= materialsConsumed.find((material)=>{
                    return  material.id===id
                    })
                return materialsConsumed.indexOf(filter)
            }
            const deleteMaterial=(id)=>{
                materialsConsumed.splice(findId(id),1)
                localStorage.setItem('MaterialesConsumidos',JSON.stringify(materialsConsumed))
                setMaterialConsumed(materialsConsumed)
                showModal('Material Eliminado')
            }
        //Materials -  to Modifu¿y
        const materialToModify=(id)=>{
           let filter= materialsConsumed.find((material)=>{
                return material.id===id
                })     
               setMaterialModified([filter])
           
        }

        // Material - Update
        const updateMaterial=(id,descripcion,unidad,cantidad,observacion)=>{
            materialsConsumed[findId(id)].id=id
            materialsConsumed[findId(id)].descripcion=descripcion   
            materialsConsumed[findId(id)].unidad=unidad
            materialsConsumed[findId(id)].cantidad=cantidad
            materialsConsumed[findId(id)].observacion=observacion  
         
                 
            localStorage.setItem('MaterialesConsumidos',JSON.stringify(materialsConsumed))
            setMaterialConsumed(materialsConsumed)
            showModal('Material Editado')
        }



       
        return(
            <ConsumerMaterialContext.Provider value={
                {
                    material,
                    setMaterial,
                    materialConsumed,
                    setMaterialConsumed,
                    addMaterial,
                    deleteMaterial,
                    materialToModify,
                    updateMaterial,
                    materialModified,
                    setMaterialModified,
                    openModal,
                    setOpenModal,
                    messageMaterial,
                    setMessageMaterial

                }
            }>
                    {children}
            </ConsumerMaterialContext.Provider>
        )
}