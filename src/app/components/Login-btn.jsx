"use client";
import { useSession, signIn, signOut } from "next-auth/react"

const LoginBtn = () => {
 
  const { data: session } = useSession();
    if (session) {
    return (
      <div className="glass-card p-8 max-w-md mx-auto text-center animate-float">
        <div className="mb-6">
          <div className="w-20 h-20 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">{session.user.name?.charAt(0)}</span>
          </div>
          <h1 className="text-2xl font-bold mb-2">Welcome back!</h1>
          <p className="text-lg opacity-90">{session.user.name}</p>
          <p className="text-sm opacity-75">{session.user.email}</p>
        </div>
        <button 
          className='btn btn-gradient text-white px-8 py-3 rounded-full font-semibold' 
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      </div>
    );
  }
  
  return (
    <div className="text-center py-16">
      <div className="glass-card p-12 max-w-lg mx-auto animate-float">
        <h1 className="text-5xl font-bold mb-4 gradient-text">Welcome!</h1>
        <p className="text-xl mb-8 opacity-90">Discover amazing features with our Next.js app</p>
        <div className="space-y-4">
          <button 
            onClick={() => signIn('google')} 
            className='btn btn-gradient text-white px-8 py-4 rounded-full text-lg font-semibold w-full'
          >
             Sign In With Google
          </button>
          <p className="text-sm opacity-75">Join thousands of users already using our platform</p>
        </div>
      </div>
    </div>
  )
}

export default LoginBtn;
