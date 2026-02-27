import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { ThemeProvider } from '@/components/ThemeProvider';
import { personalInfo, siteConfig } from '@/constants/site';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://merel.me'),
  title: {
    default: `${personalInfo.name} — Frontend Dev`,
    template: `%s | ${personalInfo.name}`,
  },
  description: siteConfig.description,
  keywords: ['Design', 'Frontend', 'Development', 'Stash', 'Archive'],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://merel.me',
    title: personalInfo.name,
    description: siteConfig.description,
    siteName: personalInfo.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: personalInfo.name,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          value={{
            light: "light",
            dark: "dark"
          }}
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
