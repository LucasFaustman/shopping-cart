import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import BestSellers from "../components/BestSellers"
import Footer from "../components/Footer"
import ProductPoints from "../components/ProductPoints"
import ProductFeature from "../components/ProductFeature"
import Testimonials from "../components/Testimonials"
import CallToAction from "../components/CallToAction"

export default function Home({products}) {
    return (
        <div className="h-100">
            <Navbar />
            <Hero />
            <BestSellers products={products} />
            <ProductPoints />
            <ProductFeature />
            <Testimonials />
            <CallToAction />
            <Footer />
        </div>
    )
}