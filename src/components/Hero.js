import { motion } from "framer-motion";
import { Button } from "@mui/material";

export default function Hero() {
  return (
    <section style={styles.hero}>
      <div className="container">
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={styles.title}
        >
          Build Faster with AI-Powered Productivity
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={styles.subtitle}
        >
          Automate your workflow, collaborate smarter, and achieve more.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{ marginTop: "30px" }}
        >
          <Button variant="contained">Get Started</Button>
        </motion.div>

      </div>
    </section>
  );
}

const styles = {
  hero: {
    textAlign: "center",
    padding: "120px 20px",
    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
  },
  title: {
    fontSize: "56px",
    fontWeight: 700,
  },
  subtitle: {
    fontSize: "20px",
    marginTop: "20px",
    opacity: 0.9,
  },
  primaryBtn: {
    marginRight: "15px",
    background: "#fff",
    color: "#000",
  },
  secondaryBtn: {
    color: "#fff",
    borderColor: "#fff",
  },
};