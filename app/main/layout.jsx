import Loader from "@components/Loader/Loader";
import Nav from "@components/Nav";
import { Suspense } from "react";

const Mainlayout = ({ children }) => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
      <Nav />
      <Suspense fallback={<Loader/>}>
      {children}
      </Suspense>
    </main>
  );
};

export default Mainlayout;
