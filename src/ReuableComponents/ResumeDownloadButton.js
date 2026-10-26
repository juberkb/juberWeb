
import React from "react";
import { FiDownload } from "react-icons/fi";
import "./ResumeDownloadButton.css";

const ResumeDownloadButton = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `${process.env.PUBLIC_URL || ""}/JuberKhan.pdf`;
    link.download = "Juber_Khan_Frontend_Developer.pdf";

    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <button
      type="button"
      className="resume-button"
      onClick={handleDownload}
    >
      <FiDownload className="resume-button-icon" aria-hidden="true" />
      <span>Download Resume</span>
    </button>
  );
};

export default ResumeDownloadButton;
