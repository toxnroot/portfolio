import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Service from './pages/service/service'
import Projects from './pages/projects/projects.jsx';
import ContactUs from './pages/contact-us/contact-us.jsx';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Hero from './componnet/hero/hero.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App><Hero/></App>,
    errorElement: <h1>Erorr............</h1>
  },
  {
    path: 'service',
    element: <App><Service/></App>,

  },{
    path: 'projects',
    element: <App><Projects/></App>,
  }
  ,{
    path: 'contact-us',
    element: <App><ContactUs/></App>,
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
