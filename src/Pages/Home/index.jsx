import { useContext } from 'react';
import Header from '../../Components/Header';
import Menu from '../../Components/Menu';
import { ConsumerMaterialContext } from '../../Context';
function Home() {
    const context=useContext(ConsumerMaterialContext)
   
    console.log('OTS:'+context.ots);
    return (
        <div className='flex flex-col h-screen'>
              <Header/>
              <Menu/>
          </div> 
    )
  }
  export default Home