import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'VPCTI',
  description: 'Our website is currently under development. Please check back soon.',
  metadataBase: new URL('https://vpcti.netlify.app/'), // Add your production URL here later
  icons: {
    icon: [
      { url: '/favicon.ico' },
      new URL('/favicon.ico', 'http://localhost:3000'), // Absolute URL
    ],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: '/apple-touch-icon.png' },
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <Navbar />
      <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider> */}
      </body>
    </html>
  )
}

