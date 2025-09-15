import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    
    if (window.location.hash.startsWith("#invite_token=")) {
      const token = window.location.hash.replace("#invite_token=", "");
      
      router.replace(`/admin/#invite_token=${token}`);
    }
  }, [router]);

  return (
    <div
      className={`${poppins.variable} font-poppins min-h-screen flex flex-col`}
    >
      <Header />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer currentYear={currentYear}/>
    </div>
  );
}
