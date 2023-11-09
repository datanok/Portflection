import PortfolioForm from "@components/Forms/PortfolioForm";
export const metadata = {
  title: "Portfolio Form",
};

const page = () => {
  return (
    <div className="flex justify-center m-4 bg-white">
      <PortfolioForm />
    </div>
  );
};

export default page;
