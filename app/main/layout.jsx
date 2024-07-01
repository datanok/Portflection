import Loader from "@components/Loader/Loader";
import Nav from "@components/Nav";
import { Suspense } from "react";
import DialogWrapper from "./edit/dialogWrapper";

const Mainlayout = ({ children }) => {

  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
      <Nav />
      <Suspense fallback={<Loader />}>{children}</Suspense>
      <DialogWrapper />
    </main>
  );
};

export default Mainlayout;
