import { useSession, signOut } from 'next-auth/react';

export default function ProfilePage() {
  const { data: session } = useSession();

  const handleSignOut = async () => {
    await signOut();
    // Redirect to homepage or login page
  };

  return (
    <div>
      {session ? (
        <>
          <p>Welcome, {session.user.email}</p>
          <button onClick={handleSignOut}>Log Out</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
