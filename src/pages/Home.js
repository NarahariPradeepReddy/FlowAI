import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Trust from '../components/Trust';
import Features from '../components/Features';
import CTA from '../components/CTA';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer'

export default function Home () {
 return (
    <div>
        <Navbar />
        <Hero />
        <div style={styles.divider}></div>
        <Trust />
        <div style={styles.divider}></div>
        <Features />
        <div style={styles.divider}></div>
        <HowItWorks />
        <div style={styles.divider}></div>
        <Testimonials />
        <div style={styles.divider}></div>
        <Pricing />
        <div style={styles.divider}></div>
        <CTA />
        <div style={styles.divider}></div>
        <Footer />
    </div>
 )
}

const styles = {
  divider: {
    height: "1px",
    background: "linear-gradient(to right, transparent, #6366f1, transparent)",
    margin: "60px 0",
  },
};