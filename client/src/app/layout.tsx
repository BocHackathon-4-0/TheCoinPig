import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })
const fullPageClass = 'w-full h-full' as const;

export const metadata: Metadata = {
  title: 'BOC Hackathon Project',
  description: 'Children Financial Literacy App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={fullPageClass + ' bg-white'}>
      <body className={[inter.className, fullPageClass, 'bg-white'].join(' ')}>{children}</body>
    </html>
  )
}
