import { Suspense } from "react";
import PretestClient from "./PretestClient";

export default function PretestPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PretestClient />
    </Suspense>
  );
}
