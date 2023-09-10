import '@yike-design/react/style';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import NextTopLoader from 'nextjs-toploader';

import './globals.scss';

export const metadata: Metadata = {
  title: 'Yike Design React',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-cn">
      <body>
        <NextTopLoader showSpinner={false} />
        <div className="h-screen flex flex-col">
          <Header />
          <main className="flex-grow overflow-hidden">{children}</main>
        </div>
      </body>
    </html>
  );
}
