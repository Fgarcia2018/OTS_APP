import { BrowserRouter, useRoutes } from 'react-router-dom';
import Home from '../Home';
import Login from '../Login';
import RecordMaterial from '../RecordMaterial';
import NotFound from '../NotFound';
const AppRoutes=()=>{
  let routes=useRoutes([
    {path:'/',element: <Home/>},
    {path:'/login',element: <Login/>},
    {path:'/record-material',element: <RecordMaterial/>},
    {path:'/*',element: <NotFound/>},
  ])
  return routes;

}
function App() {
  
  return (
    <>
      <div className='bg-cyan-600'>    
      <BrowserRouter>
          <AppRoutes/> 
      </BrowserRouter>  
            
      </div>
     
    </>
  )
}
export default App
