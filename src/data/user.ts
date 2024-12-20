import db from "@/lib/db";

// Util Function To Get User Through Unique Email
export const getUserByEmail = async (email: string) => {
    try {
        return await db.user.findUnique({
                    where: {
                        email
                    }
                });
    } catch (error) {
        return null
    }
};


// Util Function to Get User Through Unique ID
export const getUserById = async (id: string = "") => {
    try {
        return await db.user.findUnique({
                    where: {
                        id
                    }
                });
    } catch (error) {
        return null
    }
};


// Utils To Get User Details
export const getUserDetails = async (id: string = "") => {
    try {
        return await db.user.findUnique({
                    where: {
                        id
                    },
                    select: {
                        id: true,
                        first_name: true,
                        last_name: true,
                        email: true,
                        emailVerified: true,
                        role: true,
                        password: false,
                    }
                });
    } catch (error) {
        return null
    }
};