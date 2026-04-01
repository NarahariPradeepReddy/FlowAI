export default function Trust() {
  return (
    <section style={styles.section}>
      <div className="container">

        <p style={styles.text}>
          Trusted by <span style={styles.highlight}>10,000+</span> creators and teams
        </p>

        <div style={styles.logos}>
          <span>Google</span>
          <span>Microsoft</span>
          <span>Amazon</span>
          <span>Notion</span>
        </div>

      </div>
    </section>
  );
}

const styles = {
  section: {
    textAlign: "center",
    padding: "60px 20px",
    background: "#0f172a",
  },
  text: {
    fontSize: "16px",
    opacity: 0.7,
    marginBottom: "20px",
  },
  highlight: {
    color: "#6366f1",
    fontWeight: "600",
  },
  logos: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    fontWeight: "600",
    opacity: 0.6,
    flexWrap: "wrap",
  },
};