import "./globals.css";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Tetelestai community Centered Service",
  description: "Tetelestai community Centered Service",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth`} suppressHydrationWarning>
     <body className="bg-[#fafafa] text-gray-800 transition-colors duration-300">
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}