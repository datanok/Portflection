import { connectToDB } from "@utils/database";
import Portfolio from "@models/portfoliodata";
export const POST = async (req) => {
  // console.log(req);
  const { portfolioData } = await req.json();
  try {
    console.log(portfolioData);

    await connectToDB();
    const { userName, about, role, experiences, projects, userID } =
      portfolioData;
    const newPortfolio = new Portfolio({
      userName,
      about,
      role,
      experiences,
      projects,
      userID,
    });
    await newPortfolio.save();
    return new Response(JSON.stringify(newPortfolio), { status: 201 });
  } catch (error) {
    return new Response("Failed to create porfolio", { status: 500 });
  }
};
