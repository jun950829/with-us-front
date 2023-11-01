import type { Metadata } from 'next';
import Providers from '@/styles/providers';
import { Roboto } from 'next/font/google';
import StyledComponentsRegistry from '@/styles/registry';
import Nprogress from '@/src/components/commons/Nprogress';
const roboto = Roboto({
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
          <body className={roboto.className}>
            <Nprogress />
            {children}
          </body>
        </html>
      </Providers>
    </StyledComponentsRegistry>
  );
}
