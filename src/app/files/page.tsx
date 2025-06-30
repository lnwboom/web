"use client";

import { useState } from "react";
import Link from "next/link";

interface FileItem {
  id: number;
  name: string;
  type: "pdf" | "video" | "image" | "doc";
  url: string;
  description: string;
  module?: number;
  duration?: string;
}

export default function FilesPage() {
  const [activeTab, setActiveTab] = useState<"all" | "documents" | "videos">(
    "all"
  );
  const [searchQuery, setSearchQuery] = useState("");

  // ข้อมูลไฟล์
  const files: FileItem[] = [
    {
      id: 2,
      name: "อุปกรณ์ป้องกันส่วนบุคคล.mp4",
      type: "video",
      url: "https://drive.google.com/file/d/1BAZhYBTAtMwduH-EbEgb9j2H1L4BXrjF/preview",
      description:
        "เรียนรู้เกี่ยวกับอุปกรณ์ป้องกันส่วนบุคคลที่จำเป็นสำหรับการทำงานกับแบตเตอรี่ไฟฟ้าแรงดันสูง",
      module: 1,
      duration: "7:15",
    },
    {
      id: 3,
      name: "เครื่องมือและอุปกรณ์วัดทางไฟฟ้า.mp4",
      type: "video",
      url: "https://drive.google.com/file/d/12gfVG1nGILgZQI25YtcXzWnW6Py7rCTE/preview",
      description:
        "แนะนำเครื่องมือและอุปกรณ์วัดทางไฟฟ้าที่ใช้ในการทำงานกับแบตเตอรี่ รวมถึงวิธีการใช้งานที่ถูกต้อง",
      module: 1,
      duration: "3:53",
    },
    {
      id: 4,
      name: "การจัดการพื้นที่ปฏิบัติงาน.mp4",
      type: "video",
      url: "https://drive.google.com/file/d/1N7xnmKrVWRNWpbTL7mBU1n4QTamaYMeW/preview",
      description:
        "วิธีการจัดการพื้นที่ปฏิบัติงานให้ปลอดภัยและมีประสิทธิภาพสำหรับการทำงานกับแบตเตอรี่",
      module: 1,
      duration: "2:31",
    },
    {
      id: 5,
      name: "ทดสอบความจุของเซลล์แบตเตอรี่.mp4",
      type: "video",
      url: "https://drive.google.com/file/d/1rVndMG9bBm8miNqG3qRvwiY-cbizbnIe/preview",
      description:
        "ขั้นตอนการทดสอบความจุของเซลล์แบตเตอรี่อย่างถูกต้องและปลอดภัย",
      module: 1,
      duration: "5:36",
    },
    {
      id: 6,
      name: "การคัดเลือกเซลล์แบตเตอรี่.mp4",
      type: "video",
      url: "https://drive.google.com/file/d/12IRoOMGzvoFUIz8TPNvxR4XaEpO5nxfk/preview",
      description:
        "วิธีการคัดเลือกเซลล์แบตเตอรี่ที่มีคุณภาพและเหมาะสมสำหรับการใช้งาน",
      module: 1,
      duration: "2:56",
    },
    {
      id: 7,
      name: "การประกอบแบตเตอรี่.mp4",
      type: "video",
      url: "https://drive.google.com/file/d/16Oc9CCaIr5zR2rfS_8PPbRHr_VEvPiP-/preview",
      description: "ขั้นตอนการประกอบแบตเตอรี่อย่างละเอียดและปลอดภัยตามมาตรฐาน",
      module: 1,
      duration: "9:08",
    },
    {
      id: 8,
      name: "การทดสอบความเป็นฉนวน.mp4",
      type: "video",
      url: "https://drive.google.com/file/d/1lHUKkMr-GqA7EJmBZdTY39ij6sZZNJZz/preview",
      description: "วิธีการทดสอบความเป็นฉนวนของแบตเตอรี่เพื่อความปลอดภัย",
      module: 1,
      duration: "1:36",
    },
    {
      id: 9,
      name: "การทดสอบฟังก์ชั่นการป้องกัน.mp4",
      type: "video",
      url: "https://drive.google.com/file/d/1Yu3UMaU0tXRW-e35ANr2r5RfKDLkW8Sc/preview",
      description: "การทดสอบฟังก์ชั่นการป้องกันของระบบแบตเตอรี่ไฟฟ้าแรงดันสูง",
      module: 1,
      duration: "2:00",
    },
  ];

  // กรองไฟล์ตามแท็บที่เลือกและคำค้นหา
  const filteredFiles = files.filter((file) => {
    // กรองตามแท็บ
    if (
      activeTab === "documents" &&
      (file.type === "pdf" || file.type === "doc")
    ) {
      return file.name.toLowerCase().includes(searchQuery.toLowerCase());
    } else if (activeTab === "videos" && file.type === "video") {
      return file.name.toLowerCase().includes(searchQuery.toLowerCase());
    } else if (activeTab === "all") {
      return file.name.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return false;
  });

  // ไอคอนสำหรับประเภทไฟล์
  const getFileIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return (
          <div className="w-10 h-10 flex items-center justify-center bg-red-100 text-red-600 rounded">
            <span className="text-xs font-bold">PDF</span>
          </div>
        );
      case "video":
        return (
          <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded">
            <span className="text-xs font-bold">VID</span>
          </div>
        );
      case "image":
        return (
          <div className="w-10 h-10 flex items-center justify-center bg-green-100 text-green-600 rounded">
            <span className="text-xs font-bold">IMG</span>
          </div>
        );
      case "doc":
        return (
          <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded">
            <span className="text-xs font-bold">DOC</span>
          </div>
        );
      default:
        return (
          <div className="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-600 rounded">
            <span className="text-xs font-bold">FILE</span>
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      <section className="bg-blue-50 p-6 rounded-lg">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          ไฟล์เอกสารและวิดีโอการสอน
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          เอกสารและวิดีโอประกอบการเรียนรู้เกี่ยวกับการประกอบแบตเตอรี่ไฟฟ้าแรงดันสูงระดับ
          4 รวมถึงมาตรฐานอาชีพและคุณวุฒิวิชาชีพ
        </p>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex space-x-2">
            <button
              className={`px-4 py-2 rounded-md ${
                activeTab === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab("all")}
            >
              ทั้งหมด
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                activeTab === "documents"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab("documents")}
            >
              เอกสาร
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                activeTab === "videos"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab("videos")}
            >
              วิดีโอ
            </button>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="ค้นหาไฟล์..."
              className="w-full md:w-64 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg
              className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </section>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {filteredFiles.length > 0 ? (
          <div className="divide-y divide-gray-200">
            {filteredFiles.map((file) => (
              <div key={file.id} className="p-4 hover:bg-gray-50 transition">
                <div className="flex items-start">
                  {getFileIcon(file.type)}
                  <div className="ml-4 flex-1">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                      <h3 className="text-lg font-medium text-gray-900">
                        {file.name}
                      </h3>
                      <div className="flex items-center space-x-2 mt-2 md:mt-0">
                        {file.duration && (
                          <>
                            <span className="text-sm text-gray-500">
                              {file.duration}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                    <p className="mt-1 text-sm text-gray-600">
                      {file.description}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <div>
                        {file.module && (
                          <Link
                            href={`/learn`}
                            className="text-sm text-blue-600 hover:underline"
                          >
                            เกี่ยวข้องกับบทเรียนที่ {file.module}
                          </Link>
                        )}
                      </div>
                      <div className="flex space-x-2">
                        <a
                          href={file.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100"
                        >
                          {file.type === "video" ? "ดูวิดีโอ" : "ดูเอกสาร"}
                        </a>
                        {file.type === "pdf" && (
                          <a
                            href={file.url}
                            download
                            className="px-3 py-1 text-sm bg-gray-50 text-gray-600 rounded-md hover:bg-gray-100"
                          >
                            ดาวน์โหลด
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center">
            <p className="text-gray-500">ไม่พบไฟล์ที่ตรงกับการค้นหา</p>
          </div>
        )}
      </div>

      {/* Summary Section */}
      <div className="bg-blue-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-3">สรุปข้อมูล</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-blue-800">
          <div>
            <strong>เอกสาร PDF:</strong> 1 ไฟล์
          </div>
          <div>
            <strong>วิดีโอการสอน:</strong> 9 วิดีโอ
          </div>
        </div>
      </div>
    </div>
  );
}
