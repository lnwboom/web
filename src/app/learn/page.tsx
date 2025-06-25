"use client";

import React, { useState } from "react";
import useAuthGuard from "@/hooks/useAuthGuard";

interface VideoItem {
  id: string;
  title: string;
  description: string;
  duration: string;
  thumbnail?: string;
}

const Chapter1Page = () => {
  const { user, loading } = useAuthGuard();

  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  if (loading) return <div>กำลังโหลด...</div>;
  if (!user) return null;

  const videos: VideoItem[] = [
    {
      id: "1BAZhYBTAtMwduH-EbEgb9j2H1L4BXrjF",
      title: "อุปกรณ์ป้องกันส่วนบุคคล",
      description:
        "เรียนรู้เกี่ยวกับอุปกรณ์ป้องกันส่วนบุคคลที่จำเป็นสำหรับการทำงานกับแบตเตอรี่ไฟฟ้าแรงดันสูง",
      duration: "7:15",
    },
    {
      id: "12gfVG1nGILgZQI25YtcXzWnW6Py7rCTE",
      title: "เครื่องมือและอุปกรณ์วัดทางไฟฟ้า",
      description:
        "แนะนำเครื่องมือและอุปกรณ์วัดทางไฟฟ้าที่ใช้ในการทำงานกับแบตเตอรี่ รวมถึงวิธีการใช้งานที่ถูกต้อง",
      duration: "3:53",
    },
    {
      id: "1N7xnmKrVWRNWpbTL7mBU1n4QTamaYMeW",
      title: "การจัดการพื้นที่ปฏิบัติงาน",
      description:
        "วิธีการจัดการพื้นที่ปฏิบัติงานให้ปลอดภัยและมีประสิทธิภาพสำหรับการทำงานกับแบตเตอรี่",
      duration: "2:31",
    },
    {
      id: "1rVndMG9bBm8miNqG3qRvwiY-cbizbnIe",
      title: "ทดสอบความจุของเซลล์แบตเตอรี่",
      description:
        "ขั้นตอนการทดสอบความจุของเซลล์แบตเตอรี่อย่างถูกต้องและปลอดภัย",
      duration: "5:36",
    },
    {
      id: "12IRoOMGzvoFUIz8TPNvxR4XaEpO5nxfk",
      title: "การคัดเลือกเซลล์แบตเตอรี่",
      description:
        "วิธีการคัดเลือกเซลล์แบตเตอรี่ที่มีคุณภาพและเหมาะสมสำหรับการใช้งาน",
      duration: "2:56",
    },
    {
      id: "16Oc9CCaIr5zR2rfS_8PPbRHr_VEvPiP-",
      title: "การประกอบแบตเตอรี่",
      description: "ขั้นตอนการประกอบแบตเตอรี่อย่างละเอียดและปลอดภัยตามมาตรฐาน",
      duration: "9:08",
    },
    {
      id: "1lHUKkMr-GqA7EJmBZdTY39ij6sZZNJZz",
      title: "การทดสอบความเป็นฉนวน",
      description: "วิธีการทดสอบความเป็นฉนวนของแบตเตอรี่เพื่อความปลอดภัย",
      duration: "1:36",
    },
    {
      id: "1Yu3UMaU0tXRW-e35ANr2r5RfKDLkW8Sc",
      title: "การทดสอบฟังก์ชั่นการป้องกัน",
      description: "การทดสอบฟังก์ชั่นการป้องกันของระบบแบตเตอรี่ไฟฟ้าแรงดันสูง",
      duration: "2:00",
    },
  ];

  const getEmbedUrl = (videoId: string) => {
    return `https://drive.google.com/file/d/${videoId}/preview`;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {selectedVideo
              ? (() => {
                  const idx = videos.findIndex((v) => v.id === selectedVideo);
                  const title = videos.find((v) => v.id === selectedVideo)?.title;
                  return idx !== -1 && title
                    ? `บทที่ ${idx + 1} ${title}`
                    : title;
                })()
              : "กรุณาเลือกบทเรียน"}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {selectedVideo
              ? videos.find((v) => v.id === selectedVideo)?.description
              : "เรียนรู้พื้นฐานการทำงานกับแบตเตอรี่ไฟฟ้าแรงดันสูง ครอบคลุมอุปกรณ์ป้องกันส่วนบุคคล เครื่องมือวัด การจัดการพื้นที่ปฏิบัติงาน และขั้นตอนการทำงานที่ปลอดภัยตามมาตรฐานอาชีพ"}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Video Player */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {selectedVideo ? (
                <div className="aspect-video">
                  <iframe
                    src={getEmbedUrl(selectedVideo)}
                    className="w-full h-full"
                    allowFullScreen
                    title="Video Player"
                    frameBorder="0"
                  />
                </div>
              ) : (
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="mt-2 text-sm text-gray-500">
                      เลือกวิดีโอจากรายการด้านขวา
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Video Information */}
            {selectedVideo && (
              <div className="mt-4 bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {videos.find((v) => v.id === selectedVideo)?.title}
                </h3>
                <p className="text-gray-600 mb-3">
                  {videos.find((v) => v.id === selectedVideo)?.description}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  ระยะเวลา:{" "}
                  {videos.find((v) => v.id === selectedVideo)?.duration}
                </div>
              </div>
            )}
          </div>

          {/* Video List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                รายการวิดีโอการสอน
              </h2>
              <div className="space-y-3">
                {videos.map((video, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                      selectedVideo === video.id
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                    }`}
                    onClick={() => setSelectedVideo(video.id)}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <span className="text-blue-600 font-semibold text-sm">
                            {index + 1}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-gray-900 truncate">
                          {video.title}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                          {video.description}
                        </p>
                        <div className="flex items-center mt-2">
                          <span className="text-xs text-gray-400">
                            {video.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Learning Objectives */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            วัตถุประสงค์การเรียนรู้
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                ความรู้ (Knowledge)
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  เข้าใจหลักการทำงานของแบตเตอรี่ไฟฟ้าแรงดันสูง
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  รู้จักอุปกรณ์ป้องกันส่วนบุคคลที่จำเป็น
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  เข้าใจเครื่องมือและอุปกรณ์วัดทางไฟฟ้า
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  รู้จักมาตรฐานความปลอดภัยในการทำงาน
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                ทักษะ (Skills)
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  สามารถจัดการพื้นที่ปฏิบัติงานได้อย่างปลอดภัย
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  ทดสอบความจุและความเป็นฉนวนของแบตเตอรี่ได้
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  ประกอบและทดสอบแบตเตอรี่ได้อย่างถูกต้อง
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  ใช้เครื่องมือวัดทางไฟฟ้าได้อย่างถูกต้อง
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Course Information */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">
            ข้อมูลเพิ่มเติม
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-blue-800">
            <div>
              <strong>จำนวนวิดีโอ:</strong> 8 วิดีโอ
            </div>
            <div>
              <strong>ระยะเวลารวม:</strong> ประมาณ 35 นาที
            </div>
            <div>
              <strong>ระดับ:</strong> พื้นฐาน - ปานกลาง
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chapter1Page;
