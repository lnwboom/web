"use client";

import { useState, useEffect } from "react";
import useAuthGuard from "@/hooks/useAuthGuard";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useRouter } from "next/navigation";

interface UserScore {
  _id: string;
  name: string;
  email: string;
  role: "user" | "admin";
  preTestScore?: {
    score: number;
    date: string;
  };
  postTestScore?: {
    score: number;
    date: string;
  };
}

export default function AdminScoresPage() {
  const { user, loading } = useAuthGuard();
  const router = useRouter();
  const [users, setUsers] = useState<UserScore[]>([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [editingUser, setEditingUser] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({
    preTestScore: "",
    postTestScore: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!loading && user) {
      if (user.role !== "admin") {
        router.replace("/score");
        return;
      }
      fetchUsers();
    }
  }, [user, loading, router]);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("/api/admin/scores", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUsers(data.users);
      } else {
        setMessage("ไม่สามารถโหลดข้อมูลผู้ใช้ได้");
      }
    } catch {
      setMessage("เกิดข้อผิดพลาดในการโหลดข้อมูล");
    } finally {
      setLoadingUsers(false);
    }
  };

  const handleEdit = (user: UserScore) => {
    setEditingUser(user._id);
    setEditForm({
      preTestScore: user.preTestScore?.score?.toString() || "",
      postTestScore: user.postTestScore?.score?.toString() || "",
    });
  };

  const handleSave = async (userId: string) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("/api/admin/scores", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          userId,
          preTestScore: editForm.preTestScore
            ? {
                score: parseInt(editForm.preTestScore),
                date: new Date().toISOString(),
              }
            : undefined,
          postTestScore: editForm.postTestScore
            ? {
                score: parseInt(editForm.postTestScore),
                date: new Date().toISOString(),
              }
            : undefined,
        }),
      });

      if (response.ok) {
        setMessage("อัปเดตคะแนนสำเร็จ");
        setEditingUser(null);
        fetchUsers(); // Refresh data
      } else {
        const data = await response.json();
        setMessage(data.message || "เกิดข้อผิดพลาด");
      }
    } catch {
      setMessage("เกิดข้อผิดพลาดในการอัปเดต");
    }
  };

  const handleCancel = () => {
    setEditingUser(null);
    setEditForm({ preTestScore: "", postTestScore: "" });
  };

  const getStatus = (score?: number) => {
    if (!score) return "-";
    const percent = (score / 20) * 100;
    return percent >= 60 ? "ผ่าน" : "ไม่ผ่าน";
  };

  const getStatusColor = (score?: number) => {
    if (!score) return "bg-gray-200 text-gray-600";
    const percent = (score / 20) * 100;
    return percent >= 60
      ? "bg-green-100 text-green-800"
      : "bg-red-100 text-red-800";
  };

  if (loading || loadingUsers) {
    return <LoadingSpinner text="กำลังโหลด..." />;
  }

  if (!user || user.role !== "admin") {
    return null;
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">
            จัดการคะแนนผู้ใช้
          </h1>
          <p className="text-gray-600">ดูและแก้ไขคะแนนของผู้ใช้ทั้งหมดในระบบ</p>
        </div>

        {message && (
          <div
            className={`mb-4 p-4 rounded-lg ${
              message.includes("สำเร็จ")
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {message}
          </div>
        )}

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                    ผู้ใช้
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-blue-700 uppercase tracking-wider">
                    ก่อนเรียน
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-blue-700 uppercase tracking-wider">
                    หลังเรียน
                  </th>

                  <th className="px-6 py-3 text-center text-xs font-medium text-blue-700 uppercase tracking-wider">
                    การจัดการ
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user) => (
                  <tr key={user._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {user.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {user.email}
                        </div>
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            user.role === "admin"
                              ? "bg-purple-100 text-purple-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {user.role === "admin" ? "ผู้ดูแล" : "ผู้ใช้"}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      {editingUser === user._id ? (
                        <input
                          type="number"
                          min="0"
                          max="20"
                          value={editForm.preTestScore}
                          onChange={(e) =>
                            setEditForm((prev) => ({
                              ...prev,
                              preTestScore: e.target.value,
                            }))
                          }
                          className="w-16 px-2 py-1 border border-gray-300 rounded text-center"
                        />
                      ) : (
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {user.preTestScore
                              ? `${user.preTestScore.score}/20`
                              : "-"}
                          </div>
                          <span
                            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                              user.preTestScore?.score
                            )}`}
                          >
                            {getStatus(user.preTestScore?.score)}
                          </span>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      {editingUser === user._id ? (
                        <input
                          type="number"
                          min="0"
                          max="20"
                          value={editForm.postTestScore}
                          onChange={(e) =>
                            setEditForm((prev) => ({
                              ...prev,
                              postTestScore: e.target.value,
                            }))
                          }
                          className="w-16 px-2 py-1 border border-gray-300 rounded text-center"
                        />
                      ) : (
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {user.postTestScore
                              ? `${user.postTestScore.score}/20`
                              : "-"}
                          </div>
                          <span
                            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                              user.postTestScore?.score
                            )}`}
                          >
                            {getStatus(user.postTestScore?.score)}
                          </span>
                        </div>
                      )}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      {editingUser === user._id ? (
                        <div className="flex justify-center space-x-2">
                          <button
                            onClick={() => handleSave(user._id)}
                            className="px-3 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700"
                          >
                            บันทึก
                          </button>
                          <button
                            onClick={handleCancel}
                            className="px-3 py-1 bg-gray-600 text-white text-xs rounded hover:bg-gray-700"
                          >
                            ยกเลิก
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleEdit(user)}
                          className="px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700"
                        >
                          แก้ไข
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {users.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            ไม่มีผู้ใช้ในระบบ
          </div>
        )}
      </div>
    </div>
  );
}
