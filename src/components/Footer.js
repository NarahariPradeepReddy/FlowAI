import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div className="container">

        {/* Top Section */}
        <div style={styles.top}>
          <h3 style={styles.logo}>FlowAI</h3>

          <div style={styles.links}>
            <span>Features</span>
            <span>Pricing</span>
            <span>Contact</span>
          </div>
        </div>

        {/* Social Icons */}
        <div style={styles.social}>
          <a
            href="https://github.com/NarahariPradeepReddy"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          {/* <a
            href="https://linkedin.com/in/YOUR_PROFILE"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a> */}
        </div>

        {/* Bottom */}
        <div style={styles.bottom}>
          <p>© 2026 FlowAI. Built by Pradeep Kumar Reddy.</p>
        </div>

      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#020617",
    padding: "40px 20px",
    marginTop: "60px",
  },
  top: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: "20px",
  },
  logo: {
    fontWeight: "600",
    fontSize: "18px",
  },
  links: {
    display: "flex",
    gap: "20px",
    opacity: 0.7,
  },
  social: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    fontSize: "20px",
    marginBottom: "15px",
  },
  bottom: {
    textAlign: "center",
    opacity: 0.5,
    fontSize: "14px",
  },
};