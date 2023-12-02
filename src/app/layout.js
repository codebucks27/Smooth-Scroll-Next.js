import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Smooth Scrolling In Next.js 14",
  description:
    "Tutorial on Smooth Scrolling In Next.js 14. You can find full video from CodeBucks channel on youtube.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
