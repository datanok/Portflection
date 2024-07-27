import { connectToDB } from "@utils/database";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";
import Portfolio from "@models/portfoliodata";
import { NextResponse } from "next/server";

const ObjectId = require("mongodb").ObjectId;

export const DELETE = async (request) => {
  try {
    // Connect to the database
    await connectToDB();

    // Check if the user is authenticated
    const session = await getServerSession(authOptions);
    if (!session) {
      return new NextResponse(
        JSON.stringify({ success: false, message: "Unauthorized" }),
        { status: 401 }
      );
    }

    // Delete the portfolio
    const result = await Portfolio.findOneAndDelete({
      userID: new ObjectId(session.user.id),
    });

    // Check if the document was actually deleted
    const deletedPortfolio = result?.value || result; // Handle both cases (newer and older drivers)

    if (!deletedPortfolio) {
      return new NextResponse(
        JSON.stringify({ success: false, message: "Portfolio not found" }),
        { status: 404 }
      );
    }

    return new NextResponse(
      JSON.stringify({
        success: true,
        message: "Portfolio deleted successfully",
        data: deletedPortfolio,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to delete portfolio:", error); // Log the error for debugging

    return new NextResponse(
      JSON.stringify({
        success: false,
        message: "Failed to delete portfolio",
        error:
          process.env.NODE_ENV === "production"
            ? "An error occurred"
            : error.message, // Hide detailed error messages in production
      }),
      { status: 500 }
    );
  }
};
