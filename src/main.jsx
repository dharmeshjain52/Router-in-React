import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromChildren, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import User from './Components/User/User.jsx'
import Github,{githubInfoLoader} from './Components/Github/Github.jsx'

// const route=createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:'',
//         element:<Home/>
//       },
//       {
//         path:'/About',
//         element:<About/>
//       }
//     ]
//   }
// ])
const route=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='User/:userid' element={<User/>}/>
      <Route path='Github' element={<Github/>}  loader={githubInfoLoader}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>,
)
