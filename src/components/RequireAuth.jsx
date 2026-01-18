"use client";

import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Spinner from "./Spinner";

export default function RequireAuth({ children }) {
  const { status } = useSession();
//   const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <Spinner/>
  }

  // If authenticated, render children
  return <>{children}</>;
}
