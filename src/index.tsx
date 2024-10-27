import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Login } from './pages/Login/login';
import { Registration } from './pages/Registration/registration';

const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/login", element: <Login/>},
  {path: "/registration", element: <Registration/>}
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>  
      <App/> 
  </React.StrictMode>
);
