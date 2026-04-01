import { FaRobot, FaChartLine, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Features() {
  const data = [
    { title: "AI Automation", desc: "Automate repetitive tasks" },
    { title: "Smart Insights", desc: "Get real-time analytics" },
    { title: "Collaboration", desc: "Work seamlessly with team" },
  ];

  const icons = [FaRobot, FaChartLine, FaUsers];

  return (
    <section>
      <div className="container">
        <h2 style={{ textAlign: "center", marginBottom: "40px",  fontWeight: 600 }}>
          Features
        </h2>

        <div style={styles.grid}>
          {data.map((item, i) => {
  const Icon = icons[i];

  return (
    <motion.div
      key={i}
      style={styles.card}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.2 }}
      viewport={{ once: true }}
    >
      <div style={styles.icon}>
        <Icon />
      </div>
      <h3>{item.title}</h3>
      <p>{item.desc}</p>
    </motion.div>
  );
})}
        </div>
      </div>
    </section>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  card: {
    padding: "30px",
    borderRadius: "16px",
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.1)",
    textAlign: "center",
  },
  icon: {
    fontSize: "30px",
    marginBottom: "10px",
    color: "#6366f1",
  },
};