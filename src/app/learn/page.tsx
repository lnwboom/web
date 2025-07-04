"use client";

import React, { useState } from "react";
import useAuthGuard from "@/hooks/useAuthGuard";
import LoadingSpinner from "@/components/LoadingSpinner";

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
  if (loading) return <LoadingSpinner text="กำลังโหลดบทเรียน..." />;
  if (!user) return null;

  const videos: VideoItem[] = [
    {
      id: "1WRYwLq95lXL7Aw3wuxE8wROpETngwSue",
      title: "อุปกรณ์ป้องกันส่วนบุคคล",
      description:
        "เรียนรู้เกี่ยวกับอุปกรณ์ป้องกันส่วนบุคคลที่จำเป็นสำหรับการประกอบแบตเตอรี่แรงดันสูง",
      duration: "7:15",
    },
    {
      id: "1AeHVYbih4IRvSoKncg5KrYwvQhJPgy0I",
      title: "เครื่องมือและอุปกรณ์วัดทางไฟฟ้า",
      description:
        "แนะนำเครื่องมือและอุปกรณ์วัดทางไฟฟ้าที่ใช้สําหรับการประกอบแบตเตอรี่แรงดันสูง",
      duration: "3:53",
    },
    {
      id: "1_Be6cvIGeCCVEw_kgu_bIUIbzz5yLunw",
      title: "การจัดการพื้นที่ปฏิบัติงาน",
      description:
        "การจัดการพื้นที่ปฏิบัติงานตามหลักความปลอดภัยสําหรับการประกอบแบตเตอรี่แรงดันสูง",
      duration: "2:31",
    },
    {
      id: "1lK4BOX2msSobGLVXCyoKi8qL5Lch0AZE",
      title: "ทดสอบความจุของเซลล์แบตเตอรี่",
      description: "ขั้นตอนการทดสอบความจุของเซลล์แบตเตอรี่",
      duration: "5:36",
    },
    {
      id: "1FE4NKD-1mrYjmtSPt8t-p8EHnwmDMg31",
      title: "การคัดเลือกเซลล์แบตเตอรี่",
      description:
        "การคัดเลือกเซลล์แบตเตอรี่เพื่อจัดกลุ่มเซลล์แบตเตอรี่ตามคุณสมบัติสำหรับประกอบเป็นมอดูล",
      duration: "2:56",
    },
    {
      id: "10iDr9hwc3Pww_zEAeqlps_0zhWa0Yua0",
      title: "การประกอบแบตเตอรี่",
      description:
        "ขั้นตอนการประกอบเซลล์แบตเตอรี่เป็นมอดูลพร้อมติดตั้งอุปกรณ์ BMS",
      duration: "9:08",
    },
    {
      id: "1OCq7HfJiX2QIEST73CLt2TEgrwBuKNg7",
      title: "การทดสอบความเป็นฉนวน",
      description: "การทดสอบความเป็นฉนวนของผลิตภัณฑ์ได้ตามมาตรฐาน",
      duration: "1:36",
    },
    {
      id: "1SlI7gPAD9XlkilZSDXzjvpQ-KNp24tiU",
      title: "การทดสอบฟังก์ชั่นการป้องกัน",
      description:
        "การทดสอบฟังก์ชั่นการป้องกันของระบบแบตเตอรี่แพ็คด้วยการทดสอบอุณหภูมิ",
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
                  const title = videos.find(
                    (v) => v.id === selectedVideo
                  )?.title;
                  return idx !== -1 && title ? `${title}` : title;
                })()
              : "กรุณาเลือกบทเรียน"}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {selectedVideo
              ? videos.find((v) => v.id === selectedVideo)?.description
              : "เรียนรู้การประกอบแบตเตอรี่แรงดันสูง ครอบคลุมอุปกรณ์ป้องกันส่วนบุคคล เครื่องมือวัด การจัดการพื้นที่ปฏิบัติงาน และขั้นตอนการทำงานที่ปลอดภัย"}
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
