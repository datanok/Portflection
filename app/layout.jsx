import Provider from "@components/Provider";
import "@styles/globals.css";
import { Roboto, Expletus_Sans } from "next/font/google";
import logo from "@public/assets/images/logo.svg";
import Head from "next/head";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  style: ["normal", "italic"],
});
export const metadata = {
  title: "Portfolio Forge",
  description:
    "Empower your online presence with Flowbite, the platform for creating stunning portfolios. Showcase your work effortlessly, enhance your personal brand, and open doors to endless opportunities. Craft, share, and stand out in the digital landscape.",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
  },
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={`${roboto.className}` + " scroll-smooth"}>
      <body className=" scroll-smooth">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
};

export default RootLayout;
