import { connectToDB } from "@utils/database";
import Portfolio from "@models/portfoliodata";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    // Validate that params.id is present
    if (!params.id) {
      return new NextResponse(
        JSON.stringify({ success: false, message: "User ID is required" }),
        { status: 400 }
      );
    }

    // Fetch the portfolio data based on userID
    const portfolio = await Portfolio.findOne({ userID: params.id });

    // Check if portfolio was found
    if (!portfolio) {
      return new NextResponse(
        JSON.stringify({ success: false, message: "Portfolio not found" }),
        { status: 404 }
      );
    }

    // Return the fetched portfolio data
    return new NextResponse(
      JSON.stringify({ success: true, data: portfolio }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to fetch portfolio:", error); // Log the error for debugging

    // Handle specific types of errors if necessary
    if (error.name === "MongoError") {
      return new NextResponse(
        JSON.stringify({ success: false, message: "Database error occurred" }),
        { status: 500 }
      );
    }

    // Return a generic error message
    return new NextResponse(
      JSON.stringify({ success: false, message: "Failed to fetch portfolio" }),
      { status: 500 }
    );
  }
};
