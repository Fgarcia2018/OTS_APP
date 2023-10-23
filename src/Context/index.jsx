import { createContext,useState,useEffect } from "react";
export const ConsumerMaterialContext=createContext();
import {stringDateCurrent} from '../utilities/index.js'

export const ConsumerMaterialProvider=({children})=>{
     
        // API
        const API='https://otherappinventario.000webhostapp.com';

          // OTS - STATE    
        const [ots,setOts]=useState([]);

         // OTS - ENDPOINT     
         useEffect(()=>{
            fetch(API+'/apiot')
            .then(response=> response.json()) 
            .then(data=>setOts(data))             
            localStorage.setItem("MaterialesConsumidos","[]")
        },[])

         //OTS - NUMOT - STATE    
         const[numOt,setNumOt]=useState('')
         const[customerOt,setCustomerOt]=useState('') 
        

        // PERSONAL ENDPOINT
        useEffect(()=>{
            fetch(API+'/apipersonal')
            .then(response=> response.json())    
             .then(data=>{localStorage.setItem("users",JSON.stringify(data))})            
        },[])
        
        //USER - STATE
        let dataUsers=JSON.parse(localStorage.getItem('users'))
    
        const [users,setUsers]=useState(dataUsers)      
        const [userName,setUserName]=useState('')
        const [employName,setEmployName]=useState('')      
   
                
        const [messageLogin,setMessageLogin]=useState('')

        // USER - VALIDATE
        const validateUser=(logUserName,logPass)=>{
            localStorage.setItem("userlog",'[{"usuario":"","nombre":""}]')  
            let filter= users.filter((user)=>{
                return  user.usuario===logUserName
                })
               if (filter.length==1){
                     if(filter[0].pass===parseInt(logPass)) {                           
                            localStorage.setItem('userlog',JSON.stringify(filter)) 
                            let logUser=JSON.parse(localStorage.getItem('userlog'))[0].usuario                              
                            setUserName(logUser)                           
                            setEmployName(JSON.parse(localStorage.getItem('userlog'))[0].nombre)
                            setNumOt(getOtToday(logUser).ot)
                            setCustomerOt(getOtToday(logUser).cliente)  
                            return true
                    }else{                     
                            setMessageLogin('Contraseña Incorrecta')
               }
            }else{
                setMessageLogin('Usuario No Registrado')
            }
        } 

        // OTS - GET OT
        const getOtToday=(user)=>{
        const getOt=ots.find((ot)=>{
                return ot.idTrabajador==user && ot.fechaOt===stringDateCurrent() 
            })               
                if(getOt){   
                    console.log(getOt);                     
                    return getOt                  
                }else{
                    return {ot:'SIN ASIGNAR',cliente:'SIN ASIGNAR'}
                }    
                        
            }   

        // MESSAGE RECORD MATERIAL
        const[messageMaterial,setMessageMaterial]=useState('');

        //MATERIAL -  STATE 
        const [material,setMaterial]=useState(null);

        // MATERIAL CONSUMED STATE
        let materialsConsumed=JSON.parse(localStorage.getItem('MaterialesConsumidos'))
        const [materialConsumed,setMaterialConsumed]=useState(materialsConsumed);
        const [materialModified,setMaterialModified]=useState([]);
        
        // MODAL
        const[openModal,setOpenModal]=useState(false)

        // MODAL - SHOW MODAL
        const showModal=(msg)=>{
            setMessageMaterial(msg)
            setOpenModal(true)
            setTimeout(() => {
                setOpenModal(false)
            }, 2000);            
        }

        // MATERIALS CONSUMED ADD
            const addMaterial=(ot,idTrabajador,id,descripcion,unidad,cantidad,observacion)=>{
                materialsConsumed.push({ot,idTrabajador,id,descripcion,unidad,cantidad,observacion})      
                localStorage.setItem('MaterialesConsumidos',JSON.stringify(materialsConsumed))
                setMaterialConsumed(materialsConsumed)
                showModal('Material Almacenado')
               
            } 
         //MATERIALS ADD ENDPOINT
         const addMaterialApi=async()=>{
                await fetch(API+'/newmat/setcons',{
                method:'POST',
                mode:'cors',
                credentials:'same-origin',

                // El envío de cabeceras, genera error al comunicarse con servidor 000webhost.com
                // headers:{
                //                 'Content-type':'application/json'
                //             },
                body:JSON.stringify(materialConsumed)
        });
        materialsConsumed=[]
        localStorage.setItem('MaterialesConsumidos',JSON.stringify(materialsConsumed))    
        setMaterialConsumed(materialsConsumed)
        showModal('Materiales enviados al servidor')
        }
         
        //MATERIALS CONSUMED DELETE
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
        //MATERIALS TO MODIFY
        const materialToModify=(id)=>{
           let filter= materialsConsumed.find((material)=>{
                return material.id===id
                })     
               setMaterialModified([filter])
        }

        //MATERIAL UPDATE
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
            showModal('Material Actualizado')
        }
       
        return(
            <ConsumerMaterialContext.Provider value={
                {   
                    API,
                    users,
                    setUsers,
                    validateUser,
                    userName,
                    setUserName,
                    messageLogin,
                    setMessageLogin,
                    employName,
                    setEmployName,
                    ots,
                    setOts,                               
                    numOt,
                    setNumOt,
                    customerOt,
                    setCustomerOt,
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
                    addMaterialApi,
                    getOtToday
                }
            }>
                    {children}
            </ConsumerMaterialContext.Provider>
        )
}