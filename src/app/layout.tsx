import type { Metadata } from "next";
import "./globals.css";

import { mainFont } from "./fonts";

export const metadata: Metadata = {
  title: "Aarab Nishchal",
  description: "Aarab's corner of the web. Projects, thoughts, and the quiet acceptance that we're all just winging it.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={mainFont.className}>
      <body
        className='antialiased'
      >
        {children}
      </body>
    </html>
  );
}
