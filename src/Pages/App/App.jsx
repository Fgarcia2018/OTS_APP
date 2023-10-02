import { BrowserRouter, useRoutes } from 'react-router-dom';
import { ConsumerMaterialContext, ConsumerMaterialProvider } from '../../Context';
import Home from '../Home';
import Login from '../Login';
import RecordMaterial from '../RecordMaterial';
import UpdateMaterial from '../UpdateMaterial';
import NotFound from '../NotFound';
import ListMaterial from '../ListMaterial';
import Modal from '../../Modal';
import { useState } from 'react';
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
