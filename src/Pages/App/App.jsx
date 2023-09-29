import { BrowserRouter, useRoutes } from 'react-router-dom';
import { ConsumerMaterialProvider } from '../../Context';
import Home from '../Home';
import Login from '../Login';
import RecordMaterial from '../RecordMaterial';
import UpdateMaterial from '../UpdateMaterial';
import NotFound from '../NotFound';
import ListMaterial from '../ListMaterial';
const AppRoutes=()=>{
  let routes=useRoutes([
    {path:'/',element: <Home/>},
    {path:'/login',element: <Login/>},
    {path:'/record-material',element: <RecordMaterial/>},
    {path:'/update-material',element: <UpdateMaterial/>},
    {path:'/*',element: <NotFound/>},
    {path:'/lista-materiales',element: <ListMaterial/>},
  ])
  return routes;
}

function App() {
  return (
    <>
     <ConsumerMaterialProvider>
          <BrowserRouter>
              <AppRoutes/> 
          </BrowserRouter>  
     </ConsumerMaterialProvider>
    </>
  )
}
export default App
