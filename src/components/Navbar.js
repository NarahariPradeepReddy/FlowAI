import { Button } from "@mui/material";

export default function Navbar() {
  return (
    <div style={styles.nav}>
      <div style={styles.logo}>FlowAI</div>

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
};