import { Inter } from "next/font/google";
import "../styles/global.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prupé Podologia",
  description: "Page Prupé Podologia",
  icons: {
    icon: "/favicon.png", // Caminho para o favicon dentro da pasta public
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
