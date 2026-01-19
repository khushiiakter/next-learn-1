"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
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
      setMessage("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="glass-card p-8 w-full max-w-md animate-float">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold gradient-text mb-2">Join Us</h2>
          <p className="opacity-90">Create your account today</p>
        </div>
        
        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <input 
              type="email"
              placeholder="Email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              className="input input-bordered w-full bg-white/10 border-violet-200/20 text-white placeholder-violet-200/70"
              required
            />
          </div>
          
          <div>
            <input 
              type="password"
              placeholder="Create password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              className="input input-bordered w-full bg-white/10 border-violet-200/20 text-white placeholder-violet-200/70"
              required
            />
          </div>
          
          <button 
            type="submit" 
            className="btn btn-gradient w-full rounded-full font-semibold py-3"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="loading loading-spinner loading-sm"></span>
                Creating Account...
              </>
            ) : (
              "✨ Create Account"
            )}
          </button>
          
          {message && (
            <div className="alert alert-error bg-red-500/20 border-red-500/30 text-white">
              <span>{message}</span>
            </div>
          )}
        </form>
        
        <p className="text-center mt-6 text-sm opacity-75">
          Already have an account? 
          <a href="/login" className="text-violet-300 hover:underline ml-1">Sign in</a>
        </p>
      </div>
    </div>
  );
}
