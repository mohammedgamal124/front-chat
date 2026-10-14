import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

export default function MainLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <header className="hidden md:block">
          <Topbar />
        </header>

        <main className="min-w-0 flex-1 overflow-y-auto bg-slate-50 pb-[5.5rem] md:pb-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
