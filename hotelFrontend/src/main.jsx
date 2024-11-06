import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FoodListContextProvider } from './Context/FoodListContext.jsx'
import { FoodFilterContextProvider } from './Context/FoodFilterContext.jsx'
import { AuthContextProvider } from './Context/Authenticate.jsx'
import { CartContextProvider } from './Context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FoodListContextProvider>
      <FoodFilterContextProvider>
        <AuthContextProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </AuthContextProvider>
      </FoodFilterContextProvider>
    </FoodListContextProvider>
  </StrictMode>,
)
