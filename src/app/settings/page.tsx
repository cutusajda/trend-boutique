"use client";

import { useSession } from "next-auth/react";

const Settings = () => {
  const { data: session } = useSession();


  return (
    <>
      
    </>
  );
};

export default Settings;
