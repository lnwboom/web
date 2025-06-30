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
            (E-leaming)เพื่อให้ผู้เรียนเข้าใจและสามารถปฏิบัติขั้นตอนการประกอบแบตเตอรี่แรงกันสูงได้อย่างถูกต้องและปลอดภัย
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

      {/* Course Overview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              หลักสูตรการประกอบแบตเตอรี่ไฟฟ้าแรงดันสูง
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  ข้อมูลมาตรฐานอาชีพ
                </h3>
              </div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      ชื่อมาตรฐานอาชีพ:
                    </h4>
                    <p className="text-gray-700">
                      สาขาวิชาชีพผลิตชิ้นส่วนยานยนต์ สาขายานยนต์ไฟฟ้า
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">อาชีพ:</h4>
                    <p className="text-gray-700">
                      ช่างเทคนิคประกอบแบตเตอรี่แรงดันสูง ระดับ 4
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      ประวัติการปรับปรุง:
                    </h4>
                    <p className="text-gray-700">
                      จัดทำมาตรฐานอาชีพและคุณวุฒิวิชาชีพใหม่
                      สาขาวิชาชีพผลิตชิ้นส่วนยานยนต์ สาขายานยนต์ไฟฟ้า พ.ศ. 2565
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      ข้อมูลเบื้องต้น:
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      มาตรฐานอาชีพนี้มุ่งเน้นที่กลุ่มบุคลากรที่ปฏิบัติงานด้านอุตสาหกรรมยานยนต์ไฟฟ้า
                      เพื่อรองรับการพัฒนาและการขยายตัวของยานยนต์ไฟฟ้าของประเทศ
                      ประกอบด้วยการปฏิบัติงานด้านการออกแบบ ประกอบ
                      และทดสอบแบตเตอรี่แรงดันสูงสำหรับยานยนต์ไฟฟ้าเป็นหลัก
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  คุณลักษณะของผลการเรียนรู้
                </h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                เป็นผู้มีสมรรถนะและทักษะทางเทคนิคในการประยุกต์หลักการ
                เลือกใช้เครื่องมือและทำงานตามมาตรฐาน
                แก้ปัญหาทางเทคนิคหน้างานควบคู่กับการใช้คู่มือในการปฏิบัติงาน
              </p>
              <h4 className="font-semibold text-gray-900 mb-4">สมรรถนะหลัก:</h4>
              <div className="space-y-3">
                {[
                  "ปฏิบัติงานในการประกอบแบตเตอรี่ไฟฟ้าแรงดันสูงได้อย่างปลอดภัย",
                  "คัดเลือกและจัดเตรียมเซลล์แบตเตอรี่สำหรับการประกอบได้ตามคู่มือ",
                  "จัดเตรียมวัสดุและอุปกรณ์สำหรับการประกอบแบตเตอรี่มอดูลหรือแพ็คได้ถูกต้องตามแบบ",
                  "ประกอบแบตเตอรี่เป็นมอดูลหรือแพ็คได้ถูกต้องตามแบบ",
                  "ทดสอบความเป็นฉนวนของแบตเตอรี่มอดูลหรือแพ็คได้ตามมาตรฐาน",
                  "ทดสอบคุณลักษณะของแบตเตอรี่มอดูลหรือแพ็คได้ตามมาตรฐาน",
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              โมดูลการเรียนรู้
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-4"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              เรียนรู้เนื้อหาครบถ้วนตั้งแต่พื้นฐานไปจนถึงเทคนิคขั้นสูง
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learnModules.map((module, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="h-32 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-4xl font-bold text-blue-600">
                  {idx + 1}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {module.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {module.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      ระยะเวลา: {module.duration}
                    </span>
                    <Link
                      href={`/learn`}
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold group-hover:gap-3 transition-all duration-300"
                    >
                      ดูบทเรียน
                      <span className="text-lg">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block bg-white bg-opacity-20 px-6 py-3 rounded-full text-lg font-medium mb-6">
              🚀 พร้อมที่จะเริ่มการเรียนรู้แล้วหรือยัง?
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            เริ่มต้นการเดินทางสู่ความเชี่ยวชาญ
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            เริ่มต้นด้วยการทำแบบทดสอบก่อนเรียนเพื่อประเมินความรู้พื้นฐานของคุณ
            หรือเริ่มเรียนบทเรียนแรกได้เลย
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/assessment/pretest"
              className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3"
            >
              <span>📝</span>
              ทำแบบทดสอบก่อนเรียน
            </Link>
            <Link
              href="/learn/1"
              className="group bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3"
            >
              <span>🎓</span>
              เริ่มบทเรียนแรก
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
