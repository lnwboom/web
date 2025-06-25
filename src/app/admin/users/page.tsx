"use client";

import { useState, useEffect } from "react";
import useAuthGuard from "@/hooks/useAuthGuard";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useRouter } from "next/navigation";

interface User {
  _id: string;
  name: string;
  email: string;
  role: "user" | "admin";
  createdAt: string;
}

export default function AdminUsersPage() {
  const { user, loading } = useAuthGuard();
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
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
      const response = await fetch("/api/admin/users", {
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
    } catch (error) {
      setMessage("เกิดข้อผิดพลาดในการโหลดข้อมูล");
    } finally {
      setLoadingUsers(false);
    }
  };

  const handleRoleChange = async (
    userId: string,
    newRole: "user" | "admin"
  ) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("/api/admin/users", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          userId,
          role: newRole,
        }),
      });

      if (response.ok) {
        setMessage("อัปเดตบทบาทสำเร็จ");
        fetchUsers(); // Refresh data
      } else {
        const data = await response.json();
        setMessage(data.message || "เกิดข้อผิดพลาด");
      }
    } catch (error) {
      setMessage("เกิดข้อผิดพลาดในการอัปเดต");
    }
  };

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return "-";
    return new Date(dateStr).toLocaleDateString("th-TH");
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
            จัดการผู้ใช้
          </h1>
          <p className="text-gray-600">จัดการบทบาทและสิทธิ์ของผู้ใช้ในระบบ</p>
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
                    บทบาท
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-blue-700 uppercase tracking-wider">
                    วันที่สมัคร
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
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          user.role === "admin"
                            ? "bg-purple-100 text-purple-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {user.role === "admin" ? "ผู้ดูแล" : "ผู้ใช้"}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                      {formatDate(user.createdAt)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <select
                        value={user.role}
                        onChange={(e) =>
                          handleRoleChange(
                            user._id,
                            e.target.value as "user" | "admin"
                          )
                        }
                        className="px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="user">ผู้ใช้</option>
                        <option value="admin">ผู้ดูแล</option>
                      </select>
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
