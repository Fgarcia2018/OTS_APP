import { useState, useContext } from "react";
import FormMaterial from "../../Components/FormMaterial";
import { ConsumerMaterialContext } from "../../Context";
import Modal from "../../Modal";

import NavBar from "../../Components/NavBar";
import MsgMaterial from "../../Components/MsgMaterial";
import Header from "../../Components/Header";

function UpdateMaterial() {
  const context=useContext(ConsumerMaterialContext); 
   return (   
    <>
      <Header/>
      <div className='flex justify-center  text-3xl text-cyan-600 mb-5'>
        Actualizar
      </div> 
      <div className="flex justify-center">
            <div className="flex flex-col h-full justify-center  w-72 " >      
                <FormMaterial data={context.materialModified} ></FormMaterial>
            </div>
      </div> 
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
