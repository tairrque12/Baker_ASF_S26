import { Link } from 'react-router-dom'

import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarToggler,
    Collapse
} from 'reactstrap'
import { useState } from 'react'

function SiteNavbar({ cart }) {

    const [isOpen, setIsOpen] = useState(false)

    // Calculate total items in cart for the badge
    const cartCount = cart.reduce(function(total, item) {
        return total + item.quantity
    }, 0)

    return (
        <Navbar expand="lg" dark id="mainNav">
            <NavbarBrand tag={Link} to="/">
                <img
                    src="/images/Steam&SiliconLogo.png"
                    alt="Steam and Silicon Logo"
                    height="50"
                />
                <span>Steam & Silicon</span>
            </NavbarBrand>

            <NavbarToggler onClick={() => setIsOpen(!isOpen)} />

            <Collapse isOpen={isOpen} navbar>
                <Nav className="ms-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/menu">Menu</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/reservations">Reservations</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/cart">
                            <i className="fa-solid fa-cart-shopping"></i>
                            <span className="cart-badge">{cartCount}</span>
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default SiteNavbar