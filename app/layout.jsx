import Providers from "@components/Provider";
import "@styles/globals.css";
import { Inter, Expletus_Sans } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
    adjustFontFallback: false,
});
export const metadata = {
  title: "Portflection: Crafting Stunning Portfolios",
  description:
    "Showcase your work effortlessly, enhance your personal brand, and open doors to endless opportunities. Craft, share, and stand out in the digital landscape.",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
  },
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={`${inter.className}` + " scroll-smooth"}>
      <body className=" scroll-smooth">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
