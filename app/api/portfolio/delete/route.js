import { connectToDB } from "@utils/database";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";
import Portfolio from "@models/portfoliodata";
import { NextResponse } from "next/server";

const ObjectId = require("mongodb").ObjectId;

export const DELETE = async (request) => {
  try {
    await connectToDB();
    const session = await getServerSession(authOptions);
    if (!session) {
      return new NextResponse(
        JSON.stringify({ success: false, message: "Unauthorized" }),
        { status: 401 }
      );
    }

    const portfolio = await Portfolio.findOneAndDelete({
      userID: new ObjectId(session.user.id),
    });
    if (!portfolio) {
      return new NextResponse(
        JSON.stringify({ success: false, message: "Portfolio not found" }),
        { status: 404 }
      );
    }

    return new NextResponse(
      JSON.stringify({
        success: true,
        message: "Portfolio deleted successfully",
        data: portfolio,
      }),
      { status: 200 }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: "Failed to delete portfolio",
        error: error.message,
      }),
      { status: 500 }
    );
  }
};
