import './App.css';

import Home from './Component/Home/Home';
import About from './Component/About/About';
import Conact from './Component/Contact/Conact';
import Portfolio from './Component/Portfolio/Portfolio';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import Layout from './Component/Layout/Layout';
import Notfound from './Component/Notfound/Notfound';
let router=createHashRouter([{
  path:"",element:<Layout/>,children:[
        {index:true,element:<Home/>},
        {path:"about",element:<About/>},
        {path:"contact",element:<Conact/>},
        {path:"portfolio",element:<Portfolio/>},
        {path:"*",element:<Notfound/>}
  ]
}])
function App() {
  return <>
<RouterProvider router={router}/>
  </> 
}

export default App;
