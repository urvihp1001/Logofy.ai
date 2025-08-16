"use client";

import React, { useContext, useEffect, useState } from "react";
import { UserDetailContext } from "../_context/UserDetailContext";

function GenerateLogo() {
  const { userDetail } = useContext(UserDetailContext);
  const [formData, setFormData] = useState(null);
  const [aiPrompt, setAiPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined" && userDetail?.email) {
      const storedData = localStorage.getItem("formData");
      if (storedData) {
        const parsed = JSON.parse(storedData);
        setFormData(parsed);
      }
    }
  }, [userDetail]);

  useEffect(() => {
    if (formData) {
      generateAILogo(formData);
    }
  }, [formData]);

  const generateAILogo = async (formData) => {
    setLoading(true);
    setError(null);
    setAiPrompt("");

    try {
      const res = await fetch("/api/gemma", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          idea: `Logo Title: ${formData.title}, Description: ${formData.description}, Colors: ${formData.palette}, Design Style: ${formData.designs?.title}, Extra Prompt: ${formData.designs?.prompt}`,
        }),
      });

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

      const data = await res.json();

      if (data.error) {
        setError(data.error);
      } else {
        setAiPrompt(data.prompt);
      }
    } catch (err) {
      setError(err.message || "Failed to generate prompt");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {userDetail ? <h2>Hello, {userDetail.name}</h2> : <h2>Loading user...</h2>}

      <pre>{formData ? JSON.stringify(formData, null, 2) : "No form data."}</pre>

      {loading && <p>Generating AI logo prompt...</p>}

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {aiPrompt && (
        <div>
          <h3>AI Generated Logo Prompt:</h3>
          <p>{aiPrompt}</p>
        </div>
      )}
    </div>
  );
}

export default GenerateLogo;
