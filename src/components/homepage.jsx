import HeroBG from '../assets/hero-parque.jpg';
import Barista from '../assets/barista1.jpg'
import mocha from '../assets/mocha_frap.jpg';
import salt from '../assets/sea_salt.jpg';
import matcha from "../assets/matcha.jpg";
import outside from '../assets/parque_outside.jpg';
import { ArrowRight } from 'lucide-react';
import { Coffee, Leaf, Croissant } from "lucide-react";
import { Sandwich } from 'lucide-react';
import { Wifi } from 'lucide-react';
import { EarOff } from 'lucide-react';
import { Music } from 'lucide-react';
import { Plug } from 'lucide-react';
import './hero.css';

const productCards = [
  {
    image:  mocha,
    title: 'Mocha Frappuccino',
    description: 'A delicious blend of mocha and frappucino, perfect for a refreshing treat. Made with our signature espresso and whipped cream.',
    price: '₱150.00'
  },
  {
    image:  matcha,
    title: 'Matcha Latte',
    description: 'Smooth, earthy matcha whisked with velvety steamed milk and a hint of vanilla. A perfect way to start your day.',
    price: '₱140.00'
  },
  {
    image:  salt,
    title: 'Sea Salt Caramel Latte',
    description: 'A delightful blend of sea salt and caramel, topped with steamed milk and a shot of espresso.',
    price: '₱160.00'
  }
]

const coffeeMenu = [
  {
    coffeeName: 'Espresso',
    Regular: '₱145.00',
    Upsized: '₱165.00',
  },
  {
    coffeeName: 'Americano',
    Regular: '₱110.00',
    Upsized: '₱120.00',
  },
  {
    coffeeName: 'Spanish Latte',
    Regular: '₱155.00',
    Upsized: '₱165.00',
  },
  {
    coffeeName: 'Cappuccino',
    Regular: '₱135.00',
    Upsized: '₱145.00',
  }
]

const sandwichMenu = [
  {
    sandwichName: 'Tuna Sandwich',
    sandwhichPrice: '₱175.00',
  },
  {
    sandwichName: 'Clubhouse',
    sandwhichPrice: '₱200.00',
  },
  {
    sandwichName: 'Grilled Cheese',
    sandwhichPrice: '₱155.00',
  },
  {
    sandwichName: 'Ham & Cheese Bagel',
    sandwhichPrice: '₱160.00',
  },
]

