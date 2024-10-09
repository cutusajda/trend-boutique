import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useSession } from "next-auth/react";
import { useAuthStore } from "@/lib/store";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Utility Method To Get User From Session Or Global State
export const getUser = () => {
  const { data: session } = useSession();
  const { user } = useAuthStore();

  if (session && session.user) {
    return session.user;
  } else if (user) {
    return user;
  } else {
    return null;
  }
};
