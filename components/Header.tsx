'use client';

import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const getBreadcrumbs = () => {
    const paths = pathname.split('/').filter(Boolean);
    return [
      { label: 'Home', href: '/' },
      ...paths.map((path, idx) => ({
        label: path.charAt(0).toUpperCase() + path.slice(1),
        href: '/' + paths.slice(0, idx + 1).join('/'),
      })),
    ];
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <header className="bg-white border-b border-slate-200 px-8 py-4 flex justify-between items-center">
      <nav className="flex items-center gap-2 text-sm">
        {breadcrumbs.map((crumb, idx) => (
          <div key={idx} className="flex items-center gap-2">
            {idx > 0 && <span className="text-slate-400">/</span>}
            <span className="text-slate-600">{crumb.label}</span>
          </div>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-sm font-medium text-slate-900">Dr. Sarah Johnson</p>
          <p className="text-xs text-slate-500">Attending Physician</p>
        </div>
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
          SJ
        </div>
      </div>
    </header>
  );
}
