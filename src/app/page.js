import { getServerSession } from "next-auth";
import LoginBtn from "./components/Login-btn";
import UserInfo from "./components/UserInfo";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  // const session = await getServerSession(authOptions);
  return (
    <div className="">
      <h1 className="text-3xl font-bold underline">Welcome to Next.js!</h1>
      <LoginBtn></LoginBtn>
      {/* <div>
        <UserInfo></UserInfo>
      </div> */}
      <hr />
      {/* <h2 className="pt-10">server userinfo</h2>
      <h3>{JSON.stringify(session)}</h3>
      <h3>User Name: {session?.user?.name}</h3> */}
      {/* <p>Email: {session.user.email}</p> */}
    </div>
  );
}
