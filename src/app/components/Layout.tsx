import { Outlet } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';
import { TopBar } from './TopBar';
import { MobileBottomBar } from './MobileBottomBar';
import { SkipLink } from './SkipLink';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="hidden md:block">
        <TopBar />
      </div>
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <MobileBottomBar />
    </div>
  );
}