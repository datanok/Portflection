import { connectToDB } from "@utils/database";
import Portfolio from "@models/portfoliodata";

export const POST = async (req) => {
  const portfolioData  = await req.json();
  try {
    await connectToDB();
    const { profileImg,userName, about, role,skills, experiences, projects, userID, email,githubLink,instagramLink,linkedinLink} = portfolioData;

    //const {profileImg, userName, about, role,skills, experiences, projects, userID, email,githubLink,instagramLink,linkedinLink} = portfolioData;

    // Check if a portfolio already exists with the same userID
    const existingPortfolio = await Portfolio.findOne({ userID });
    
    if (existingPortfolio) {
      existingPortfolio.userName = userName;
      existingPortfolio.profileImg = profileImg;
      existingPortfolio.about = about;
      existingPortfolio.role = role;
      existingPortfolio.skills=skills;
      existingPortfolio.experiences = experiences;
      existingPortfolio.projects = projects;
      existingPortfolio.email = email;
      existingPortfolio.githubLink = githubLink;
      existingPortfolio.instagramLink = instagramLink;
      existingPortfolio.linkedinLink = linkedinLink;
      
      await existingPortfolio.save();

      return new Response(JSON.stringify(existingPortfolio), { status: 200 });
    } else {
      // If portfolio doesn't exist, create a new one
      const newPortfolio = new Portfolio({
        profileImg,
        userName,
        about,
        role,
        skills,
        experiences,
        projects,
        userID,
        email,
        githubLink,
        instagramLink,
        linkedinLink
      });
      await newPortfolio.save();
      
      return new Response(JSON.stringify(newPortfolio), { status: 201 });
    }
  } catch (error) {
    return new Response(`Failed to create/update portfolio: ${error}`, { status: 500 });
  }
};
