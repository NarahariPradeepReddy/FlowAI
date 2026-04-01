export default function Testimonials() {
  const data = [
    {
      name: "Rahul Sharma",
      text: "This tool transformed how I manage my work!",
    },
    {
      name: "Anjali Verma",
      text: "Clean UI and super easy to use.",
    },
  ];

  return (
    <section style={{ background: "#0f172a" }}>
      <div className="container">
        <h2 style={{ textAlign: "center", marginBottom: "40px",  fontWeight: 600 }}>
          What Users Say
        </h2>

        <div style={styles.grid}>
          {data.map((item, i) => (
            <div key={i} style={styles.card}>
              <p>"{item.text}"</p>
              <h4 style={{ marginTop: "15px" }}>{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
    marginTop: "40px",
  },
  card: {
    padding: "25px",
    borderRadius: "16px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
  },
};