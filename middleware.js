
import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export const middleware = NextAuth(authConfig).auth;

export const config = {
  matcher: [
    "/main/edit",
    "/main/profile",
    // Add other protected routes here
    // Optional: Protect all /main routes:
    // "/main/:path*"
  ]
}