import { Suspense } from "react";
// export const metadata = {
//   title: "Portfolio",
//   description:
//     "Empower your online presence with Flowbite, the platform for creating stunning portfolios. Showcase your work effortlessly, enhance your personal brand, and open doors to endless opportunities. Craft, share, and stand out in the digital landscape.",
// };
const Mainlayout = ({ children }) => {
  return (
    <main className="portfolio overflow-auto p-4 md:m-0 md:p-0 md:px-8 lg:px-40 leading-relaxed text-slate-400 antialiased selection:bg-gray-300 selection:text-black ">
      <Suspense fallback={<p>Loading feed...</p>}>{children}</Suspense>
    </main>
  );
};

export default Mainlayout;
