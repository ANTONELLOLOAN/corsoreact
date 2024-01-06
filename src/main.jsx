import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contatti from './pages/Contatti.jsx'
import About from './pages/About.jsx'
import Cards from './pages/Cards.jsx'
import Card from './pages/Card.jsx'
import CardsChildren from './pages/CardsChildren.jsx'

import store from './redux/store.js'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contatti",
    element: <Contatti />,
  },
  {
    path: "/cards",
    element: <Cards />,
  },
  {
    path: "/cards/:cardID",
    element: <Card />,
  },
  {
    path: "/cards-children",
    element: <CardsChildren />,
    children: [
      {
        path: ":cardID",
        element: <Card />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
