'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

import useScroll from '@/hooks/use-scroll';
import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div
      className={cn(
        `sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200`,
        {
          'border-b border-gray-200 bg-white/75 backdrop-blur-lg': scrolled,
          'border-b border-gray-200 bg-white': selectedLayout,
        },
      )}
    >
      <div className="flex h-[47px] items-center justify-between px-4">
        <div className="flex items-center space-x-4"></div>

        <div className="relative">
          <div
            className="h-8 w-8 rounded-full flex items-center justify-center text-center cursor-pointer"
            onClick={toggleDropdown}
          >
            <span className="font-semibold text-sm"></span>
          </div>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
              <ul className="py-1">
                <li>
                  
                  <Link href="/login" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    <div className="flex items-center space-x-2">
                      <span>Cerrar Sesión</span>
                      <Icon icon="lucide:log-out" width={20} height={20} />
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;