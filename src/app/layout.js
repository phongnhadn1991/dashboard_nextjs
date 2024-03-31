import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./_components/common/header/Header";

const roboto = Roboto({ subsets: ["vietnamese"],
weight: [
  '100','300','400','500','700'
] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className='l-page'>
          <Header/>
          <aside className='p-side w-[15rem] bg-[#111c43] fixed z-10 h-[100vh]'>
            <div className='p-side_logo border-b border-[#1e2e60] flex justify-center items-center h-[60px]'>
              <p className='text-white text-center uppercase font-normal'>Dashboard MCN</p>
            </div>
          </aside>
          {children}
        </div>
      </body>
    </html>
  );
}