import { useState,useEffect, useContext } from "react";
import { ConsumerMaterialContext } from "../../Context";
import Card from "../../Components/Card";
import ContextMenu from "../../Components/ContextMenu";
import Modal from "../../Modal";
import NavBar from "../../Components/NavBar";
import MsgMaterial from "../../Components/MsgMaterial";


function ListMaterial() {
 const context=useContext(ConsumerMaterialContext)
 console.log(context.materialConsumed);
  return (   
    <>
       <div className="bg-teal-600 text-center mb-5 sticky w-full top-0 z-10">
            Materiales Consumidos OT: <span>6569865</span>
       </div>
      {
        context.materialConsumed?.map((material)=>(
          <Card key={material.id} data={material} ></Card>
        ))
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