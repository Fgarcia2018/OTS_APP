import { createContext,useState,useEffect } from "react";
export const ConsumerMaterialContext=createContext();

export const ConsumerMaterialProvider=({children})=>{
        // API
        const API='http://localhost/inventario_ots';

        // OTS - STATE

        const [ots,setOts]=useState([]);

        // OTS - API

        useEffect(()=>{
            fetch(API+'/apiot')
            .then(response=>response.json())
            .then(data=>setOts(data))

        },[])
    

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
            const addMaterial=(ot,idTrabajador,id,descripcion,unidad,cantidad,observacion)=>{
                materialsConsumed.push({ot,idTrabajador,id,descripcion,unidad,cantidad,observacion})      
                localStorage.setItem('MaterialesConsumidos',JSON.stringify(materialsConsumed))
                setMaterialConsumed(materialsConsumed)
                showModal('Material Almacenado')
               
            } 
         //Materials - Add - API
         const addMaterialApi=async()=>{
            const response=await fetch(API+'/newmat/setMaterialConsumed',{
                method:'POST',
                headers:{
                                'Content-type':'application/json'
                            },
                body:JSON.stringify(materialConsumed)
        });
        // if (response.status==200){
        //     alert(await response.json());                
        // }
        materialsConsumed=[]
        localStorage.setItem('MaterialesConsumidos',JSON.stringify(materialsConsumed))    
        setMaterialConsumed(materialsConsumed)
        showModal('Materiales enviados al servidor')
        return response
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
        const updateMaterial=(ot,idTrabajador,id,descripcion,unidad,cantidad,observacion)=>{
            materialsConsumed[findId(id)].ot=ot
            materialsConsumed[findId(id)].idTrabajador=idTrabajador
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
                    API,
                    ots,
                    setOts,
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
                    setMessageMaterial,
                    addMaterialApi

                }
            }>
                    {children}
            </ConsumerMaterialContext.Provider>
        )
}