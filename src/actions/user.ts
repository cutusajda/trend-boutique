"use server";
import { auth } from "@/auth";
import { getUserDetails as ud } from "@/data/user";


export const getUserDetails = async () => {
  const session = await auth();

  if (!session?.user.id) {
    return {
      message: "User not authenticated",
      status: 401,
    };
  }

  // Utility Method To Get User By ID
  const user = await ud(session.user.id);
  return { message: "Success", data: user };
};
