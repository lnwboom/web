import Link from "next/link";

export default function Home() {
  const learnModules = [
    {
      id: 1,
      title: "อุปกรณ์ป้องกันส่วนบุคคล",
      description:
        "เรียนรู้เกี่ยวกับอุปกรณ์ป้องกันส่วนบุคคลที่จำเป็นสำหรับการทำงานกับแบตเตอรี่ไฟฟ้าแรงดันสูง",
      duration: "7:15",
    },
    {
      id: 2,
      title: "เครื่องมือและอุปกรณ์วัดทางไฟฟ้า",
      description:
        "แนะนำเครื่องมือและอุปกรณ์วัดทางไฟฟ้าที่ใช้ในการทำงานกับแบตเตอรี่ รวมถึงวิธีการใช้งานที่ถูกต้อง",
      duration: "3:53",
    },
    {
      id: 3,
      title: "การจัดการพื้นที่ปฏิบัติงาน",
      description:
        "วิธีการจัดการพื้นที่ปฏิบัติงานให้ปลอดภัยและมีประสิทธิภาพสำหรับการทำงานกับแบตเตอรี่",
      duration: "2:31",
    },
    {
      id: 4,
      title: "ทดสอบความจุของเซลล์แบตเตอรี่",
      description:
        "ขั้นตอนการทดสอบความจุของเซลล์แบตเตอรี่อย่างถูกต้องและปลอดภัย",
      duration: "5:36",
    },
    {
      id: 5,
      title: "การคัดเลือกเซลล์แบตเตอรี่",
      description:
        "วิธีการคัดเลือกเซลล์แบตเตอรี่ที่มีคุณภาพและเหมาะสมสำหรับการใช้งาน",
      duration: "2:56",
    },
    {
      id: 6,
      title: "การประกอบแบตเตอรี่",
      description: "ขั้นตอนการประกอบแบตเตอรี่อย่างละเอียดและปลอดภัยตามมาตรฐาน",
      duration: "9:08",
    },
    {
      id: 7,
      title: "การทดสอบความเป็นฉนวน",
      description: "วิธีการทดสอบความเป็นฉนวนของแบตเตอรี่เพื่อความปลอดภัย",
      duration: "1:36",
    },
    {
      id: 8,
      title: "การทดสอบฟังก์ชั่นการป้องกัน",
      description: "การทดสอบฟังก์ชั่นการป้องกันของระบบแบตเตอรี่ไฟฟ้าแรงดันสูง",
      duration: "2:00",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white opacity-10 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white opacity-10 rounded-full"></div>
        </div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            การประกอบแบตเตอรี่
            <span className="block text-blue-200">แรงดันสูง</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            บทเรียนอีเลิร์นนิง
            (E-leaning)เพื่อให้ผู้เรียนเข้าใจและสามารถปฏิบัติขั้นตอนการประกอบแบตเตอรี่แรงกันสูงได้อย่างถูกต้อง
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/assessment/pretest"
              className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <span>📝</span>
              เริ่มแบบทดสอบก่อนเรียน
            </Link>
            <Link
              href="/learn"
              className="group bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <span>🎓</span>
              เริ่มเรียนเลย
            </Link>
          </div>
        </div>
      </section>

      

      

      
    </div>
  );
}
