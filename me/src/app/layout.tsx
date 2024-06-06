import type { Metadata } from "next";
import { ReactNode } from "react";
import "../styles/global.css";

export const metadata: Metadata = {
  title: "Michael Keay",
  description: "Junior Full Stack Developer",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
      <html lang="en">
          <body>{children}</body>
      </html>
  );
};

export default RootLayout;
