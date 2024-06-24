// components/ClientWrapper.tsx
'use client';

import { usePathname } from 'next/navigation';
import SideNav from '@/components/side-nav';
import Header from '@/components/header';
import MarginWidthWrapper from '@/components/margin-width-wrapper';
import PageWrapper from '@/components/page-wrapper';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const noSideNavRoutes = ['/login'];

  const shouldShowSideNav = !noSideNavRoutes.includes(pathname);

  return (
    <div className="flex">
      {shouldShowSideNav && <SideNav />}
      <main className={`flex-1 ${shouldShowSideNav ? '' : 'w-full'}`}>
        {shouldShowSideNav ? 
      <MarginWidthWrapper>
      <Header />
      <PageWrapper>{children}</PageWrapper>
    </MarginWidthWrapper> 
    : children  
      }
        
      </main>
    </div>
  );
}