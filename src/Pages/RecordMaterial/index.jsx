import { useState,useEffect, useContext } from "react";
import {agregarMaterialEntrada} from '../../utilities';
import FormMaterial from "../../Components/FormMaterial";
import { ConsumerMaterialContext } from "../../Context";
import AddMaterialButton from "../../Components/AddMaterialButton";

function RecordMaterial() {
  const context=useContext(ConsumerMaterialContext);

  useEffect(()=>{
      fetch('https://otherappinventario.000webhostapp.com/apimaterial')
      .then(response=>response.json())
      .then(data=>context.setMaterial(data))
  }, [])
  return (   
    <>
      <div className='bg-cyan-600'>
        Record Material        
      </div>      
      {/* <div className="seccion_materiales">${agregarMaterialEntrada(material)}</div> */}
      <FormMaterial  data={context.material}></FormMaterial>
      <AddMaterialButton></AddMaterialButton>
    </>
  )
}
export default RecordMaterial