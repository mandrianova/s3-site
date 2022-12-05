import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom';
import ActionComponent from './ActionComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Root from './Root';

const router = createHashRouter([
  {path: "/", element: <Root/>, children: [
      {path: "", element: <ActionComponent action={"main"}/>},
      {path: "second", element: <ActionComponent action={"second"} />},
      {path: "about", element: <ActionComponent action={"about"} />},
      {path: "level", children: [
          {path: "", element: <ActionComponent action={"level"} />},
          {path: "second", element: <ActionComponent action={"second level"} />},
        ]},
    ]},

])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
