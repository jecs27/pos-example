import { cookies } from 'next/headers'

export default function HomePage() {
  const cookieStore = cookies();
  const tokenPos = cookieStore.get('token_pos');
  console.log('tokenPos', tokenPos);
  return (
    <div className="flex min-h-screen">
      <h1>Home Page</h1>
    </div>
  );
}