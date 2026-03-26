import { Inter, DM_Mono, Playfair_Display } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${inter.variable} ${dmMono.variable} ${playfair.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="dns-prefetch" href="https://www.valtor.io" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
