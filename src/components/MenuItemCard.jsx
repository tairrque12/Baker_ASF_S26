import { useState } from 'react'

function MenuItemCard({ item, addToCart }) {

    const [quantity, setQuantity] = useState(1)
    const [added, setAdded] = useState(false)

    const money = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    })

    function handleAddToCart() {
        addToCart(item, quantity)
        setAdded(true)
        setTimeout(function() {
            setAdded(false)
        }, 1500)
    }

    return (
        <div className="menu-card">
            <img src={`/${item.image}`} alt={item.name} />
            <p>{item.name}</p>
            <p>{money.format(item.price)}</p>
            <div className="card-actions">
                <select
                    className="quantity-select"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    style={{
                        width: '4.5rem',
                        padding: '0.45rem 0.5rem',
                        fontSize: '0.85rem',
                        background: '#141414',
                        border: '1px solid #1e1e1e',
                        color: '#e0e0e0',
                        borderRadius: '0.2rem'
                    }}
                >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
                <button
                    className="add-to-cart-btn"
                    onClick={handleAddToCart}
                    style={{
                        flex: 1,
                        backgroundColor: '#00aaff',
                        color: '#ffffff',
                        border: 'none',
                        padding: '0.5rem 0.75rem',
                        fontFamily: "'Rajdhani', sans-serif",
                        fontSize: '0.8rem',
                        fontWeight: '700',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        borderRadius: '0.2rem'
                    }}
                >
                    {added ? 'Added!' : 'Add to Cart'}
                </button>
            </div>
        </div>
    )
}

export default MenuItemCard