export default function HowItWorks() {
  return (
    <div style={styles.container}>
      <h2 style={{ textAlign: "center", marginBottom: "40px",  fontWeight: 600 }}>
        How It Works</h2>
      <p>1. Connect your tools</p>
      <p>2. Automate workflows</p>
      <p>3. Track productivity</p>
    </div>
  );
}

const styles = {
  container: {
    padding: "60px 20px",
    textAlign: "center",
  },
};