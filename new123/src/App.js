import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css';
import './Components/Nav/Navbar'
import Result from './Components/Result';
import Navbar from './Components/Nav/Navbar';
import Home from './Components/Home'
import Quiz from './Components/quiz/quiz';
import LoginSignup from './Components/LoginSignup/LoginSignup'
function App() {
  const router=createBrowserRouter([{
    path:'/',
    element:<Navbar/>,
    element: <Home/>
  },
  {
    path: '/result',
    element: <Result/>
  },
  {
    path:'/quiz',
    
    element: <Quiz/>
  },
  {
    path:'/signup',
    element: <LoginSignup/>
  }
])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;