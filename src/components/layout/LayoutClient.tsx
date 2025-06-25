"use client";

import { useState, useEffect, useCallback, ReactNode } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import { AuthProvider } from "@/components/layout/Sidebar";

export default function LayoutClient({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth < 1024; // เปลี่ยนเป็น lg breakpoint
      setIsMobile(newIsMobile);

      // บนมือถือ sidebar จะปิดเสมอ
      if (newIsMobile) {
        setIsSidebarOpen(false);
      } else {
        // บนเดสก์ท็อป sidebar จะเปิดเสมอ
        setIsSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = useCallback(() => {
    console.log("Toggle sidebar called, current state:", isSidebarOpen);
    setIsSidebarOpen((prev) => {
      const newState = !prev;
      console.log("New sidebar state:", newState);
      return newState;
    });
  }, [isSidebarOpen]);

  // ปิด sidebar เมื่อคลิกนอก sidebar บนมือถือ
  const closeSidebar = useCallback(() => {
    console.log(
      "Close sidebar called, isMobile:",
      isMobile,
      "current state:",
      isSidebarOpen
    );
    if (isMobile && isSidebarOpen) {
      console.log("Closing sidebar...");
      setIsSidebarOpen(false);
    }
  }, [isMobile, isSidebarOpen]);

  // คำนวณ margin สำหรับ main content
  const getMainContentMargin = () => {
    if (isMobile) {
      return "ml-0"; // มือถือไม่มี margin
    }
    return isSidebarOpen ? "ml-64" : "ml-20"; // เดสก์ท็อปมี margin ตาม sidebar state
  };

  // Debug: แสดงสถานะใน console
  useEffect(() => {
    console.log("LayoutClient State:", { isSidebarOpen, isMobile });
  }, [isSidebarOpen, isMobile]);

  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          isMobile={isMobile}
          toggleSidebar={toggleSidebar}
          closeSidebar={closeSidebar}
        />

        {/* Main Content Wrapper */}
        <div
          className={`transition-all duration-300 ease-in-out ${getMainContentMargin()}`}
        >
          {/* Main Content */}
          <main className="min-h-screen">
            <div className="container mx-auto p-4 lg:p-6 pt-20 lg:pt-6 pb-8">
              {children}
            </div>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </AuthProvider>
  );
}
