import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const courseModules = [
    {
      id: 1,
      title: "บทนำสู่แบตเตอรี่ไฟฟ้าแรงดันสูง",
      description: "ความรู้พื้นฐานเกี่ยวกับแบตเตอรี่ไฟฟ้าแรงดันสูงและความสำคัญในอุตสาหกรรมยานยนต์ไฟฟ้า",
      duration: "1 ชั่วโมง",
      image: "/images/battery-intro.jpg",
      icon: "🔋",
    },
    {
      id: 2,
      title: "ความปลอดภัยในการทำงานกับแบตเตอรี่แรงดันสูง",
      description: "มาตรการความปลอดภัยและอุปกรณ์ป้องกันที่จำเป็นสำหรับการทำงานกับแบตเตอรี่แรงดันสูง",
      duration: "2 ชั่วโมง",
      image: "/images/safety.jpg",
      icon: "🛡️",
    },
    {
      id: 3,
      title: "ส่วนประกอบของแบตเตอรี่แรงดันสูง",
      description: "โครงสร้างและส่วนประกอบต่างๆ ของแบตเตอรี่แรงดันสูงระดับ 4",
      duration: "3 ชั่วโมง",
      image: "/images/components.jpg",
      icon: "⚙️",
    },
    {
      id: 4,
      title: "ขั้นตอนการประกอบแบตเตอรี่",
      description: "กระบวนการและเทคนิคในการประกอบแบตเตอรี่แรงดันสูงอย่างถูกต้องและปลอดภัย",
      duration: "4 ชั่วโมง",
      image: "/images/assembly.jpg",
      icon: "🔧",
    },
    {
      id: 5,
      title: "การทดสอบและตรวจสอบคุณภาพ",
      description: "วิธีการทดสอบและตรวจสอบคุณภาพของแบตเตอรี่หลังการประกอบ",
      duration: "2 ชั่วโมง",
      image: "/images/testing.jpg",
      icon: "📊",
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
            การประกอบแบตเตอรี่ไฟฟ้า
            <span className="block text-blue-200">แรงดันสูงระดับ 4</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            เรียนรู้ทักษะและความรู้ที่จำเป็นในการประกอบแบตเตอรี่ไฟฟ้าแรงดันสูงสำหรับยานยนต์ไฟฟ้าสมัยใหม่
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
                <h3 className="text-2xl font-bold text-gray-900">ข้อมูลมาตรฐานอาชีพ</h3>
              </div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">ชื่อมาตรฐานอาชีพ:</h4>
                    <p className="text-gray-700">สาขาวิชาชีพผลิตชิ้นส่วนยานยนต์ สาขายานยนต์ไฟฟ้า</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">อาชีพ:</h4>
                    <p className="text-gray-700">ช่างเทคนิคประกอบแบตเตอรี่แรงดันสูง ระดับ 4</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">ประวัติการปรับปรุง:</h4>
                    <p className="text-gray-700">จัดทำมาตรฐานอาชีพและคุณวุฒิวิชาชีพใหม่ สาขาวิชาชีพผลิตชิ้นส่วนยานยนต์ สาขายานยนต์ไฟฟ้า พ.ศ. 2565</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">ข้อมูลเบื้องต้น:</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      มาตรฐานอาชีพนี้มุ่งเน้นที่กลุ่มบุคลากรที่ปฏิบัติงานด้านอุตสาหกรรมยานยนต์ไฟฟ้า เพื่อรองรับการพัฒนาและการขยายตัวของยานยนต์ไฟฟ้าของประเทศ 
                      ประกอบด้วยการปฏิบัติงานด้านการออกแบบ ประกอบ และทดสอบแบตเตอรี่แรงดันสูงสำหรับยานยนต์ไฟฟ้าเป็นหลัก
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
                <h3 className="text-2xl font-bold text-gray-900">คุณลักษณะของผลการเรียนรู้</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                เป็นผู้มีสมรรถนะและทักษะทางเทคนิคในการประยุกต์หลักการ เลือกใช้เครื่องมือและทำงานตามมาตรฐาน 
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
                  "ทดสอบคุณลักษณะของแบตเตอรี่มอดูลหรือแพ็คได้ตามมาตรฐาน"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* คุณสมบัติผู้เรียน */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">คุณสมบัติผู้เรียน</h3>
              <p className="text-gray-700">ผู้ที่จะเข้ารับการประเมินและรับรองคุณวุฒิวิชาชีพ ต้องมีอายุไม่ต่ำกว่า 18 ปีบริบูรณ์ และมีคุณสมบัติอย่างใดอย่างหนึ่งต่อไปนี้:</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "ทางเลือกที่ 1",
                  desc: "มีประสบการณ์ทำงานด้านการผลิตหรือประกอบแบตเตอรี่แรงดันสูงมาไม่น้อยกว่า 3 ปี",
                  icon: "💼"
                },
                {
                  title: "ทางเลือกที่ 2", 
                  desc: "มีประสบการณ์ทำงานมาไม่น้อยกว่า 3 ปี และผ่านการฝึกอบรมเกี่ยวกับการผลิตหรือประกอบแบตเตอรี่มาไม่น้อยกว่า 30 ชั่วโมง",
                  icon: "📚"
                },
                {
                  title: "ทางเลือกที่ 3",
                  desc: "สำเร็จการศึกษาขั้นต่ำระดับประกาศนียบัตรวิชาชีพ (ปวช.) หรือเทียบเท่า และมีประสบการณ์ในการทำงานที่เกี่ยวข้องไม่น้อยกว่า 1 ปี และผ่านการฝึกอบรมเกี่ยวกับการผลิตหรือประกอบแบตเตอรี่มาไม่น้อยกว่า 30 ชั่วโมง",
                  icon: "🎓"
                },
                {
                  title: "ทางเลือกที่ 4",
                  desc: "สำเร็จการศึกษาขั้นต่ำระดับประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.) หรือเทียบเท่า และมีประสบการณ์ในการทำงานที่เกี่ยวข้องไม่น้อยกว่า 6 เดือน และผ่านการฝึกอบรมเกี่ยวกับการผลิตหรือประกอบแบตเตอรี่มาไม่น้อยกว่า 30 ชั่วโมง",
                  icon: "🏆"
                }
              ].map((option, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">{option.icon}</span>
                    <h4 className="font-semibold text-gray-900">{option.title}</h4>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{option.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ข้อมูลเพิ่มเติม */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { title: "ระยะเวลาหลักสูตร", value: "12 ชั่วโมง", icon: "⏱️", color: "blue" },
              { title: "ระดับความยาก", value: "ระดับ 4 (ขั้นสูง)", icon: "📈", color: "orange" },
              { title: "อายุหนังสือรับรอง", value: "3 ปี", icon: "📜", color: "green" }
            ].map((item, index) => (
              <div key={index} className={`bg-gradient-to-br from-${item.color}-50 to-${item.color}-100 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300`}>
                <div className={`w-16 h-16 bg-${item.color}-200 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-lg font-bold text-gray-700">{item.value}</p>
              </div>
            ))}
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
            {courseModules.map((module) => (
              <div key={module.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-100 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-20 group-hover:scale-110 transition-transform duration-300">
                      {module.icon}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {module.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {module.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{module.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">โมดูล {module.id}</span>
                    <Link
                      href={`/learn/${module.id}`}
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold group-hover:gap-3 transition-all duration-300"
                    >
                      เริ่มเรียน
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">เริ่มต้นการเดินทางสู่ความเชี่ยวชาญ</h2>
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
