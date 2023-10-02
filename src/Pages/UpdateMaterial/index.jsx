import { useState, useContext } from "react";
import FormMaterial from "../../Components/FormMaterial";
import { ConsumerMaterialContext } from "../../Context";
import Modal from "../../Modal";

import NavBar from "../../Components/NavBar";
import MsgMaterial from "../../Components/MsgMaterial";

function UpdateMaterial() {
  const context=useContext(ConsumerMaterialContext); 
   return (   
    <>
      <div className='bg-cyan-600'>
        Update Material        
      </div>        
      <FormMaterial  
       data={context.materialModified} ></FormMaterial>
        {context.openModal && (
                  <Modal>
                      <MsgMaterial/>        
                  </Modal>
                  )} 
      <NavBar/>
    </>
  )
}
export default UpdateMaterial
// val={context.materialModified}