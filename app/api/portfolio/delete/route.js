import { connectToDB } from "@utils/database";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";
import Portfolio from "@models/portfoliodata";
import { NextResponse } from "next/server";

const ObjectId = require('mongodb').ObjectId;
export const GET = async (request) => {
  try {
    await connectToDB();
    const session = await getServerSession(authOptions);
    if (!session) {
      return new Response("Unauthorized", { status: 401 });
    }
    
    const portfolio = await Portfolio.findOneAndDelete({userID: new ObjectId(session.user.id) });
    if (!portfolio) {
      return new NextResponse("Portfolio not found", { status: 404 });
    }
    
    return new Response(JSON.stringify(portfolio), { status: 200 });
  } catch (error) {
    return new Response("failed to fetch portfiolio"+error, { status: 500 });
  }
};
