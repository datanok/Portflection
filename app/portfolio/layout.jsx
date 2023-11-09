import { Suspense } from "react";
// export const metadata = {
//   title: "Portfolio",
//   description:
//     "Empower your online presence with Flowbite, the platform for creating stunning portfolios. Showcase your work effortlessly, enhance your personal brand, and open doors to endless opportunities. Craft, share, and stand out in the digital landscape.",
// };
const Mainlayout = ({ children }) => {
  return (
    <main className="portfolio h-full overflow-auto p-4 md:p-8 md:px-8 lg:px-40 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 ">
      <Suspense fallback={<p>Loading feed...</p>}>{children}</Suspense>
    </main>
  );
};

export default Mainlayout;
