import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ThemedApp from './ThemedApp.jsx';
import FormJob from './pages/FormJob.jsx';
import Success from './pages/Success.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ThemedApp/>
  },
  {
    path: "/jobform/:guid",
    element: <FormJob/>
  },
  {
    path: "/success",
    element: <Success/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
