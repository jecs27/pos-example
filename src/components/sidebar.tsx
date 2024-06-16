'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export function Sidebar() {
  const router = useRouter();
  
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/login">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Contact
          </Link>
        </li>
      </ul>

      <style jsx>{`
        .sidebar {
          width: 200px;
          background-color: #f1f1f1;
          padding: 20px;
        }

        ul {
          list-style-type: none;
          padding: 0;
        }

        li {
          margin-bottom: 10px;
        }

        li a {
          display: block;
          color: #000;
          padding: 8px 16px;
          text-decoration: none;
          border-radius: 4px;
        }

        li a:hover {
          background-color: #ddd;
        }

        .active a {
          background-color: #4CAF50;
          color: white;
        }
      `}</style>
    </div>
  );
};