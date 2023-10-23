import { useContext } from 'react';
import Header from '../../Components/Header';
import Menu from '../../Components/Menu';
import { ConsumerMaterialContext } from '../../Context';
function Home() {
    const context=useContext(ConsumerMaterialContext)   
    console.log(context.ots);
    console.log(context.users);
    return (
        <div className='flex flex-col h-screen'>
              <Header/>
              <Menu/>
          </div> 
    )
  }
  export default Home