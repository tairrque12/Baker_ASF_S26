import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import HomePage from './pages/LandingPage.jsx'
import MenuPage from './pages/MenuPage.jsx'
import CartPage from './pages/CartPage.jsx'
import ReservationsPage from './pages/ReservationPage.jsx'

function App() {

    // Cart state lives here — passed down to pages that need it
    const [cart, setCart] = useState([])

    // Add item to cart or increase quantity if already exists
    function addToCart(item, quantity) {
        setCart(function(prevCart) {
            const existing = prevCart.find(function(cartItem) {
                return cartItem.id === item.id
            })

            if (existing) {
                return prevCart.map(function(cartItem) {
                    if (cartItem.id === item.id) {
                        return {
                            ...cartItem,
                            quantity: Math.min(cartItem.quantity + quantity, 5)
                        }
                    }
                    return cartItem
                })
            }

            return [...prevCart, {
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: quantity
            }]
        })
    }

    // Clear the entire cart
    function clearCart() {
        setCart([])
    }

    return (
        <>
            <Navbar cart={cart} />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/menu" element={<MenuPage addToCart={addToCart} />} />
                <Route path="/cart" element={<CartPage cart={cart} clearCart={clearCart} />} />
                <Route path="/reservations" element={<ReservationsPage />} />
            </Routes>
        </>
    )
}

export default App