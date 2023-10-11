import { useContext } from 'react';
import {CheckIcon} from '@heroicons/react/24/solid';
import { ConsumerMaterialContext } from '../../Context';
import './styles.css'
const MsgMaterial=()=>{
    const context=useContext(ConsumerMaterialContext)
    return  (

    <div className="divMessage">
        {context.messageMaterial}<CheckIcon className='h-5 w-5 text-cyan-600'/>
    </div>        
       
    );
}
export default MsgMaterial;