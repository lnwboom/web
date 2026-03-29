"use client";

import { useSearchParams } from "next/navigation";
import useAuthGuard from "@/hooks/useAuthGuard";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function PretestPage() {
  const { user, loading } = useAuthGuard();
  const searchParams = useSearchParams();
  const testType = searchParams.get("type") || "pre"; // 'pre' or 'post'

  if (loading) return <LoadingSpinner text="กำลังโหลดแบบทดสอบ..." />;
  if (!user) return null;

  const isPretest = testType === "pre";
  const title = isPretest ? "แบบทดสอบก่อนเรียน" : "แบบทดสอบหลังเรียน";
  const description = isPretest
    ? "กรุณาทำแบบทดสอบก่อนเรียนเพื่อประเมินความรู้พื้นฐานของคุณ"
    : "กรุณาทำแบบทดสอบหลังเรียนเพื่อประเมินความเข้าใจหลังจากศึกษาบทเรียน";
  const formLink = isPretest
    ? "https://forms.gle/dGLUYVNoejUorvSy9"
    : "https://forms.gle/WSEk3f3Y4kZ7mEhb9";

  return (
    <div className="max-w-xl mx-auto my-20 p-8 bg-white rounded-xl shadow-lg border border-gray-100 text-center">
      <div className="mb-6">
        <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
        <p className="text-gray-600">{description}</p>
      </div>

      <div className="space-y-4">
        <a
          href={formLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-medium hover:bg-blue-700 transition duration-200 shadow-md hover:shadow-lg"
        >
          คลิกเพื่อทำแบบทดสอบ
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
