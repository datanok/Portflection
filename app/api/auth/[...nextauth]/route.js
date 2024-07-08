import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import User from "@models/user";
import { connectToDB } from "@utils/database";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      if (session.user) {
        try {
          await connectToDB();
          const sessionUser = await User.findOne({ email: session.user.email });
          if (sessionUser) {
            session.user.id = sessionUser._id.toString();
          } else {
            console.log("User not found in database");
          }
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      }
      return session;
    },
    async signIn({ user, account, profile, email, credentials }) {
      try {
        await connectToDB();
        const userExists = await User.findOne({ email: profile?.email });
        if (!userExists) {
          await User.create({
            email: profile?.email,
            username: `${profile?.name
              .replace(/\s+/g, "")
              .toLowerCase()}_${Math.random().toString(36).substring(2, 9)}`,
            image: user.image,
            name: profile?.name,
          });
        }
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };