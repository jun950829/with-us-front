import type { Metadata } from 'next';
import Providers from '@/styles/providers';
import { Plus_Jakarta_Sans } from 'next/font/google';
import StyledComponentsRegistry from '@/styles/registry';
import Nprogress from '@/src/components/commons/Nprogress';
import SideBar from '@/src/components/layout/SideBar';

const jakarta = Plus_Jakarta_Sans({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
});
export const metadata: Metadata = {
  title: 'With Us',
  description: '게임 친구 찾기'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <Providers>
        <html lang="en">
          <body className={jakarta.className}>
            <SideBar />
            <Nprogress />
            {children}
          </body>
        </html>
      </Providers>
    </StyledComponentsRegistry>
  );
}
