import { BrowserRouter, useRoutes } from 'react-router-dom';
import { ConsumerMaterialContext, ConsumerMaterialProvider } from '../../Context';
import Home from '../Home';
import Login from '../Login';
import RecordMaterial from '../RecordMaterial';
import UpdateMaterial from '../UpdateMaterial';
import NotFound from '../NotFound';
import ListMaterial from '../ListMaterial';
import { useState } from 'react';

export const AppRoutes=()=>{
  let routes=useRoutes([
    {path:'/Home', element: <Home/>},   
    {path:'/',element: <Login/>},
    {path:'/OTS_APP/',element: <Login/>},
    {path:'/record-material',element: <RecordMaterial/>},
    {path:'/update-material',element: <UpdateMaterial/>},
    {path:'/lista-materiales',element: <ListMaterial/>},
    {path:'/*',element: <NotFound/>},
  ])
  return routes;
}

function App() {
  const context=useState(ConsumerMaterialContext)
 
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
