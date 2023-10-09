import { useContext } from 'react';
import {CircleStackIcon} from  '@heroicons/react/24/solid';
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
        context.addMaterial(context.numOt,'16848773',id.value,desc.value,un.value,cantidad.value,obs.value)         
      }else if(path==='/update-material'){
          context.updateMaterial(context.numOt,'16848773',id.value,desc.value,un.value,cantidad.value,obs.value) 
      }else{        
        context.addMaterialApi()
      }
    }
    
    return (
      <button className="NavButton"
       onClick={()=>{saveMaterial()
       
       }
      }><CircleStackIcon className="h-5 w-5 text-white-500"/></button>
    );
  }
export default AddMaterialButton;  