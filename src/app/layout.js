import { Inter} from "next/font/google";
import "./globals.css";
import { AllContextProvider } from "./context/allcontext";


const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Motopaedia",
  description: "Motopaedia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  className={` ${inter.variable}  font-[400] antialiased text-[14px] md:text-[16px] leading-[150%] scroll-smooth`}> 
     <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body 
        className={inter.className}
        >
         <AllContextProvider>
            {children}
        </AllContextProvider>
      </body>
    </html>
  );
}
