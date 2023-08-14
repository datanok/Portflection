import "@styles/globals.css";
import { Roboto, Expletus_Sans } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  style: ["normal", "italic"],
});
export const metadata = {
  title: "Portfolio Forge",
  description: "Build custom portfolios",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={`${roboto.className}` + " scroll-smooth"}>
      <body className=" scroll-smooth">{children}</body>
    </html>
  );
};

export default RootLayout;
