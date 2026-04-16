import { useState } from 'react'
import MENU_ITEMS from '../data/menuData.js'
import MenuItemCard from '../components/MenuItemCard.jsx'

function MenuPage({ addToCart }) {

    const [filter, setFilter] = useState('All')

    const filteredItems = MENU_ITEMS.filter(function(item) {
        if (filter === 'All') return true
        return item.category === filter
    })

    return (
        <>
            {/* MENU INTRO */}
            <section className="menu-intro">
                <h1>Retro-Futuristic Menu</h1>
                <p>Inspired by American diner classics, we offer a full menu of quick bites
                    and full meals, all made with high-quality ingredients.</p>
            </section>

            {/* RESTAURANT PICTURE */}
            <section className="restaurant-picture">
                <img src="/images/food.png" alt="Futuristic Steam and Silicon Diner" />
            </section>

            {/* CATEGORY FILTER */}
            <div className="category-links" id="filter-buttons">
                {['All', 'Breakfast', 'Lunch', 'Dinner'].map(function(category) {
                    return (
                        <button
                            key={category}
                            className={`btn-filter ${filter === category ? 'active' : ''}`}
                            onClick={() => setFilter(category)}
                        >
                            {category}
                        </button>
                    )
                })}
            </div>

            {/* MENU CARDS */}
            <div className="menu-grid">
                {filteredItems.map(function(item) {
                    return (
                        <MenuItemCard
                            key={item.id}
                            item={item}
                            addToCart={addToCart}
                        />
                    )
                })}
            </div>

            {/* MENU TABLE */}
            <section className="menu-section">
                <table className="menu-table">
                    <caption>Steam & Silicon — Full Menu</caption>
                    <thead>
                    <tr>
                        <th>Food</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Category</th>
                    </tr>
                    </thead>
                    <tbody>
                    {MENU_ITEMS.map(function(item) {
                        return (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>${item.price.toFixed(2)}</td>
                                <td>{item.category}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </section>
        </>
    )
}

export default MenuPage