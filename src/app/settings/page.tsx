"use client";

import { getUser } from "@/lib/utils";

const Settings = () => {
  const user = getUser();

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg p-4">
          <p><strong>Name:</strong> {user.first_name} {user.last_name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          {/* Add more user details as needed */}
        </div>
      </div>
    </>
  );
};

export default Settings;
