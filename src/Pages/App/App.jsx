import Home from '../Home';
import Login from '../Login';
import RecordMaterial from '../RecordMaterial';
import NotFound from '../NotFound';
function App() {
  return (
    <>
      <div className='bg-cyan-600'>
        <Home></Home>
        <Login></Login>
        <RecordMaterial></RecordMaterial>
        <NotFound></NotFound>
      </div>
     
    </>
  )
}
export default App
