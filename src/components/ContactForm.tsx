"use client";

import { useState } from 'react';

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "3d7550fb-5ea3-4058-aff4-6fc51b34659c");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setResult("Form Submitted Successfully");
        if (form) {
          form.reset();
        }
      } else {
        setResult("Error");
      }
    } catch (error) {
      setResult("Error");
      console.error("Form submission error:", error);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-3 rounded-3xl border border-white/20 bg-black/25 p-4 sm:p-5">
      <input type="hidden" name="subject" value="New message from Infinity Code portfolio" />
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

      <input
        type="text"
        name="name"
        required
        placeholder="Your name"
        className="input-field"
      />
      <input
        type="email"
        name="email"
        required
        placeholder="Email address"
        className="input-field"
      />
      <input
        type="text"
        name="company"
        placeholder="Company name"
        className="input-field"
      />
      <textarea
        name="message"
        required
        placeholder="Tell us about your project"
        rows={5}
        className="input-field resize-none"
      />
      <button
        type="submit"
        className="button-sun w-full justify-center py-3 text-sm font-semibold"
        disabled={result === "Sending...."}
      >
        {result === "Sending...." ? "Sending..." : "Send Message"}
      </button>
      {result && (
        <div className={`text-center text-sm font-medium ${
          result === "Form Submitted Successfully"
            ? "text-green-400"
            : result === "Error"
            ? "text-red-400"
            : "text-cyan-400"
        }`}>
          {result}
        </div>
      )}
    </form>
  );
}