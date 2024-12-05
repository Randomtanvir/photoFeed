import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "PhotoFeed",
  description: "A photoFeed app create with next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="">
        <Navbar />
        <div className="container my-4 lg:my-8">{children}</div>
      </body>
    </html>
  );
}
