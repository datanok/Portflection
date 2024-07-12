import Loader from "@components/Loader/Loader";
import Nav from "@components/Nav";
import { Suspense } from "react";
import DialogWrapper from "./edit/dialogWrapper";

const Mainlayout = ({ children }) => {
  return (
    <>
      <div className="main">
        <div className="gradient" />
      </div>
      <main>
        <Nav />
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </main>

      <DialogWrapper />
    </>
  );
};

export default Mainlayout;
