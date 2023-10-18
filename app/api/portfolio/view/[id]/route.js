import { connectToDB } from "@utils/database";
import Portfolio from "@models/portfoliodata";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    const portfolio = await Portfolio.findOne({ userID: params.id });
    if (!portfolio) {
      return new Response("Portfolio not found", { status: 404 });
    }
    
    return new Response(JSON.stringify(portfolio), { status: 200 });
  } catch (error) {
    return new Response("failed to fetch portfiolio", { status: 500 });
  }
};
