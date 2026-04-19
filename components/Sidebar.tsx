'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { href: '/dashboard', label: 'Dashboard', icon: '📊' },
    { href: '/stock', label: 'Stock Management', icon: '📦' },
    { href: '/routine', label: 'Daily Routine', icon: '📋' },
    { href: '/settings', label: 'Settings', icon: '⚙️' },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-6 flex flex-col">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">ComaCare</h1>
        <p className="text-slate-400 text-sm mt-1">Patient Management</p>
      </div>

      <nav className="flex-1 space-y-2">
        {links.map((link) => {
          const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <span className="text-lg">{link.icon}</span>
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-slate-700 pt-4">
        <button className="w-full text-left px-4 py-3 text-slate-300 hover:bg-slate-800 rounded-lg transition">
          🚪 Logout
        </button>
      </div>
    </aside>
  );
}
