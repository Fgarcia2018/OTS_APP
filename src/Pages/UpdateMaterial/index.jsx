import { useState, useContext } from "react";
import FormMaterial from "../../Components/FormMaterial";
import { ConsumerMaterialContext } from "../../Context";
import AddMaterialButton from "../../Components/AddMaterialButton";

function UpdateMaterial() {
  const context=useContext(ConsumerMaterialContext); 
   return (   
    <>
      <div className='bg-cyan-600'>
        Update Material        
      </div>        
      <FormMaterial  
       data={context.materialModified} ></FormMaterial>
      <AddMaterialButton></AddMaterialButton>
    </>
  )
}
export default UpdateMaterial
// val={context.materialModified}