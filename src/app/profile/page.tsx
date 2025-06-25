"use client";

import { useState } from "react";
import Image from "next/image";

import useAuthGuard from "@/hooks/useAuthGuard";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function ProfilePage() {
  const { user, loading } = useAuthGuard();
  const [activeTab, setActiveTab] = useState<"profile" | "settings">("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    profileImage: user?.profileImage || "",
  });
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");

  if (loading) return <LoadingSpinner text="กำลังโหลดโปรไฟล์..." />;
  if (!user) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    // เรียก API update user
    const res = await fetch("/api/user", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (res.ok) {
      setMessage("บันทึกข้อมูลสำเร็จ");
      setIsEditing(false);
    } else {
      setMessage(data.message || "เกิดข้อผิดพลาด");
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    if (passwords.newPassword !== passwords.confirmPassword) {
      setMessage("รหัสผ่านใหม่ไม่ตรงกัน");
      return;
    }
    const res = await fetch("/api/user/password", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(passwords),
    });
    const data = await res.json();
    if (res.ok) {
      setMessage("เปลี่ยนรหัสผ่านสำเร็จ");
      setIsChangingPassword(false);
      setPasswords({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } else {
      setMessage(data.message || "เกิดข้อผิดพลาด");
    }
  };

  function isValidImageUrl(url: string) {
    // ตรวจสอบเบื้องต้นว่า url ลงท้ายด้วยนามสกุลไฟล์รูปภาพ
    return /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(url);
  }

  // ตรวจสอบว่าเป็น external URL หรือไม่
  function isExternalUrl(url: string) {
    try {
      const urlObj = new URL(url);
      return urlObj.protocol === "http:" || urlObj.protocol === "https:";
    } catch {
      return false;
    }
  }

  return (
    <div className="space-y-6">
      <section className="bg-blue-50 p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-4">โปรไฟล์ของฉัน</h1>
        <p className="text-lg mb-6">
          จัดการข้อมูลส่วนตัวและการตั้งค่าบัญชีของคุณ
        </p>
      </section>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex border-b">
          <button
            className={`flex-1 py-4 px-6 text-center font-medium ${
              activeTab === "profile"
                ? "bg-blue-50 text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:bg-gray-50"
            }`}
            onClick={() => setActiveTab("profile")}
          >
            ข้อมูลส่วนตัว
          </button>
          <button
            className={`flex-1 py-4 px-6 text-center font-medium ${
              activeTab === "settings"
                ? "bg-blue-50 text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:bg-gray-50"
            }`}
            onClick={() => setActiveTab("settings")}
          >
            การตั้งค่า
          </button>
        </div>
        <div className="p-6">
          {message && <div className="mb-4 text-green-600">{message}</div>}
          {activeTab === "profile" ? (
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="flex flex-col items-center">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden bg-gray-200 mb-4">
                      {formData.profileImage &&
                      isValidImageUrl(formData.profileImage) ? (
                        <>
                          <Image
                            src={formData.profileImage}
                            alt="Profile"
                            fill
                            className="object-cover"
                            unoptimized={isExternalUrl(formData.profileImage)}
                            onError={(e) => {
                              // ถ้าโหลดรูปไม่สำเร็จ ให้แสดง fallback
                              const target = e.target as HTMLImageElement;
                              target.style.display = "none";
                              const parent = target.parentElement;
                              if (parent) {
                                const fallback = parent.querySelector(
                                  ".fallback"
                                ) as HTMLElement;
                                if (fallback) fallback.style.display = "flex";
                              }
                            }}
                          />
                          <div
                            className="fallback absolute inset-0 flex items-center justify-center"
                            style={{ display: "none" }}
                          >
                            <span className="text-4xl text-gray-400">👤</span>
                          </div>
                        </>
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-4xl text-gray-400">👤</span>
                        </div>
                      )}
                    </div>
                    <button
                      className="text-blue-600 hover:underline text-sm font-medium"
                      onClick={() => setIsEditing(true)}
                    >
                      เปลี่ยนรูปโปรไฟล์ (URL)
                    </button>
                  </div>
                </div>
                <div className="md:w-2/3">
                  {isEditing ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          ชื่อ-นามสกุล
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          อีเมล
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="profileImage"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          URL รูปโปรไฟล์
                        </label>
                        <input
                          type="text"
                          id="profileImage"
                          name="profileImage"
                          value={formData.profileImage}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="https://example.com/image.jpg"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          ตัวอย่าง: https://picsum.photos/200/200,
                          https://via.placeholder.com/200x200
                        </p>
                      </div>
                      <div className="flex justify-end space-x-3">
                        <button
                          type="button"
                          onClick={() => setIsEditing(false)}
                          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                        >
                          ยกเลิก
                        </button>
                        <button
                          type="submit"
                          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        >
                          บันทึก
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div>
                      <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold">ข้อมูลส่วนตัว</h2>
                        <button
                          onClick={() => setIsEditing(true)}
                          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        >
                          แก้ไข
                        </button>
                      </div>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h3 className="text-sm font-medium text-gray-500">
                              ชื่อ-นามสกุล
                            </h3>
                            <p className="mt-1">{user.name}</p>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-500">
                              อีเมล
                            </h3>
                            <p className="mt-1">{user.email}</p>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-500">
                              URL รูปโปรไฟล์
                            </h3>
                            <p className="mt-1 break-all">
                              {user.profileImage}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <button
                onClick={() => setIsChangingPassword(!isChangingPassword)}
                className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
              >
                เปลี่ยนรหัสผ่าน
              </button>
              {isChangingPassword && (
                <form
                  onSubmit={handlePasswordSubmit}
                  className="space-y-4 mt-4 max-w-md"
                >
                  <div>
                    <label
                      htmlFor="currentPassword"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      รหัสผ่านปัจจุบัน
                    </label>
                    <input
                      type="password"
                      id="currentPassword"
                      name="currentPassword"
                      value={passwords.currentPassword}
                      onChange={handlePasswordChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="newPassword"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      รหัสผ่านใหม่
                    </label>
                    <input
                      type="password"
                      id="newPassword"
                      name="newPassword"
                      value={passwords.newPassword}
                      onChange={handlePasswordChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      ยืนยันรหัสผ่านใหม่
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={passwords.confirmPassword}
                      onChange={handlePasswordChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex justify-end space-x-3">
                    <button
                      type="button"
                      onClick={() => setIsChangingPassword(false)}
                      className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                    >
                      ยกเลิก
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                    >
                      บันทึก
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
