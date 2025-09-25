import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marina Cabo - Advocacia Especializada",
  description: "Escritório de advocacia especializado em direito civil, trabalhista e empresarial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
