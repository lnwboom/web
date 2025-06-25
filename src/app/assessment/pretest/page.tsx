import { Suspense } from "react";
import PretestClient from "./PretestClient";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function PretestPage() {
  return (
    <Suspense fallback={<LoadingSpinner text="กำลังโหลด..." />}>
      <PretestClient />
    </Suspense>
  );
}
