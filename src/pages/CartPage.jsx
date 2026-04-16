import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap'

function CartPage({ cart, clearCart }) {

    const navigate = useNavigate()
    const [cancelModal, setCancelModal] = useState(false)
    const [thankYouModal, setThankYouModal] = useState(false)

    const TAX_RATE = 0.0825

    const money = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    })

    // Calculate totals
    const subtotal = cart.reduce(function(total, item) {
        return total + (item.price * item.quantity)
    }, 0)

    const tax = subtotal * TAX_RATE
    const finalTotal = subtotal + tax

    // Cancel flow
    function handleConfirmCancel() {
        clearCart()
        setCancelModal(false)
        setThankYouModal(true)
    }

    // Thank you modal closes — redirect to menu
    function handleThankYouClose() {
        setThankYouModal(false)
        navigate('/menu')
    }

    // Submit flow
    function handleSubmit() {
        console.log('Order submitted:', cart)
        clearCart()
        setThankYouModal(true)
    }

    // Empty cart
    if (cart.length === 0) {
        return (
            <section className="reservation-intro">
                <h1>Your Cart</h1>
                <p style={{ color: '#888', marginTop: '2rem', fontSize: '1.2rem' }}>
                    Your cart is empty.
                </p>
                <button
                    onClick={() => navigate('/menu')}
                    style={{
                        marginTop: '1rem',
                        padding: '0.75rem 2rem',
                        backgroundColor: '#00aaff',
                        color: '#fff',
                        border: 'none',
                        fontFamily: "'Rajdhani', sans-serif",
                        fontWeight: '700',
                        fontSize: '0.9rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        borderRadius: '0.2rem'
                    }}
                >
                    Browse Menu
                </button>
            </section>
        )
    }

    return (
        <>
            <section className="reservation-intro">
                <h1>Your Cart</h1>
                <p>Review your order below. All totals are calculated automatically.</p>
            </section>

            <div style={{ maxWidth: '50rem', margin: '2rem auto', padding: '0 2rem' }}>

                {/* CART ITEMS TABLE */}
                <table className="menu-table" style={{ marginBottom: '2rem' }}>
                    <caption>Order Summary</caption>
                    <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Line Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    {cart.map(function(item) {
                        return (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{money.format(item.price)}</td>
                                <td>{item.quantity}</td>
                                <td>{money.format(item.price * item.quantity)}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>

                {/* TOTALS TABLE */}
                <table className="menu-table">
                    <tbody>
                    <tr>
                        <td style={{ color: '#ffffff', fontFamily: 'Rajdhani, sans-serif' }}>Subtotal</td>
                        <td></td>
                        <td></td>
                        <td>{money.format(subtotal)}</td>
                    </tr>
                    <tr>
                        <td style={{ color: '#ffffff', fontFamily: 'Rajdhani, sans-serif' }}>Tax (8.25%)</td>
                        <td></td>
                        <td></td>
                        <td>{money.format(tax)}</td>
                    </tr>
                    <tr>
                        <td style={{ color: '#00aaff', fontFamily: 'Rajdhani, sans-serif', fontWeight: '700', fontSize: '1.1rem' }}>Total</td>
                        <td></td>
                        <td></td>
                        <td style={{ color: '#00aaff', fontWeight: '700' }}>{money.format(finalTotal)}</td>
                    </tr>
                    </tbody>
                </table>

                {/* BUTTONS */}
                <div style={{ marginTop: '2rem' }}>
                    <button
                        onClick={() => setCancelModal(true)}
                        style={{
                            backgroundColor: 'transparent',
                            color: '#ff4d4d',
                            border: '2px solid #ff4d4d',
                            padding: '0.75rem 2rem',
                            fontFamily: "'Rajdhani', sans-serif",
                            fontSize: '0.85rem',
                            fontWeight: '700',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            cursor: 'pointer',
                            marginRight: '0.5rem',
                            borderRadius: '0.2rem'
                        }}
                    >
                        Cancel Order
                    </button>
                    <button
                        onClick={handleSubmit}
                        style={{
                            backgroundColor: '#00aaff',
                            color: '#ffffff',
                            border: '2px solid #00aaff',
                            padding: '0.75rem 2rem',
                            fontFamily: "'Rajdhani', sans-serif",
                            fontSize: '0.85rem',
                            fontWeight: '700',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            cursor: 'pointer',
                            borderRadius: '0.2rem'
                        }}
                    >
                        Submit Order
                    </button>
                </div>
            </div>

            {/* CANCEL CONFIRMATION MODAL */}
            <Modal isOpen={cancelModal} toggle={() => setCancelModal(false)} centered>
                <ModalHeader
                    toggle={() => setCancelModal(false)}
                    style={{ background: '#1a1a1a', color: '#ffffff', borderColor: '#2a2a2a' }}
                >
                    Cancel Order
                </ModalHeader>
                <ModalBody style={{ background: '#1a1a1a', color: '#e0e0e0' }}>
                    Are you sure you want to cancel your order?
                </ModalBody>
                <ModalFooter style={{ background: '#1a1a1a', borderColor: '#2a2a2a' }}>
                    <button
                        onClick={handleConfirmCancel}
                        style={{
                            backgroundColor: 'transparent',
                            color: '#ff4d4d',
                            border: '2px solid #ff4d4d',
                            padding: '0.5rem 1.5rem',
                            fontFamily: "'Rajdhani', sans-serif",
                            fontWeight: '700',
                            cursor: 'pointer',
                            borderRadius: '0.2rem'
                        }}
                    >
                        Yes, Cancel
                    </button>
                    <button
                        onClick={() => setCancelModal(false)}
                        style={{
                            backgroundColor: '#00aaff',
                            color: '#ffffff',
                            border: '2px solid #00aaff',
                            padding: '0.5rem 1.5rem',
                            fontFamily: "'Rajdhani', sans-serif",
                            fontWeight: '700',
                            cursor: 'pointer',
                            borderRadius: '0.2rem'
                        }}
                    >
                        No, Keep Order
                    </button>
                </ModalFooter>
            </Modal>

            {/* THANK YOU MODAL — shows after both submit and cancel confirm */}
            <Modal isOpen={thankYouModal} toggle={handleThankYouClose} centered>
                <ModalHeader
                    toggle={handleThankYouClose}
                    style={{ background: '#1a1a1a', color: '#ffffff', borderColor: '#2a2a2a' }}
                >
                    Thank You, Jon-Mikel!
                </ModalHeader>
                <ModalBody style={{ background: '#1a1a1a', color: '#e0e0e0' }}>
                    <p>Your order has been received. Our robot crew is on it!</p>
                    <p style={{ color: '#888', marginTop: '0.5rem' }}>
                        Redirecting you to the menu...
                    </p>
                </ModalBody>
                <ModalFooter style={{ background: '#1a1a1a', borderColor: '#2a2a2a' }}>
                    <button
                        onClick={handleThankYouClose}
                        style={{
                            backgroundColor: '#00aaff',
                            color: '#ffffff',
                            border: '2px solid #00aaff',
                            padding: '0.5rem 1.5rem',
                            fontFamily: "'Rajdhani', sans-serif",
                            fontWeight: '700',
                            cursor: 'pointer',
                            borderRadius: '0.2rem'
                        }}
                    >
                        Close
                    </button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default CartPage