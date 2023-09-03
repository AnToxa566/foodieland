import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Foodieland",
};

interface Props {
  children: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
