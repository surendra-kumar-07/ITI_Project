import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from '../store/store.js'
import { createBrowserRouter } from 'react-router-dom'
import {AdminLogin, AuthLayout, Dashboard} from "./components/index.js"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
     
    ]
  },
  {
      path: "/adminpanel",
      element: ( <AuthLayout authentication={false}>
                     <AdminLogin />
                   </AuthLayout>
      ),
      children: [
        {
          path: "/dashboard",
          element:  ( <AuthLayout authentication>
            <AdminLogin />
          </AuthLayout>
),
          children: []
        },
        {
          path: "/add-post",
          element:  ( <AuthLayout authentication>
            <AdminLogin />
          </AuthLayout>
),
          children: []
        },
        {
          path: "/edit-post/:slug",
          element:  ( <AuthLayout authentication>
            <AdminLogin />
          </AuthLayout>
),
          children: []
        },
        {
          path: "/add-home-post",
          element:  ( <AuthLayout authentication>
            <AdminLogin />
          </AuthLayout>
),
          children: []
        },
        {
          path: "/edit-home-post/:slug",
          element:  ( <AuthLayout authentication>
            <AdminLogin />
          </AuthLayout>
),
          children: []
        },
      ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
