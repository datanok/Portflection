import { connectToDB } from "@utils/database";
import Portfolio from "@models/portfoliodata";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    const portfolio = await Portfolio.findOne({ userID: params.id });
    return new Response(JSON.stringify(portfolio), { status: 200 });
  } catch (error) {
    return new Response("failed to fetch portfiolio", { status: 500 });
  }
};
