import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Code-Mentor | Interactive Coding Education',
  description: 'Master programming languages, Git, Databases, Ethical Hacking, and AI through interactive lessons.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <div className="app-container">
          <Sidebar />
          <main className="main-content">
            <Navbar />
            <div className="page-content">
              {children}
            </div>
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
