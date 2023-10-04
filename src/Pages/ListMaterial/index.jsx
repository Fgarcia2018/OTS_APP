import { useState,useEffect, useContext } from "react";
import { ConsumerMaterialContext } from "../../Context";
import Card from "../../Components/Card";
import ContextMenu from "../../Components/ContextMenu";
import Modal from "../../Modal";
import NavBar from "../../Components/NavBar";
import MsgMaterial from "../../Components/MsgMaterial";
import Header from "../../Components/Header";


function ListMaterial() {
 const context=useContext(ConsumerMaterialContext)

 const showCardMaterial=()=>{
  if(context.materialConsumed.length==0){

      return(
        <p className=" text-center">No hay materiales agregados</p>
      )   

  }else{

    return(
      
      context.materialConsumed?.map((material)=>(
        <Card key={material.id} data={material} ></Card>
      ))
    )
    
  }

 }
 console.log(context.materialConsumed);
  return (   
    <>
       <Header/>
      {
        showCardMaterial()
        
      } 
      <div className=" h-20 w-full "></div>
      {context.openModal && (
                  <Modal>
                    <MsgMaterial/>       
                  </Modal>
                  )} 
      <NavBar/>   
    </>
  )
}
export default ListMaterial