import './globals.css'
import type { Metadata } from 'next';
import { Inter } from  '@next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next App',
  description: 'Monitoring [poc] application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <h1>Monitoring [POC]</h1>
        </nav>
        {children}
      </body>
    </html>
  )
}
