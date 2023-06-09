import { Nunito } from "next/font/google";
import "./globals.css";

const inter = Nunito({ preload: true, subsets: ["latin", "cyrillic"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
