import React, {lazy, Suspense} from 'react'
import {useRoutes, Navigate} from 'react-router-dom'
import Home from '../pages/Home/Home'
const HomeTemplateLazy = lazy(()=> import('../components/Layouts/HomeTemplate/HomeTemplate'))
const Routers = () => {
  const routing =  useRoutes([
    {
        path:'/',
        element: (
            <Suspense>
                <HomeTemplateLazy></HomeTemplateLazy>
            </Suspense>
        ),
        children:[
            {
                path: '/',
                element: <Navigate to={'home'}></Navigate>
            },
            {
                path: 'home',
                element:<Home/> 
            }
        ]    
    }
  ]);
  return routing
}

export default Routers