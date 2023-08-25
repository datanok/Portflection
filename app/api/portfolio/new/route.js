import { connectToDB } from "@utils/database";
import Portfolio from "@models/portfoliodata";

export const POST = async (req) => {
  const { portfolioData } = await req.json();

  try {
    await connectToDB();

    const { userName, about, role, experiences, projects, userID } = portfolioData;

    // Check if a portfolio already exists with the same userID
    const existingPortfolio = await Portfolio.findOne({ userID });

    if (existingPortfolio) {
      // If portfolio exists, update its fields
      existingPortfolio.userName = userName;
      existingPortfolio.about = about;
      existingPortfolio.role = role;
      existingPortfolio.experiences = experiences;
      existingPortfolio.projects = projects;
      await existingPortfolio.save();

      return new Response(JSON.stringify(existingPortfolio), { status: 200 });
    } else {
      // If portfolio doesn't exist, create a new one
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
    }
  } catch (error) {
    return new Response("Failed to create/update portfolio", { status: 500 });
  }
};
