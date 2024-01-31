import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from "./components/About"
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from "./components/Error"
import Body from "./components/Body";
import RestaurantStore from "./components/RestaurantStore"

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantStore />
      }
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <RouterProvider router={appRouter}/>
    </ChakraProvider>
);

