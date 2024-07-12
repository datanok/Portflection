import { connectToDB } from "@utils/database";
import Portfolio from "@models/portfoliodata";
import { redirect } from "next/navigation";
import { isRedirectError, permanentRedirect } from "next/dist/client/components/redirect";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    const portfolio = await Portfolio.findOne({ userID: params.id });
    
    return new Response(JSON.stringify(portfolio), { status: 200 });
  } catch (error) {
    if (isRedirectError(error)) { 
      throw error 
    } else {
      console.log('other error')
      return new Response("failed to fetch portfiolio", { status: 500 });
    }
  }
};
