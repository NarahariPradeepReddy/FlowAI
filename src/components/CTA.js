import { Button } from "@mui/material";

export default function CTA() {
  return (
    <section style={styles.cta}>
      <div className="container">
        <h2>Start your AI journey today</h2>
        <p style={{ opacity: 0.8 }}>
          Join thousands boosting productivity
        </p>

        <Button variant="contained" style={styles.btn}>
          Get Started
        </Button>
      </div>
    </section>
  );
}

const styles = {
  cta: {
    textAlign: "center",
    background: "#1e293b",
    padding: "100px 20px",
  },
  btn: {
    marginTop: "20px",
    background: "#6366f1",
  },
};