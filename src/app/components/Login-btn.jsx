"use client";
import { useSession, signIn, signOut } from "next-auth/react"

const LoginBtn = () => {
  return (
    <div className="mt-6">
        <button onClick={() => signIn()} className='btn text-xl w-40 btn-outline'>Login</button>
    </div>
  )
}

export default LoginBtn;