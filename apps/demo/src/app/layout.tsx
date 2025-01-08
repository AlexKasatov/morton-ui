import "./globals.css";
import "@morton-ui/components/styles.css";
import type {PropsWithChildren} from "react";
import type {Metadata, NextPage} from "next";
// eslint-disable-next-line camelcase -- we need to import font name in snake_case
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Morton UI",
  description: "React Components Library",
};

const RootLayout: NextPage<PropsWithChildren> = ({children}) => {
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

export default RootLayout;
