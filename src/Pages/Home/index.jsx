import Menu from '../../Components/Menu';
function Home() {
    return (
      <>
      <div className='flex flex-col h-screen'>
        <div className='flex p-2'>
          <h3>usuario:</h3>
          <span>Fernando García</span>
        </div>
        <Menu/>
        </div>  
       
      </>
    )
  }
  export default Home