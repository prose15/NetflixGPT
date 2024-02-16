import React from 'react'
import Login from './Login'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Browse from './Browse'

const Body = () => {

  const BrowserRouter = createBrowserRouter([
    {
        path : "/",
        element: <Login/>
    },
    {
        path: '/browse',
        element: <Browse/>
    }
])



  return (
    <div><RouterProvider router={BrowserRouter}/></div>
  )
}

export default Body