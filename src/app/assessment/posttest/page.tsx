import { Suspense } from "react";
import PosttestClient from "./PosttestClient";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function PosttestPage() {
  return (
    <Suspense fallback={<LoadingSpinner text="กำลังโหลด..." />}>
      <PosttestClient />
    </Suspense>
  );
}
