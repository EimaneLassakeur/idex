import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../sections/Hero/Hero";
import Clients from "../../sections/Clients/Clients";
import About from "../../sections/About/About";
import Services from "../../sections/Services/Services";
import Portfolio from "../../sections/Portfolio/Portfolio";
import WhyChoose from "../../sections/WhyChoose/WhyChoose";
import Process from "../../sections/Process/Process";
import Testimonials from "../../sections/Testimonials/Testimonials";
import FAQ from "../../sections/FAQ/FAQ";
import CTA from "../../sections/CTA/CTA";
import Loader from "../../components/Loader/Loader";
import Footer from "../../components/Footer/Footer";
import ScrollTop from "../../components/ScrollTop/ScrollTop";
import Contact from "../../sections/Contact/Contact";

function Home() {

    return (

        <>
            {/* <Loader /> */}

            <Navbar />

            <Hero />

            <Clients />

            <About />

            <Services />

            <Portfolio />

            <WhyChoose />

            <Process />

            <Testimonials />

            <FAQ />

            <CTA />

            <Contact />

            <Footer />

            <ScrollTop />

        </>

    )

}

export default Home;