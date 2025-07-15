"use client";

import { useSession } from "next-auth/react";

const UserInfo = () => {
    const session = useSession();
  return (
    <div>
        <h3>{JSON.stringify(session)}</h3>
        <h3>User Name: {session?.data?.user?.name}</h3>
    </div>
  )
}

export default UserInfo;