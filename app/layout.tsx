import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Inter, Archivo_Black } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});
const archivoBlack = Archivo_Black({weight: '400', subsets:['latin'],variable:'--font-heading'});

export const metadata: Metadata = {
  metadataBase: new URL('https://theexoticmotorsports.vercel.app/'),
  title: 'Exotic Motorsports Service Center',
  description: 'Exotic cars demand more than basic service. PRECISION. EXPERIENCE. DETAIL.',
};

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={cn("font-sans dark bg-[#050505]", inter.variable, archivoBlack.variable)}>
      <body className="bg-[#050505] text-titanium min-h-screen antialiased selection:bg-acid-green selection:text-onyx" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
