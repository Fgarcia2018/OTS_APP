import { useState,useEffect, useContext } from "react";
import FormMaterial from "../../Components/FormMaterial";
import { ConsumerMaterialContext } from "../../Context";
import Modal from "../../Modal";
import NavBar from "../../Components/NavBar";
import MsgMaterial from "../../Components/MsgMaterial";
import Header from "../../Components/Header";

function RecordMaterial() {
  const context=useContext(ConsumerMaterialContext);

  useEffect(()=>{
      fetch(context.API+'/apimaterial')
      .then(response=>response.json())
      .then(data=>context.setMaterial(data))
  }, [])
  return (   
    <>
      <Header/>
      <div className='flex justify-center  text-3xl text-cyan-600 mb-5'>
        Registrar
      </div>      
      {/* <div className="seccion_materiales">${agregarMaterialEntrada(material)}</div> */}

     <div className="flex justify-center">
        <div className="flex flex-col h-full justify-center  w-72 " >
          <FormMaterial  data={context.material}></FormMaterial>
          </div>
     </div>
      {context.openModal && (
                  <Modal>
                      <MsgMaterial/>      
                  </Modal>
                  )} 
      <NavBar></NavBar>
     
    </>
  )
}
export default RecordMaterial