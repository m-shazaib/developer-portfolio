import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Muhammad Shahzaib - Software Developer",
  description: "Explore the portfolio of Muhammad Shahzaib, a full stack developer passionate about learning new technologies and solving problems. Open to collaboration and new challenges.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <meta name="google-site-verification" content="0OOQ1LA27Ro5drsl81u-P1O19KquM-w-3yIt0UwN0zg" />
      <meta name="description" content="Discover Muhammad Shahzaib LinkedIn: React Native Frontend Mobile Developer with a Talent for New Technologies and solving problems. Open to new opportunities and new challenges." />
      <meta name="keywords" content="React Native, Mobile Developer, Muhammad Shahzaib, Shahzaib, Islamabad, Software Developer, Full Stack Developer, JavaScript, MERN Stack, Web Development, Mobile Development" />
      <meta name="author" content="Muhammad Shahzaib" />
      <link rel="canonical" href="https://mshahzaib.vercel.app/" />
      <link rel="alternate" hreflang="en" href="https://mshahzaib.vercel.app/en" />
      <link rel="alternate" hreflang="es" href="https://mshahzaib.vercel.app/es" />
      <title>Muhammad Shahzaib: Portfolio - React Native Mobile Developer</title>
    </head>
    <body className={inter.className}>
      <ToastContainer />
      <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
        <Navbar />
        {children}
        <ScrollToTop />
      </main>
      <Footer />
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </body>
  </html>
  );
}
