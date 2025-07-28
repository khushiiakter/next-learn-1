"use client";
import { useSession, signIn, signOut } from "next-auth/react"

const LoginBtn = () => {
 
  const { data: session } = useSession();
    if (session) {
    return (
      <>
        <h1>Welcome, {session.user.name}</h1>
        <p>{session.user.email}</p>
        <button className='btn text-xl  btn-outline' onClick={() => signOut()}>Log Out</button>
      </>
    );
  }
  
  return (
    <div className="mt-6">
       <h1 className="text-3xl font-bold underline">Welcome to Next.js!</h1>
        <button onClick={() => signIn('google')} className='btn text-xl  btn-outline'>Sign In With Google</button>
    </div>
  )
}

export default LoginBtn;