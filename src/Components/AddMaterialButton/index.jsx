import { useContext } from 'react';
import { ConsumerMaterialContext } from '../../Context';
import './styles.css';

function AddMaterialButton(){
  const context=useContext(ConsumerMaterialContext);
   
    const saveMaterial=()=>{
      let path=document.location.pathname
      let id=document.getElementById("idmaterial" );
      let desc=document.getElementById("descripcionmaterial" );
      let un=document.getElementById("unidadmaterial");
      let cantidad=document.getElementById("cantidadmaterial" );
      let obs=document.getElementById("observacionmaterial");

      if(path==='/record-material'){
        context.addMaterial(id.value,desc.value,un.value,cantidad.value,obs.value) 
      }else{
          context.updateMaterial(id.value,desc.value,un.value,cantidad.value,obs.value) 
      }
   

      // console.log(id.value,desc.value,un.value,cantidad.value,obs.value)
    



    }
   
   
  
    
    return (
      <button className="AddMaterialButton"
       onClick={()=>{saveMaterial()
       
       }
      }>+</button>
    );
  }
export default AddMaterialButton;  