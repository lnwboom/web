"use client";

import React, { ReactNode, useContext, createContext } from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

// ไอคอนสำหรับเมนู
const HomeIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
);

const AssessmentIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
    />
  </svg>
);

const LearnIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    />
  </svg>
);

const ScoreIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
);

const FilesIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
    />
  </svg>
);

const ProfileIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

const CreatorIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

const LoginIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

const ChevronRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

interface SubMenuItem {
  name: string;
  path: string;
}
interface MenuItem {
  name: string;
  path?: string;
  icon: ReactNode;
  subItems?: SubMenuItem[];
}
interface SidebarProps {
  isSidebarOpen: boolean;
  isMobile: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
}

const menuItems: MenuItem[] = [
  { name: "หน้าหลัก", path: "/", icon: <HomeIcon /> },
  {
    name: "แบบทดสอบ",
    icon: <AssessmentIcon />,
    subItems: [
      { name: "แบบทดสอบก่อนเรียน", path: "/assessment/pretest" },
      { name: "แบบทดสอบหลังเรียน", path: "/assessment/posttest" },
      { name: "แบบฝึกหัด", path: "/assessment/exercise" },
    ],
  },
  {
    name: "บทเรียน",
    icon: <LearnIcon />,
    subItems: [
      { name: "บทที่ 1: ความรู้พื้นฐาน", path: "/learn" },
      { name: "บทที่ 3: การบำรุงรักษา", path: "/learn/chapter3" },
    ],
  },
  { name: "คะแนน", path: "/score", icon: <ScoreIcon /> },
  { name: "ไฟล์", icon: <FilesIcon />, path: "/files" },
  { name: "โปรไฟล์", path: "/profile", icon: <ProfileIcon /> },
  { name: "ผู้จัดทำ", path: "/creator", icon: <CreatorIcon /> },
];

// AuthContext for global login state
const AuthContext = createContext<{
  isLoggedIn: boolean;
  setIsLoggedIn: (v: boolean) => void;
}>({ isLoggedIn: false, setIsLoggedIn: () => {} });

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const check = () => setIsLoggedIn(!!localStorage.getItem("token"));
    check();
    window.addEventListener("storage", check);
    window.addEventListener("tokenchange", check);
    return () => {
      window.removeEventListener("storage", check);
      window.removeEventListener("tokenchange", check);
    };
  }, []);
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

function setToken(token: string | null) {
  if (token) {
    localStorage.setItem("token", token);
  } else {
    localStorage.removeItem("token");
  }
  window.dispatchEvent(new Event("tokenchange"));
}

