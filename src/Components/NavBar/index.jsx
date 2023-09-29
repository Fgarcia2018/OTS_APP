import { useContext } from 'react';
import { ConsumerMaterialContext } from '../../Context';
import AddMaterialButton from '../AddMaterialButton';
import GoMenuButton from '../GoMenuButton';

function NavBar(){
  const context=useContext(ConsumerMaterialContext);
    return (
        <>
            <div className='flex gap-3 fixed right-4 bottom-4'>
                <AddMaterialButton></AddMaterialButton>
                <GoMenuButton></GoMenuButton>
            </div>
            
        </>
    );
  }
export default NavBar;  