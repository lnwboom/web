"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useAuthGuard from "@/hooks/useAuthGuard";

interface TestScore {
  id: number;
  name: string;
  score: number;
  totalQuestions: number;
  date: string;
  passed: boolean;
}

interface ModuleProgress {
  id: number;
  title: string;
  progress: number;
  completed: boolean;
}

export default function ScorePage() {
  const { user, loading } = useAuthGuard();
  const [activeTab, setActiveTab] = useState<"scores" | "certificate">(
    "scores"
  );

  if (loading) return <div>กำลังโหลด...</div>;
  if (!user) return null;

  // ดึงคะแนน preTestScore และ postTestScore จาก user
  const preTestScore = user.preTestScore;
  const postTestScore = user.postTestScore;
  const totalQuestions = 20; // สมมติว่าข้อสอบมี 20 ข้อ (ปรับตามจริงได้)

  // ฟังก์ชันแปลงวันที่
  const formatDate = (dateStr?: string) => {
    if (!dateStr) return "-";
    const d = new Date(dateStr);
    return d.toLocaleDateString("th-TH");
  };

  // ฟังก์ชันเช็คผ่าน/ไม่ผ่าน
  const getStatus = (scoreObj?: { score: number }) => {
    if (!scoreObj) return "-";
    const percent = (scoreObj.score / totalQuestions) * 100;
    return percent >= 60 ? "ผ่าน" : "ไม่ผ่าน";
  };

  // ฟังก์ชันคืนสีสถานะ
  const getStatusColor = (scoreObj?: { score: number }) => {
    if (!scoreObj) return "bg-gray-200 text-gray-600";
    const percent = (scoreObj.score / totalQuestions) * 100;
    return percent >= 60
      ? "bg-green-100 text-green-800"
      : "bg-red-100 text-red-800";
  };

  // ข้อมูลคะแนนการทดสอบ
  const testScores: TestScore[] = [
    {
      id: 1,
      name: "แบบทดสอบก่อนเรียน",
      score: 6,
      totalQuestions: 10,
      date: "15/03/2023",
      passed: true,
    },
    {
      id: 2,
      name: "แบบทดสอบหลังเรียนโมดูล 1",
      score: 8,
      totalQuestions: 10,
      date: "18/03/2023",
      passed: true,
    },
    {
      id: 3,
      name: "แบบทดสอบหลังเรียนโมดูล 2",
      score: 9,
      totalQuestions: 10,
      date: "20/03/2023",
      passed: true,
    },
    {
      id: 4,
      name: "แบบทดสอบหลังเรียนโมดูล 3",
      score: 7,
      totalQuestions: 10,
      date: "22/03/2023",
      passed: true,
    },
    {
      id: 5,
      name: "แบบทดสอบหลังเรียน",
      score: 42,
      totalQuestions: 50,
      date: "25/03/2023",
      passed: true,
    },
  ];

  // ข้อมูลความคืบหน้าของโมดูล
  const moduleProgress: ModuleProgress[] = [
    {
      id: 1,
      title: "บทนำสู่แบตเตอรี่ไฟฟ้าแรงดันสูง",
      progress: 100,
      completed: true,
    },
    {
      id: 2,
      title: "ความปลอดภัยในการทำงานกับแบตเตอรี่แรงดันสูง",
      progress: 100,
      completed: true,
    },
    {
      id: 3,
      title: "ส่วนประกอบของแบตเตอรี่แรงดันสูง",
      progress: 100,
      completed: true,
    },
    {
      id: 4,
      title: "ขั้นตอนการประกอบแบตเตอรี่",
      progress: 100,
      completed: true,
    },
    {
      id: 5,
      title: "การทดสอบและตรวจสอบคุณภาพ",
      progress: 100,
      completed: true,
    },
  ];

  // ตรวจสอบว่าผ่านเกณฑ์ได้รับใบรับรองหรือไม่
  const hasCertificate = testScores.some(
    (score) => score.name === "แบบทดสอบหลังเรียน" && score.passed
  );

  // คำนวณคะแนนเฉลี่ยรวม
  const calculateAverageScore = () => {
    const totalScore = testScores.reduce(
      (sum, test) => sum + (test.score / test.totalQuestions) * 100,
      0
    );
    return (totalScore / testScores.length).toFixed(2);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  py-12">
      <div className="w-full max-w-2xl rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-blue-800 text-center">
          คะแนนก่อนและหลังเรียน
        </h1>
        <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden shadow">
          <thead className="bg-blue-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-blue-700 uppercase tracking-wider">
                ประเภท
              </th>
              <th className="px-6 py-3 text-center text-xs font-semibold text-blue-700 uppercase tracking-wider">
                คะแนน
              </th>
              <th className="px-6 py-3 text-center text-xs font-semibold text-blue-700 uppercase tracking-wider">
                เปอร์เซ็นต์
              </th>
              <th className="px-6 py-3 text-center text-xs font-semibold text-blue-700 uppercase tracking-wider">
                วันที่
              </th>
              <th className="px-6 py-3 text-center text-xs font-semibold text-blue-700 uppercase tracking-wider">
                สถานะ
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-center">
            <tr>
              <td className="px-6 py-4 font-medium text-gray-900 text-left">
                ก่อนเรียน
              </td>
              <td className="px-6 py-4">
                {preTestScore ? `${preTestScore.score}/${totalQuestions}` : "-"}
              </td>
              <td className="px-6 py-4">
                {preTestScore
                  ? `${((preTestScore.score / totalQuestions) * 100).toFixed(
                      0
                    )}%`
                  : "-"}
              </td>
              <td className="px-6 py-4">
                {preTestScore ? formatDate(preTestScore.date) : "-"}
              </td>
              <td className="px-6 py-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                    preTestScore
                  )}`}
                >
                  {getStatus(preTestScore)}
                </span>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-medium text-gray-900 text-left">
                หลังเรียน
              </td>
              <td className="px-6 py-4">
                {postTestScore
                  ? `${postTestScore.score}/${totalQuestions}`
                  : "-"}
              </td>
              <td className="px-6 py-4">
                {postTestScore
                  ? `${((postTestScore.score / totalQuestions) * 100).toFixed(
                      0
                    )}%`
                  : "-"}
              </td>
              <td className="px-6 py-4">
                {postTestScore ? formatDate(postTestScore.date) : "-"}
              </td>
              <td className="px-6 py-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                    postTestScore
                  )}`}
                >
                  {getStatus(postTestScore)}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
