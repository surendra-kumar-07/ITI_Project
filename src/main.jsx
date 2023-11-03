import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from '../store/store.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { AuthLayout, AllPosts, Layout} from "./components/index.js";
import {AdminLogin, Dashboard,} from "./pages/index.js"



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<Layout/>}>

      {/* user routes */}
    <Route path='/' element={<App/>}/>


    {/* admin routes */}
    <Route path='/admin-panel-login' 
          element={( <AuthLayout authentication={false}><AdminLogin /></AuthLayout>)}/>
    <Route path='/admin-dashboard' 
          element={( <AuthLayout authentication={true}></AuthLayout>)}>
          <Route path='' element={<Dashboard />}>
            <Route path='' element={<AllPosts/>}/>
            {/* <Route path='edit-post' element={<AllPost/>}/>
            <Route path='add-home-post' element={<AllPost/>}/>
            <Route path='edit-home-post/:slug' element={<AllPost/>}/> */}
          </Route>

          </Route>
    

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer/>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
