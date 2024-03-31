import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Next",
  description: "This is sample blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="m-auto container">
          <Header />
          <div className="p-5">{children}</div>
        </div>
      </body>
    </html>
  );
}