const MobileNavigation: React.FC<{
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeSidebar: () => void;
}> = ({ isMenuOpen, toggleMenu, closeSidebar }) => {
  const pathname = usePathname();
  const [openDropdowns, setOpenDropdowns] = useState<{
    [key: string]: boolean;
  }>({});
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const toggleDropdown = (menuName: string) => {
    setOpenDropdowns((prev) => ({ ...prev, [menuName]: !prev[menuName] }));
  };

  // ป้องกันการ scroll เมื่อ dropdown เปิด
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  // Debug: แสดงสถานะใน console
  useEffect(() => {
    console.log("Mobile Navigation State:", { isMenuOpen, pathname });
  }, [isMenuOpen, pathname]);

  const handleToggleMenu = () => {
    console.log("Mobile toggle menu clicked, current state:", isMenuOpen);
    toggleMenu();
  };

  return (
    <div className="lg:hidden">
      {/* Mobile Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50 h-16 shadow-lg">
        <Link href="/" className="text-xl font-bold flex items-center">
          <img src="/images/battery.png" alt="Logo" className="h-8 mr-2" />
          <span className="hidden sm:block">แบตเตอรี่ไฟฟ้า</span>
          <span className="sm:hidden">แบตเตอรี่</span>
        </Link>

        {/* Toggle Menu Button */}
        <button
          onClick={handleToggleMenu}
          className="relative p-2 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all duration-200"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
              }`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Full Screen Menu */}
      <div
        className={`fixed top-16 left-0 right-0 bottom-0 bg-gradient-to-b from-blue-900 to-blue-800 z-40 transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <nav className="h-full flex flex-col">
          {/* Navigation Menu */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-6">
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    {item.subItems ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className="flex justify-between items-center w-full py-4 px-6 text-left rounded-xl hover:bg-blue-700 transition-all duration-200 group"
                        >
                          <span className="flex items-center text-white group-hover:text-blue-100">
                            <span className="text-blue-200 group-hover:text-blue-100 transition-colors duration-200">
                              {item.icon}
                            </span>
                            <span className="ml-4 font-medium text-lg">
                              {item.name}
                            </span>
                          </span>
                          <ChevronDownIcon
                            className={`w-5 h-5 text-blue-200 transition-all duration-200 ${
                              openDropdowns[item.name]
                                ? "rotate-180 text-white"
                                : ""
                            }`}
                          />
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            openDropdowns[item.name]
                              ? "max-h-96 opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <ul className="ml-12 mt-2 space-y-2">
                            {item.subItems.map((subItem) => (
                              <li key={subItem.path}>
                                <Link
                                  href={subItem.path}
                                  className={`block py-3 px-6 text-base rounded-lg transition-all duration-200 transform hover:translate-x-2 ${
                                    pathname === subItem.path
                                      ? "bg-blue-600 text-white font-medium border-l-4 border-white"
                                      : "text-blue-100 hover:bg-blue-700 hover:text-white"
                                  }`}
                                  onClick={closeSidebar}
                                >
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.path || "#"}
                        className={`flex items-center py-4 px-6 rounded-xl transition-all duration-200 group transform hover:translate-x-2 ${
                          pathname === item.path
                            ? "bg-blue-600 text-white font-medium border-l-4 border-white"
                            : "text-white hover:bg-blue-700 hover:text-blue-100"
                        }`}
                        onClick={closeSidebar}
                      >
                        <span
                          className={`transition-colors duration-200 ${
                            pathname === item.path
                              ? "text-white"
                              : "text-blue-200 group-hover:text-blue-100"
                          }`}
                        >
                          {item.icon}
                        </span>
                        <span className="ml-4 font-medium text-lg">
                          {item.name}
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="p-6 border-t border-blue-600 bg-blue-800">
            <div className="space-y-4">
              {/* Login/Logout Button */}
              {isLoggedIn ? (
                <button
                  onClick={() => {
                    setToken(null);
                    setIsLoggedIn(false);
                    window.location.href = "/auth/login";
                  }}
                  className="flex items-center justify-center w-full px-6 py-4 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 text-lg"
                >
                  <span className="ml-3">ออกจากระบบ</span>
                </button>
              ) : (
                <Link
                  href="/auth/login"
                  className="flex items-center justify-center w-full px-6 py-4 bg-white text-blue-700 rounded-xl hover:bg-blue-50 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 text-lg"
                  onClick={closeSidebar}
                >
                  <LoginIcon />
                  <span className="ml-3">เข้าสู่ระบบ</span>
                </Link>
              )}

              {/* Version Info */}
              <div className="text-center text-sm text-blue-200">
                เวอร์ชัน 1.0.0
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Backdrop Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-blue-900 bg-opacity-20 backdrop-blur-sm z-30"
          onClick={closeSidebar}
        />
      )}
    </div>
  );
};

const DesktopSidebar: React.FC<
  Omit<SidebarProps, "isMobile" | "closeSidebar">
> = ({ isSidebarOpen, toggleSidebar }) => {
  const [openDropdowns, setOpenDropdowns] = useState<{
    [key: string]: boolean;
  }>({});
  const pathname = usePathname();
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  // รีเซ็ต dropdowns เมื่อ sidebar ปิด
  useEffect(() => {
    if (!isSidebarOpen) {
      setOpenDropdowns({});
    }
  }, [isSidebarOpen]);

  const toggleDropdown = (menuName: string) => {
    setOpenDropdowns((prev) => ({ ...prev, [menuName]: !prev[menuName] }));
  };

  const sidebarWidth = isSidebarOpen ? "w-64" : "w-20";

  return (
    <aside
      className={`hidden lg:flex flex-col fixed top-0 left-0 z-30 h-full bg-gradient-to-b from-blue-900 to-blue-800 text-white transition-all duration-300 ease-in-out ${sidebarWidth} shadow-lg`}
    >
      {/* Header */}
      <div
        className={`p-4 border-b border-blue-700 flex items-center ${
          isSidebarOpen ? "justify-between" : "justify-center"
        }`}
      >
        {isSidebarOpen && (
          <div className="flex items-center">
            <img src="/images/battery.png" alt="Logo" className="h-8 mr-2" />
            <Link href="/" className="text-xl font-bold">
              แบตเตอรี่ไฟฟ้า
            </Link>
          </div>
        )}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md hover:bg-blue-700 focus:outline-none transition-colors duration-200"
          aria-label={isSidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
        >
          {isSidebarOpen ? (
            <ChevronRightIcon className="w-5 h-5" />
          ) : (
            <MenuIcon />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-grow overflow-y-auto">
        <ul className="p-4">
          {menuItems.slice(0, 5).map((item) => (
            <li key={item.name}>
              {item.subItems ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className={`flex items-center w-full px-4 py-3 my-1 text-left transition-colors duration-200 rounded-lg focus:outline-none ${
                      openDropdowns[item.name] ||
                      item.subItems?.some((sub) => pathname === sub.path)
                        ? "bg-blue-600 text-white shadow"
                        : "hover:bg-blue-700 text-white"
                    } ${!isSidebarOpen && "justify-center"}`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {isSidebarOpen && (
                      <>
                        <span>{item.name}</span>
                        <span className="ml-auto flex items-center">
                          <ChevronDownIcon
                            className={`w-4 h-4 transition-transform ${
                              openDropdowns[item.name] ? "rotate-180" : ""
                            }`}
                          />
                        </span>
                      </>
                    )}
                  </button>
                  {openDropdowns[item.name] && isSidebarOpen && (
                    <ul className="ml-8 mt-1">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.path}>
                          <Link
                            href={subItem.path}
                            className={`block px-4 py-2 my-1 rounded-lg text-sm transition-colors duration-200 ${
                              pathname === subItem.path
                                ? "bg-blue-500 text-white"
                                : "hover:bg-blue-700 text-white"
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  href={item.path || "#"}
                  className={`flex items-center px-4 py-3 my-1 rounded-lg transition-colors duration-200 ${
                    pathname === item.path
                      ? "bg-blue-600 text-white shadow"
                      : "hover:bg-blue-700 text-white"
                  } ${!isSidebarOpen && "justify-center"}`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {isSidebarOpen && <span>{item.name}</span>}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom Navigation */}
      <nav className="mb-4">
        <ul>
          {menuItems.slice(5).map((item) => (
            <li key={item.name}>
              <Link
                href={item.path || "#"}
                className={`flex items-center px-4 py-3 my-1 rounded-lg transition-colors duration-200 ${
                  pathname === item.path
                    ? "bg-blue-600 text-white shadow"
                    : "hover:bg-blue-700 text-white"
                } ${!isSidebarOpen && "justify-center"}`}
              >
                <span className="mr-3">{item.icon}</span>
                {isSidebarOpen && <span>{item.name}</span>}
              </Link>
            </li>
          ))}
          <li>
            <div className={`px-2 ${!isSidebarOpen && "flex justify-center"}`}>
              {/* Login/Logout Button */}
              {isLoggedIn ? (
                <button
                  onClick={() => {
                    setToken(null);
                    setIsLoggedIn(false);
                    window.location.href = "/auth/login";
                  }}
                  className="flex items-center justify-center w-full px-6 py-4 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 text-lg"
                >
                  <span className="ml-3">ออกจากระบบ</span>
                </button>
              ) : (
                <Link
                  href="/auth/login"
                  className="flex items-center justify-center w-full px-6 py-4 bg-white text-blue-700 rounded-xl hover:bg-blue-50 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 text-lg"
                >
                  <LoginIcon />
                  <span className="ml-3">เข้าสู่ระบบ</span>
                </Link>
              )}
            </div>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

const Sidebar: React.FC<SidebarProps> = ({
  isSidebarOpen,
  toggleSidebar,
  closeSidebar,
}) => {
  return (
    <>
      <MobileNavigation
        isMenuOpen={isSidebarOpen}
        toggleMenu={toggleSidebar}
        closeSidebar={closeSidebar}
      />
      <DesktopSidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
    </>
  );
};

export default Sidebar;
