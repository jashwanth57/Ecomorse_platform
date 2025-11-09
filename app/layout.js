import { Inter, Knewave } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const knewave = Knewave({
  variable: "--font-knewave",
  subsets: ["latin"],
  weight : ["400"]
});

export const metadata = {
  title: "ShoppZo App",
  description: "An Electronic Shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${knewave.variable} antialiased`}
      >
        <Provider>
              {/* <Header /> */}
        {children}
        </Provider>
    
      </body>
    </html>
  );
}
