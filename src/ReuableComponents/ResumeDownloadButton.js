
import React, { useState } from "react";
import { FiDownload } from "react-icons/fi";
import "./ResumeDownloadButton.css";

const ResumeDownloadButton = () => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    if (downloading) return;

    setDownloading(true);

    const files = [
      {
        path: "/JuberKhan.pdf",
        name: "Juber_Khan_Fullstack_Developer.pdf",
        signature: "%PDF",
      },
      {
        path: "/JuberKhan.docx",
        name: "Juber_Khan_Fullstack_Developer.docx",
        signature: "PK",
      },
    ];

    try {
      for (const file of files) {
        const response = await fetch(file.path, { cache: "no-store" });

        if (!response.ok) continue;

        const blob = await response.blob();

        // Reject missing-file fallback pages and empty files.
        if (blob.size === 0 || blob.type.includes("text/html")) {
          continue;
        }

        // Validate the file format so an HTML page isn't downloaded as a PDF.
        const bytes = new Uint8Array(
          await blob.slice(0, 4).arrayBuffer()
        );

        const header = String.fromCharCode(...bytes);
        const valid =
          file.signature === "%PDF"
            ? header.startsWith("%PDF")
            : header.startsWith("PK");

        if (!valid) continue;

        const objectUrl = URL.createObjectURL(blob);
        const link = document.createElement("a");

        link.href = objectUrl;
        link.download = file.name;

        document.body.appendChild(link);
        link.click();
        link.remove();

        // Revoke after the browser has had time to start the download.
        window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1500);

        return;
      }

      alert(
        "Resume file not found. Check that JuberKhan.pdf or JuberKhan.docx exists inside your public folder."
      );
    } catch (error) {
      console.error("Resume download failed:", error);
      alert("Could not download your resume. Please try again.");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <button
      type="button"
      className="resume-button"
      onClick={handleDownload}
      disabled={downloading}
    >
      <FiDownload className="resume-button-icon" aria-hidden="true" />
      <span>{downloading ? "Preparing Resume..." : "Download Resume"}</span>
    </button>
  );
};

export default ResumeDownloadButton;
