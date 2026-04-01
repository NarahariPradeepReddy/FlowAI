import { Button } from "@mui/material";
import Logo from "../assets/Logo.png";

export default function Navbar() {
  return (
    <div style={styles.nav}>
      <div style={styles.logoContainer}>
        <img src={Logo} alt="FlowAI Logo" style={styles.logoImg} />
        <span style={styles.logoText}>FlowAI</span>
      </div>

      <div style={styles.links}>
        <span>Features</span>
        <span>Pricing</span>
        <span>About</span>
      </div>

      <Button variant="contained" size="small" style={styles.btn}>
        Get Started
      </Button>
    </div>
  );
}

const styles = {
  nav: {
    position: "sticky",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    background: "rgba(15, 23, 42, 0.8)",
    backdropFilter: "blur(10px)",
    zIndex: 1000,
  },
  logo: {
    fontWeight: "bold",
    fontSize: "20px",
  },
  links: {
    display: "flex",
    gap: "25px",
  },
  btn: {
    background: "#6366f1",
  },
  logoContainer: {
  display: "flex",
  alignItems: "center",
  gap: "10px",
},

logoImg: {
  width: "32px",
  height: "32px",
  filter: "drop-shadow(0 0 8px rgba(99,102,241,0.6))",
},

logoText: {
  fontWeight: "600",
  fontSize: "18px",
},
};
