
import { Link, Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Data, { DataLoader } from './components/Data';
import Contact, { ContactLoader } from './components/Contact';



function App() {
  
  const router = createBrowserRouter(createRoutesFromElements(
   
    <Route path='/' element={<Root/>}>
    
    <Route index element={<Home/>}/> 
    <Route path='/data' element={<Data/>} loader={DataLoader}/> 
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
      <div>
        <Link to='/' >home</Link>
        <Link to='/data'>data</Link>
        <Link to='/contact'>contact</Link>
      </div>

      <div>
        <Outlet/>
      </div>
  </>
}
