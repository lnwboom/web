import { Suspense } from "react";
import PosttestClient from "./PosttestClient";

export default function PosttestPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PosttestClient />
    </Suspense>
  );
}
