import Nav from "@components/Nav";

const Mainlayout = ({ children }) => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
      <Nav />
      {children}
    </main>
  );
};

export default Mainlayout;
