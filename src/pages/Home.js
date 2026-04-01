import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CTA from '../components/CTA';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';

export default function Home () {
 return (
    <div>
        <Navbar />
        <Hero />
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