import Navbar from '../components/Navbar.jsx'
import Hero from '../sections/home/Hero.jsx'
import PopularProduct from '../sections/home/PopularProduct.jsx'
import SuperQuality from '../sections/home/SuperQuality.jsx'
import Services from '../sections/home/Services.jsx'
import SpecialOffer from '../sections/home/SpecialOffer.jsx'
import CustomerReviews from '../sections/home/CustomerReviews.jsx'
import Subscribe from '../sections/home/Subscribe.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <PopularProduct />
            <SuperQuality />
            <Services />
            <SpecialOffer />
            <CustomerReviews />
            <Subscribe />
            <Footer />
        </main>
    )
}

export default Home