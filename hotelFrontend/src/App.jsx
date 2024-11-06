import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import DetailPage from './pages/DetailPage'
import ShopAll from './pages/ShopAll'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Cart from './pages/Cart'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AuthContextProvider } from './Context/Authenticate'
import ProtectedRoute from './pages/ProtectedRoute'

const App = () => {
  // const router = createBrowserRouter([
  //   {path : "/",
  //     element : <Home />,
  //   },
  //   {path : "/detail/:slug",
  //     element : <DetailPage />,
  //   },
  //   {path : "/shop",
  //     element : <ShopAll />,
  //   },
  //   {path : "/cart",
  //     element : <Cart />,
  //   },
  //   {path : "/signup",
  //     element : <Signup />,
  //   },
  //   {path : "/login",
  //     element : <Login />,
  //   },
  // ])


  
  return (
      <Router>
    <AuthContextProvider>
      {/* <RouterProvider router={router}/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:slug" element={<DetailPage />} />
          <Route path="/shop" element={<ShopAll />} />
          <Route path="/cart" element={<ProtectedRoute>
            <Cart />
          </ProtectedRoute>} />
          <Route path="/cartTest" element={<ProtectedRoute>
            <Signup />
          </ProtectedRoute>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </AuthContextProvider>
      </Router>
  )
}

export default App
