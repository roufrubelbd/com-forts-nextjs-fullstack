import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import { Toaster } from "react-hot-toast";


export const metadata = {
  title: "Comforts",
  description: "Comforts E-commerce Store",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" style={{ colorScheme: 'dark' }}>
      <body
        
      >        
        <Providers>
          <Navbar />
          {children}
          <Toaster position="top-right" />
        </Providers>      
        <Footer />
      </body>
    </html>
  );
}
