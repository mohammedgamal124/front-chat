import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsChatLeftDotsFill } from 'react-icons/bs';
import { MdOutlineChat } from 'react-icons/md';
import { IoSettingsOutline, IoPersonSharp } from 'react-icons/io5';

const NAV_ITEMS = [
  { to: '/chat', icon: MdOutlineChat, label: 'Chat' },
  { to: '/profile', icon: IoPersonSharp, label: 'Profile' },
  { to: '/settings', icon: IoSettingsOutline, label: 'Settings' },
];

export default function Sidebar() {
  return (
    <>
      <aside className="hidden h-screen w-[72px] shrink-0 flex-col items-center justify-between border-r border-gray-200 bg-gray-100 p-4 md:flex">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500">
          <BsChatLeftDotsFill className="text-2xl text-white" />
        </div>

        <nav className="flex flex-1 flex-col items-center gap-4 pt-5">
          {NAV_ITEMS.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              title={label}
              className={({ isActive }) =>
                `flex h-10 w-10 items-center justify-center rounded-lg transition ${
                  isActive ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-200'
                }`
              }
            >
              <Icon className="text-xl" />
            </NavLink>
          ))}
        </nav>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 font-bold text-white">
          U
        </div>
      </aside>

      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white pb-[calc(env(safe-area-inset-bottom)+0.75rem)] pt-2 shadow-[0_-4px_20px_rgba(15,23,42,0.05)] md:hidden">
        <div className="mx-auto grid max-w-md grid-cols-3 gap-2 px-4">
          {NAV_ITEMS.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/chat'}
              className={({ isActive }) =>
                `flex min-h-[52px] flex-col items-center justify-center gap-1 rounded-xl px-2 py-2 text-[11px] font-medium transition ${
                  isActive
                    ? 'bg-blue-500 text-white shadow-sm'
                    : 'text-gray-500 hover:bg-sky-50'
                }`
              }
            >
              <Icon className="text-xl" />
              <span>{label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
}