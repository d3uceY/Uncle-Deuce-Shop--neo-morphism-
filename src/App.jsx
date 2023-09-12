import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Shop from './pages/shop/shop'
import Cart from './pages/cart/Cart'
import { ShopContextProvider } from './context/Shopcontext'

function App() {
  return (
    <ShopContextProvider>
      <div className="">
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Router>
      </div>
    </ShopContextProvider>
  )
}

export default App
