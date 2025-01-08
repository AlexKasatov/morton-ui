import "./globals.css";
import "@morton-ui/components/styles.css";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Morton UI",
  description: "React Components Library",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">

      <body className={notoSans.className}>
      <link
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🛠️</text></svg>"
        rel="icon"
      />
      {children}</body>
    </html>
  );
}
