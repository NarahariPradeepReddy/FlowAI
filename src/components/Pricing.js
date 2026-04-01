export default function Pricing() {
  return (
    <div style={styles.container}>
      <h2 style={{ textAlign: "center", marginBottom: "40px",  fontWeight: 600 }}>
        Pricing
      </h2>
      <h3>₹499/month</h3>
    </div>
  );
}

const styles = {
  container: {
    padding: "60px 20px",
    textAlign: "center",
  },
};