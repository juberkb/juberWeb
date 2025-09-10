import React from 'react';
import './ResumeDownloadButton.css'; // Import the CSS file

const ResumeDownloadButton = () => {
  const handleDownload = () => {
    // Construct the path to your resume file in the public directory
    const resumePath = process.env.PUBLIC_URL + 'JuberKhan.pdf';

    // Create a temporary anchor element to trigger the download
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Juber khan Frontend developer.pdf'; // Rename the downloaded file if needed
    link.click();
  };

  return (
    <button className="resume-button" onClick={handleDownload}>
      Download Resume
    </button>
  );
};

export default ResumeDownloadButton;
