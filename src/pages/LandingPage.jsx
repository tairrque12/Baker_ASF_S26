import { Link } from 'react-router-dom'

function LandingPage() {
    return (
        <>
            {/* HERO SECTION */}
            <section className="hero">
                <img src="/images/HERO.png" alt="Steam and Silicon futuristic diner at night" />
                <div className="hero-text">
                    <h1>Steam & Silicon</h1>
                    <p>Eat. Charge. Watch. Delivered.</p>
                    <p>Open 24/7</p>
                    <Link to="/reservations" className="btn">Reserve Your Experience</Link>
                </div>
            </section>

            {/* STATS BAR */}
            <section className="stats-bar">
                <div className="stat">
                    <i className="fa-solid fa-utensils"></i>
                    <span className="stat-number">200+</span>
                    <span className="stat-label">Seats For Dining</span>
                </div>
                <div className="stat">
                    <i className="fa-solid fa-plug"></i>
                    <span className="stat-number">60</span>
                    <span className="stat-label">EV Charging Stalls</span>
                </div>
                <div className="stat">
                    <i className="fa-solid fa-film"></i>
                    <span className="stat-number">2</span>
                    <span className="stat-label">Cinema MegaScreens</span>
                </div>
                <div className="stat">
                    <i className="fa-solid fa-truck-fast"></i>
                    <span className="stat-number">24/7</span>
                    <span className="stat-label">Drone Delivery</span>
                </div>
                <div className="stat">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span className="stat-number">NEW</span>
                    <span className="stat-label">Order Online</span>
                </div>
            </section>

            {/* FEATURE BLOCKS */}
            <section className="feature-block">
                <img src="/images/Charging.png" alt="Electric vehicles charging at Steam and Silicon" />
                <div className="feature-text">
                    <h2>Now Charging</h2>
                    <p>Pull in and power up at one of our 60 ultra-fast EV charging stalls.
                        Solar canopies shade every bay while our robot staff takes your order
                        straight from your driver-side window. Your car charges while you eat.</p>
                </div>
            </section>

            <section className="feature-block reverse">
                <img src="/images/Dining&Serving.png" alt="Futuristic dining room at Steam and Silicon" />
                <div className="feature-text">
                    <h2>Now Serving</h2>
                    <p>The two-story restaurant offers 24/7 dining, so you can grab a meal
                        any time you need to charge. Our upper level Skypad allows you to enjoy
                        views of the city or the megascreens while you recharge.</p>
                </div>
            </section>

            <section className="feature-block">
                <img src="/images/movie.png" alt="Outdoor Cinema MegaScreen at Steam and Silicon" />
                <div className="feature-text">
                    <h2>Now Watching</h2>
                    <p>Watch movies on two massive 66-foot LED megascreens from inside your car,
                        our rooftop skypad lounge, or the main dining room.
                        Films run around the clock every night of the week.</p>
                </div>
            </section>

            <section className="feature-block reverse">
                <video autoPlay muted loop>
                    <source src="/videos/OrderDelivery.mp4" type="video/mp4" />
                </video>
                <div className="feature-text">
                    <h2>Now Delivering</h2>
                    <p>Can't make it in? Our autonomous drone fleet delivers anywhere within
                        a 50-mile radius. Order online, track your drone in real time, and
                        have hot food at your door in under 30 minutes. Available 24/7.</p>
                </div>
            </section>

            <section className="feature-block">
                <img src="/images/CompanyPhoto.png" alt="Steam and Silicon robot crew and drone fleet" />
                <div className="feature-text">
                    <h2>Meet Our Crew</h2>
                    <p>No humans required. Our fully autonomous robot staff and drone fleet
                        work around the clock to make sure every meal is perfect, every order
                        is on time, and every guest leaves satisfied.</p>
                </div>
            </section>

            {/* MENU PROMO */}
            <section className="menu-promo">
                <h2>Retro-Futuristic Menu</h2>
                <p>Inspired by American diner classics, we offer a full menu of quick bites
                    and full meals, all made with high-quality ingredients.</p>
                <Link to="/menu" className="btn">View Menu</Link>
            </section>
        </>
    )
}

export default LandingPage;