import { connectToDB } from "@utils/database";
import User from "@models/user";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";

const ObjectId = require('mongodb').ObjectId;
export const GET = async (request) => {
  try {
    await connectToDB();
    const session = await getServerSession(authOptions);
    
    const user = await User.findOne({ _id: new ObjectId(session.user.id) });
    if (!user) {
      return new Response("User not found", { status: 404 });
    }
    
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new Response("failed to fetch portfiolio"+error, { status: 500 });
  }
};
