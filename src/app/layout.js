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
  title: "Motorpedia | Explore Car Knowledge and Reviews",
  description: "Motorpedia brings you car reviews, automotive insights, and expert comparisons. Learn everything about cars in one place.",
  openGraph: {
    title: "Motorpedia",
    description: "Your encyclopedia for car knowledge and reviews.",
    url: "https://motorpedia.ai",
    siteName: "Motorpedia",
    images: [
      { url: "/icons/logo.png", width: 1200, height: 630 },
    ],
    locale: "en_US",
    type: "website",
  },
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
