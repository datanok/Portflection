import PortfolioForm from "@components/Forms/PortfolioForm";
export const metadata = {
  title: "Edit Form",
};

const page = () => {
 
  return (
    <div className="flex justify-center mx-4">
      <PortfolioForm />
      
    </div>
  );
};

export default page;
