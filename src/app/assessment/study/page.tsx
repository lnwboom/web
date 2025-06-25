"use client";

import { useRouter } from "next/navigation";

export default function StudyPage() {
  const router = useRouter();

  const handleStudied = () => {
    localStorage.setItem("studied", "true");
    router.push("/assessment/posttest");
  };

  return (
    <div className="max-w-xl mx-auto my-20 p-8 bg-white rounded-lg shadow-md text-center">
      <h1 className="text-2xl font-bold mb-4">
        โปรดศึกษาบทเรียนก่อนทำแบบทดสอบหลังเรียน
      </h1>
      <p className="mb-8 text-gray-700">
        กรุณาศึกษาเนื้อหาทั้งหมดในบทเรียนให้ครบถ้วนก่อนที่จะทำแบบทดสอบหลังเรียน
        เพื่อประเมินความรู้ที่ได้รับอย่างถูกต้อง
      </p>
      <button
        onClick={handleStudied}
        className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition"
      >
        ฉันได้ศึกษาบทเรียนแล้ว
      </button>
    </div>
  );
}
