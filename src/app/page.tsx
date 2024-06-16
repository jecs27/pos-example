import { cookies } from 'next/headers'
import { CardData } from '@components/cardData';
import { Sidebar } from '@components/sidebar';

export default function HomePage() {
  const cookieStore = cookies();
  const tokenPos = cookieStore.get('token_pos');
  console.log('tokenPos', tokenPos);
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <CardData title="Data 1" value="$123.00" />
    </div>
  );
}