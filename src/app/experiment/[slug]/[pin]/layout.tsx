import { Footer } from '@/components/layout/footer';
import { NavBar } from '@/components/layout/navbar';

export default function ExperimentsPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <NavBar />
      <main className="mx-auto w-full flex-1 sm:max-w-6xl">{children}</main>
      <Footer />
    </div>
  );
}
