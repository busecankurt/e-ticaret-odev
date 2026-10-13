// app/layout.js
import Navbar from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <Navbar /> {/* Tüm sayfalarda üst kısımda görünür */}
        <main>{children}</main>
      </body>
    </html>
  );
}