import { Host_Grotesk } from "next/font/google";
import "./globals.css";
import Provider from "./provider";

const host_grotesk= Host_Grotesk({
  subsets: ["latin"],
});

export const metadata = {
  title: "AI Logo Generator",
  description: "Generate logos using AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={host_grotesk.className}
      >
        <Provider>
          
           {children}
        </Provider>
       
      </body>
    </html>
  );
}
