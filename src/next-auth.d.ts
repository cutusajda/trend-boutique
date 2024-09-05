import { UserRole } from "@prisma/client";
import NextAuth, { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  first_name?: string;
  last_name?: string;
  role?: UserRole;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }

  interface JWT {
    sub?: string;
    role?: UserRole;
    first_name?: string;
    last_name?: string;
  }
}
