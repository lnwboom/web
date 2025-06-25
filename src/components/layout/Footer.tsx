import { useEffect, useState } from "react";
import Link from "next/link";

const Footer = () => {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gray-800 text-white py-8 transition-all duration-300 ease-in-out">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">เกี่ยวกับเรา</h3>
            <p className="text-gray-300">
              เว็บไซต์สื่อการศึกษาเกี่ยวกับการประกอบแบตเตอรี่ไฟฟ้าแรงดันสูงระดับ 4
              ที่ออกแบบมาเพื่อให้ความรู้และทดสอบความเข้าใจของผู้เรียน 
              จัดทำโดย ทิพวัลย์ โทวงษ์ และ สิริกร ปันชัย 
              สาขาวิชาครุศาสตร์เครื่องกล คณะครุศาสตร์อุตสาหกรรมและเทคโนโลยีพระจอมเกล้าธนบุรี
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">ลิงก์ด่วน</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  หน้าหลัก
                </Link>
              </li>
              <li>
                <Link href="/assessment" className="text-gray-300 hover:text-white">
                  แบบทดสอบ
                </Link>
              </li>
              <li>
                <Link href="/learn" className="text-gray-300 hover:text-white">
                  บทเรียน
                </Link>
              </li>
              <li>
                <Link href="/score" className="text-gray-300 hover:text-white">
                  คะแนน
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">ติดต่อเรา</h3>
            <p className="text-gray-300">
              หากมีคำถามหรือข้อเสนอแนะ กรุณาติดต่อเราได้ที่อีเมล:
              <a href="mailto:contact@example.com" className="text-blue-400 hover:underline ml-1">
                contact@example.com
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>
            &copy; {year ?? ""} การประกอบแบตเตอรี่ไฟฟ้าแรงดันสูงระดับ 4. สงวนลิขสิทธิ์.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;