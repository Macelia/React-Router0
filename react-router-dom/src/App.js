
import { Link, Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Home, { HomeLoader } from './components/Home';
import Data, { DataLoader } from './components/Data';
import Contact, { ContactLoader } from './components/Contact';
import Data0, { Data0Loader } from './components/Data0';



function App() {
  
  const router = createBrowserRouter(createRoutesFromElements(
   
    <Route path='/' element={<Root/>}>
    
    <Route index element={<Home/>} loader={HomeLoader}/> 
    <Route path='/data' element={<Data/>} loader={DataLoader}/> 
    <Route path='/data0' element={<Data0/>} loader={Data0Loader}/> 

    <Route path='/contact' element={<Contact/>} loader={ContactLoader}/> 
         
    </Route>

  ));

  return (
    <div className="App">  
    <RouterProvider router={router}/>
   
    </div>
  );
}

export default App;

const Root =()=>{
  return <>
      <div className='Link'>
        <Link to='/' >home</Link>
        <Link to='/data'>data</Link>
        <Link to='/data0'>data0</Link>
        <Link to='/contact'>contact</Link>
      </div>

      <div className="Content">
        <Outlet/>
      </div>
  </>
}
