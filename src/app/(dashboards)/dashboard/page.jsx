import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Dashboard() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) router.push('/login');
  }, [session]);

  if (!session) return <p>Loading...</p>;

  return <h1>Welcome, {session.user?.email}</h1>;
}
