import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Mono, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceMono = Space_Mono({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-space-mono'
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: 'Innokas Nigeria Limited',
  description: 'Your trusted partner for high-quality fruits, frozen foods, and agricultural products',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceMono.variable} ${playfair.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}