export function Hero() {
    return(
    <div className="hero" style={{ 
        // 2. Pass the imported variable into a template literal
        backgroundImage:  `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%), url(${HeroBG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100dvh'
    }}>
        <div className="hero-contents">
            <div className="leaf">
                <span className="upper-heading"><Leaf />Specialty coffee · By the road</span>
            </div>
            <div className="heading">
                <p className="heading-text">Slow Mornings,</p>
                <p className="sub-heading-text">good coffee.</p>
            </div>
                <span className="lower-heading">We are a specialty coffee shop located in the heart of the town. <br />We serve the best coffee in town, made with love and care.</span>
            <div className="hero-buttons">
                <button className="order-button">Order Now <ArrowRight className="arrowRight" /></button>
                <button className="menu-button">Check our Menu</button>
            </div>
        </div>
</div>

    );
}

export function HomepageContents(){
      {/* Value strip */}
    return(
    <main>

      <section className="border-b border-border/60 mt-8">
        <div className="container-page grid gap-8 py-16 md:grid-cols-3">
          {[
            {
              icon: Coffee,
              title: "House-roasted",
              body: "Single-origin beans, roasted weekly two blocks away.",
            },
            {
              icon: Croissant,
              title: "Baked at dawn",
              body: "Croissants, sourdough and seasonal galettes made fresh every morning.",
            },
            {
              icon: Leaf,
              title: "Locally sourced",
              body: "Milk from Meadow Creek. Produce from the farmers' market.",
            },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                <Icon className="size-5" />
              </div>
              <div>
                <h3 className="font-display text-xl">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page grid gap-8 py-16 md:grid-cols-2">
        <div className="flex flex-col justify-center gap-4">
          <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl"> 
            Our Story
          </h2>

          <p className="text-muted-foreground mt-4 text-lg sm:text-xl">
            We are a specialty coffee shop located in the heart of the town. We serve the best coffee in town, made with love and care. <br /><br />
            Our beans are sourced from the best farms around the world and roasted to perfection. We also offer a variety of pastries and baked goods, all made fresh daily.
          </p>

          <div className="testimonials">
            <p><span className="testimonial-orange">100%</span> Freshly Brewed</p>
            <p><span className="testimonial-orange">100%</span> Freshly Baked</p>
          </div>

          <button className="order-button">
            Read More <ArrowRight className="arrowRight" />
          </button>

        </div>
        <div className="flex items-center justify-center">
          <img src={Barista} alt="Barista" className="rounded-lg shadow-lg" />
        </div>
      </section>

      <section className="best-products">
        <div className="bg-image">
          <header className="popular-header">
            <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl text-center mb-5">
              Try Our Best Sellers
            </h2>

            <p className="text-muted-foreground text-center mb-5">
              Our best-selling products that our customers love the most. 
              Experience the taste of our specialty coffee and baked goods.
            </p>
          </header>

          <ul className="product-cards">
            {productCards.map((product) => (
              <li key={product.title} className="product-card">
                <article>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="product-image"
                  />

                  <h3 className="product-title">{product.title}</h3>

                  <p className="product-description">
                    {product.description}
                  </p>

                  <div className="price-cta">
                    <p className="product-price">{product.price}</p>
                    <button className="order-button">
                      Order Now <ArrowRight className="arrowRight" />
                    </button>
                  </div>

                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

     <section className="featured-menu">
        <div className="container-page">
          <header className="featured-header">
            <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl text-center mb-5">
              Featured Menu
            </h2>
            <p className="text-muted-foreground text-center mb-5">
              Check out our featured menu items that are sure to delight your taste buds.
            </p>
          </header>
        </div>

        <div className="menu-containers">
          <div className="coffee-container">
            <div className="coffee-header">
              <h3 className="coffee-title"><Coffee />Coffee</h3>
            </div>

         {coffeeMenu.map((coffee) => (
            <div key={coffee.coffeeName} className="menu-item">
                <p className="menu-item-name">{coffee.coffeeName}</p>

                <div className="menu-item-sizes">
                  <div className="size-block">
                    <span className="size-label">Regular</span>
                    <span className="size-price">{coffee.Regular}</span>
                  </div>
                  <div className="size-block">
                    <span className="size-label">Upsized</span>
                    <span className="size-price">{coffee.Upsized}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="sandwich-container">
            <div className="sandwich-header">
              <h3 className="sandwich-title"><Sandwich />Sandwiches</h3>
            </div>

            {sandwichMenu.map((sandwich) => (
              <div key={sandwich.sandwichName} className="menu-item">
                <p className="menu-item-name">{sandwich.sandwichName}</p>
                <p className="menu-item-price">{sandwich.sandwhichPrice}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="menu-feature-cta">    
          <button className="order-button">
            View Full Menu <ArrowRight className="arrowRight" />
          </button>
        </div>
      </section>

     <section className="our-care">
        <div className="care-content">
          <div className="care-header">
            <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-6xl text-left mb-5">
              Good Things, <br />Made for You <span className="text-terracotta">with Care </span>
            </h2>
            <p className="text-muted-foreground text-left mb-5 border-b pb-5">
              We are committed to providing our customers with the best coffee and baked goods. Our team of baristas and bakers work hard to ensure that every cup of coffee and every pastry is made with love and care.
            </p>
          </div>

          <div className="care-icons">
            <div className="care-icon">
              <Wifi className="care-icon-svg" />
              <p>Free WiFi</p>
            </div>
            <div className="care-icon">
              <EarOff className="care-icon-svg" />
              <p>Quiet Environment</p>
            </div>
            <div className="care-icon">
              <Music className="care-icon-svg" />
              <p>Background Music</p>
            </div>
            <div className="care-icon">
              <Plug className="care-icon-svg" />
              <p>Power Outlets</p>
            </div>
          </div>
        </div>

        <div className="parque-pic">
          <img src={outside} alt="Parque Outside" className="rounded-lg shadow-lg" />
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <h2>&copy; PARQUE CAFE</h2>
          <p>The go-to cafe for great coffee and baked goods of everyone in town.</p>

          <div className="soc-med">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer"> 
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

          <div className="visit">
            <p>Visit us</p>
            <span>Macabebe, Pampanga</span>
            <button className="visit-button">Other Branches</button>
          </div>

          <div className="navs">
            <p>Quick Links</p>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/menu">Menu</a></li>
              <li><a href="/our-story">Our Story</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
        </div>

      </footer>

    </main>
    );
}

export default Hero;