import React from "react";
import { Link } from "react-router-dom";
import "./MyCv.css";

function MyCv() {
  const cvUrl = `${process.env.PUBLIC_URL}/John-Connolly-CV.pdf`;

  return (
    <main className="cv-page">
      <header className="cv-topbar">
        <Link to="/" className="cv-back">← Back to Portfolio</Link>

        <div className="cv-actions">
          <a
            href={cvUrl}
            target="_blank"
            rel="noreferrer"
            className="cv-btn"
          >
            View PDF
          </a>

          <a
            href={cvUrl}
            download
            className="cv-btn primary"
          >
            Download PDF
          </a>
        </div>
      </header>

      <section className="cv-card">
        <div className="cv-card-head">
          <h1>Curriculum Vitae</h1>
          <p>Scroll to preview or download the PDF</p>
        </div>

        <div className="cv-preview">
          <iframe
            src={cvUrl}
            title="John Connolly CV"
            className="cv-iframe"
          />
        </div>
      </section>
    </main>
  );
}

export default MyCv;
