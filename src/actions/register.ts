"use server";

import { getUserByEmail } from "@/data/user";
import { RegisterSchema } from "@/schemas";
import bcrypt from "bcryptjs";
import db from "@/lib/db";
import * as z from "zod";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Fields!" };
  }

  const { first_name, last_name, email, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  // Check User With This Email Already Exists In Database
  const existingUser = await getUserByEmail(email);

  if(existingUser){
    return { error: "Email already exists!" }
  }

  await db.user.create({
    data: {
      first_name,
      last_name,
      email,
      password: hashedPassword
    }
  });

  // TODO: Send Verification Token

  return { success: "User Registered 😎" };
};
