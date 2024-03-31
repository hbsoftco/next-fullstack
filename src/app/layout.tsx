import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
