"use client";

import React, { useState } from "react";
import { FaReact } from "react-icons/fa";
import { CSSProperties } from "react";

export default function LandingPage() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>WE DO BE TESTING <FaReact size={30} color="#61DAFB" /></h1>
        <p>PARAGRAPH</p>
      </header>

      <section style={styles.section}>
        <h2>Interactive Counter</h2>
        <p>Click the button to increase the count.</p>
        <button style={styles.button} onClick={() => setCount(count + 1)}>
          Count: {count}
        </button>
      </section>

      <footer style={styles.footer}>
        <p>AAAAAAAAAAAAAAAAAAAAA</p>
      </footer>
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  container: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  },
  header: {
    backgroundColor: "#282c34",
    color: "white",
    padding: "20px",
    borderRadius: "8px",
  },
  section: {
    margin: "20px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
  },
  button: {
    backgroundColor: "#61DAFB",
    border: "none",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "5px",
  },
  footer: {
    marginTop: "20px",
    fontSize: "14px",
  },
};
