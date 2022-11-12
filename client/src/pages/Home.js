import Hero from "../components/Landing-Hero"
import Navbar from "../components/Navbar"
import BestSellers from "../components/Landing-BestSellers"
import Footer from "../components/Footer"
import ProductPoints from "../components/Landing-ProductPoints"
import ProductFeature from "../components/Landing-ProductFeature"
import Testimonials from "../components/Landing-Testimonials"
import CallToAction from "../components/Landing - CallToAction"

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