
import React, { useState } from "react";
import {
  FiArrowRight,
  FiCheckCircle,
  FiAlertCircle,
  FiLoader,
} from "react-icons/fi";

import { GOOGLE_SHEETS_ENDPOINT } from "../config/contactConfig";
import "./forminfo.css";

const WEB3FORMS_ACCESS_KEY = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY;

function FormInfo() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const sendEmail = async (e) => {
    e.preventDefault();

    if (isSending) return;

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);

    setIsSending(true);
    setStatus({ type: "", message: "" });

    // Prepare the independent Google Sheets submission.
    const sheetData = new URLSearchParams();

    ["name", "email", "contact", "subject", "message", "botcheck"]
      .forEach((key) => {
        sheetData.set(key, String(formData.get(key) || ""));
      });

    // Start the sheet request independently of Web3Forms.
    const sheetRequest = fetch(GOOGLE_SHEETS_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: sheetData.toString(),
    }).catch((error) => {
      console.error("Google Sheets request failed:", error);
      return null;
    });

    let emailSent = false;

    try {
      const emailData = new FormData(formElement);

      emailData.set("access_key", WEB3FORMS_ACCESS_KEY);
      emailData.set("from_name", "Portfolio Contact Form");
      emailData.set(
        "email_subject",
        `Portfolio Inquiry: ${formData.get("subject")}`
      );

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: emailData,
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Web3Forms could not send the email."
        );
      }

      emailSent = true;
    } catch (error) {
      console.error("Web3Forms submission failed:", error);
    }

    // Wait for the independent request to finish.
    // With no-cors, the browser cannot read Google's response body.
    const sheetResult = await sheetRequest;

    if (emailSent) {
      formElement.reset();

      setStatus({
        type: "success",
        message:
          "Thank you for reaching out! Your email notification was accepted. Your inquiry was also sent to our spreadsheet endpoint.",
      });
    } else if (sheetResult) {
      formElement.reset();

      setStatus({
        type: "error",
        message:
          "Email notification could not be confirmed. Your inquiry was sent to the spreadsheet endpoint, but its save status cannot be verified here. Please contact me directly if your inquiry is urgent.",
      });
    } else {
      setStatus({
        type: "error",
        message:
          "We couldn't confirm delivery. Please try again later or contact me directly by email.",
      });
    }

    setIsSending(false);
  };

  return (
    <div className="contact-form-component">
      <form onSubmit={sendEmail} className="contact-form">
        {/* Honeypot field: keep it empty and invisible to visitors. */}
        <input
          type="checkbox"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ display: "none" }}
        />

        <div className="contact-form-fields">
          <div className="contact-form-field">
            <label htmlFor="contact-username">
              YOUR NAME <span>*</span>
            </label>
            <input
              id="contact-username"
              type="text"
              name="name"
              placeholder="Juber Khan"
              autoComplete="name"
              maxLength={100}
              required
              disabled={isSending}
            />
          </div>

          <div className="contact-form-field">
            <label htmlFor="contact-email">
              EMAIL ADDRESS <span>*</span>
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              placeholder="Juber@example.com"
              autoComplete="email"
              maxLength={254}
              required
              disabled={isSending}
            />
          </div>

          <div className="contact-form-field">
            <label htmlFor="contact-phone">PHONE NUMBER</label>
            <input
              id="contact-phone"
              type="tel"
              name="contact"
              placeholder="+91 98765 43210"
              autoComplete="tel"
              maxLength={25}
              disabled={isSending}
            />
          </div>

          <div className="contact-form-field">
            <label htmlFor="contact-subject">
              SUBJECT <span>*</span>
            </label>
            <input
              id="contact-subject"
              type="text"
              name="subject"
              placeholder="Project inquiry"
              maxLength={150}
              required
              disabled={isSending}
            />
          </div>

          <div className="contact-form-field contact-form-message-field">
            <label htmlFor="contact-message">
              YOUR MESSAGE <span>*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Tell me about your project, goals, or how I can help..."
              rows={5}
              maxLength={5000}
              required
              disabled={isSending}
            />
            <span className="contact-form-helper">
              The more details you share, the better I can help.
            </span>
          </div>
        </div>

        {status.message && (
          <div
            className={`contact-form-status ${status.type}`}
            role={status.type === "error" ? "alert" : "status"}
            aria-live="polite"
          >
            {status.type === "success" ? (
              <FiCheckCircle aria-hidden="true" />
            ) : (
              <FiAlertCircle aria-hidden="true" />
            )}
            <span>{status.message}</span>
          </div>
        )}

        <button
          type="submit"
          className="contact-form-submit"
          disabled={isSending}
        >
          <span>
            {isSending ? "Sending your message..." : "Send Message"}
          </span>
          {isSending ? (
            <FiLoader className="contact-submit-spinner" />
          ) : (
            <FiArrowRight className="contact-submit-arrow" />
          )}
        </button>

        <p className="contact-form-privacy">
          Your details are used to respond to your inquiry.
        </p>
      </form>
    </div>
  );
}

export default FormInfo;
