"use client";

import PretestPage from "../pretest/page";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PosttestPage() {
  const router = useRouter();

  useEffect(() => {
    // Check if user has visited the study page (e.g., via localStorage flag)
    if (!localStorage.getItem("studied")) {
      router.replace("/assessment/study");
    } else {
      // Ensure the URL has ?type=post
      if (!window.location.search.includes("type=post")) {
        router.replace("/assessment/posttest?type=post");
      }
    }
  }, [router]);

  return <PretestPage />;
}
