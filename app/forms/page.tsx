"use client";

import { useState } from "react";


export default function IndividualForm() {
  // Each input has its own state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Password:", password);

  // Errors for each field
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [loading, setLoading] = useState(false);

  const validate = () => {
    let valid = true;

    if (!name) {
      setNameError("Name is required");
      valid = false;
    } else {
      setNameError("");
    }

    if (!email.includes("@")) {
      setEmailError("Invalid email");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!password || password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      valid = false;
    } else {
      setPasswordError("");
    }

    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
   
    if (!validate()) return;

    setLoading(true);

    try {

      const res = await fetch("http://localhost:8080/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          { name,
            email, 
            password 
          }
        ),
      });

      if (!res.ok) throw new Error("Failed to submit");

      alert("Form submitted!");
      setName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      alert("Error submitting form");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 space-y-6">
      <h1 className="text-xl font-semibold">Create Account</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border"
          />
          {nameError && <p className="text-red-500 text-sm">{nameError}</p>}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border"
          />
          {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
        </div>

        {/* Password */}
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
                        className="border"

          />
          {passwordError && (
            <p className="text-red-500 text-sm">{passwordError}</p>
          )}
        </div>

        <button type="submit" disabled={loading} className="border">
          {loading ? "Submitting..." : "Submit"}
        </button>

      </form>
    </div>
  );
}