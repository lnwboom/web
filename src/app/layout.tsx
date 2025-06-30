import type { Metadata } from "next";
import "./globals.css";
import LayoutClient from "@/components/layout/LayoutClient";

// Metadata can not be used in a client component, so we export it separately.
// We can keep this here because the file is still a server component by default,
// and becomes a client component only when the "use client" directive is encountered.
export const metadata: Metadata = {
  title: "การประกอบแบตเตอรี่แรงดันสูง",
  description: "เว็บไซต์สื่อการเรียนรู้เรื่องแบตเตอรี่ไฟฟ้าแรงดันสูงระดับ 4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
