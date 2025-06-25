"use client";

import useAuthGuard from "@/hooks/useAuthGuard";
import LoadingSpinner from "@/components/LoadingSpinner";
import Link from "next/link";

export default function ScorePage() {
  const { user, loading } = useAuthGuard();

  if (loading) return <LoadingSpinner text="กำลังโหลดคะแนน..." />;
  if (!user) return null;

  // ถ้าเป็น admin แสดงลิงก์ไปหน้า admin
  if (user.role === "admin") {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-12">
        <div className="w-full max-w-2xl rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6 text-blue-800 text-center">
            จัดการคะแนนผู้ใช้
          </h1>
          <div className="text-center space-y-4">
            <p className="text-lg text-gray-600">
              คุณเป็นผู้ดูแลระบบ สามารถดูและแก้ไขคะแนนของผู้ใช้ทั้งหมดได้
            </p>
            <Link
              href="/admin/scores"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              ไปยังหน้าจัดการคะแนน
            </Link>
          </div>
        </div>
      </div>
    );
  }

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
