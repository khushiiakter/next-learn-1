"use client";
import { useSession, signIn, signOut } from "next-auth/react"

const LoginBtn = () => {
  return (
    <div className="mt-6">
        <button onClick={() => signIn('google')} className='btn text-xl  btn-outline'>Sign In With Google</button>
    </div>
  )
}

export default LoginBtn;