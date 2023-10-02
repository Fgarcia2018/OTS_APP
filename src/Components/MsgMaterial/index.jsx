import { useContext } from 'react';
import { ConsumerMaterialContext } from '../../Context';
import './styles.css'
const MsgMaterial=()=>{
    const context=useContext(ConsumerMaterialContext)
    return  (

    <div className="divMessage">
        {context.messageMaterial}
    </div>        
       
    );
}
export default MsgMaterial;