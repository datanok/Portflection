// auth.js
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";

import User from "@/models/user";
import { connectToDB } from "@utils/database";

export const { 
  handlers, 
  auth,
  signIn,
  signOut 
} = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Github({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
        console.log(session,"seassioun")
      if (session.user) {
        try {
          await connectToDB();
          const sessionUser = await User.findOne({ email: session.user.email });
          if (sessionUser) {
            session.user.id = sessionUser._id.toString();
            session.user.username = sessionUser.username;
          }
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      }
      return session;
    },
    async signIn({ user, account, profile }) {
      try {
        await connectToDB();
        const userExists = await User.findOne({ email: profile?.email });
        
        if (!userExists) {
          const username = `${profile?.name
            ?.replace(/\s+/g, "")
            .toLowerCase()}_${Math.random().toString(36).substring(2, 9)}`;
            
          await User.create({
            email: profile?.email,
            username: username,
            image: user.image,
            name: profile?.name,
          });
        }
        return true;
      } catch (error) {
        console.error("SignIn error:", error);
        return false;
      }
    },
  },
  pages: {
    signIn: '/main/login', // Update this if your login page path is different
  },
});

// Create route handlers
export const GET = handlers.GET;
export const POST = handlers.POST;