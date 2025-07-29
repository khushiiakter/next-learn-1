"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://nextauth.free.beeceptor.com/api/users",
        {
          email,
          password,
        }
      );
      if (res.status === 201) {
        router.push("/login");
      }
    } catch (err) {
      setMessage("Registration failed");
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      <div className="flex flex-col items-center justify-center">
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="w-2xl border"/>
        <input
        className="w-2xl border"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn btn-outline">Register</button>
      </div>

      {message && <p>{message}</p>}
    </form>
  );
}
