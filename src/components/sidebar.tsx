import Link from 'next/link';
import { useRouter } from 'next/router';

export function Sidebar() {
  const router = useRouter();
  return (
    <div className="sidebar">
      <ul>
        <li className={router.pathname === '/' ? 'active' : ''}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className={router.pathname === '/about' ? 'active' : ''}>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li className={router.pathname === '/contact' ? 'active' : ''}>
          <Link href="/contact">
            <a>Contact</a>
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

        li a {
          display: block;
          color: #000;
          padding: 8px 16px;
          text-decoration: none;
        }

        li a:hover {
          background-color: #ddd;
        }

        .active {
          background-color: #4CAF50;
          color: white;
        }
      `}</style>
    </div>
  );
};
