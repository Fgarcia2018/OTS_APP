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
      <div className='bg-cyan-600'>
        Record Material        
      </div>      
      {/* <div className="seccion_materiales">${agregarMaterialEntrada(material)}</div> */}
      <FormMaterial  data={context.material}></FormMaterial>
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