import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EMX Sports — Where Champions Are Made",
  description: "EMX Sports is a professional boxing promotion company dedicated to advancing the sport through high-quality events and athlete development.",
  keywords: "boxing, promotion, EMX Sports, fight night, Latvia, Riga",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
