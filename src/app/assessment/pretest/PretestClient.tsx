"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useAuthGuard from "@/hooks/useAuthGuard";
import LoadingSpinner from "@/components/LoadingSpinner";

// Helper to decode JWT payload (no verify, just decode)
function decodeToken(token: string) {
  try {
    const payload = token.split(".")[1];
    const base64 = payload.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(escape(atob(base64)));
    const decoded = JSON.parse(jsonPayload);
    return decoded;
  } catch {
    return null;
  }
}

interface Question {
  id: number;
  text: string;
  options: (string | { text: string; image?: string })[];
  correctAnswer: number;
  image?: string;
}

export default function PretestPage() {
  const router = useRouter();
  const { user, loading } = useAuthGuard();
  const searchParams = useSearchParams();
  const testType = searchParams.get("type") || "pre"; // 'pre' or 'post'
  const [userName, setUserName] = useState<string>("");

  // จำลองคำถามแบบทดสอบก่อนเรียน
  const questions: Question[] = [
    {
      id: 1,
      text: "ข้อใดเป็นหลักในการสวมใส่อุปกรณ์ป้องกันส่วนบุคคลอย่างถูกต้อง",
      options: [
        "ตรวจสอบสภาพของอุปกรณ์ก่อนใช้งาน",
        "สวมใส่ให้พอดีกับร่างกาย",
        "เลือกใช้อุปกรณ์ที่เหมาะสมกับลักษณะงาน",
        "เลือกใช้อุปกรณ์ที่ผ่านการทดสอบจากสถาบันที่เชื่อถือได้และผ่านการรับรองมาตรฐาน",
        "ถูกทุกข้อ",
      ],
      correctAnswer: 4,
    },
    {
      id: 2,
      text: "เมื่อปฏิบัติงานกับกระแสไฟฟ้าแรงดันใช้งาน ไม่เกิน 1000 VAC/1500 VDC ควรสวมใส่ถุงมือกันไฟฟ้าระดับใดตามมาตรฐาน ASTM D120",
      options: ["Class 0", "Class 1", "Class 2", "Class 3", "Class 4"],
      correctAnswer: 0,
    },
    {
      id: 3,
      text: "ชุดเครื่องมือหุ้มฉนวนที่นำมาใช้ในการปฏิบัติงาน ต้องผ่านการรับรองมาตรฐานความปลอดภัยใด",
      options: [
        "IEC 60900",
        "ISO6789",
        "IEC 61111",
        "ANSI/ISEA Z87.1",
        "ASTM D120",
      ],
      correctAnswer: 0,
    },
    {
      id: 4,
      text: "หากต้องการทดสอบค่าความต้านทานของฉนวน ควรใช้เครื่องมือใดในการทดสอบ",
      options: [
        "Battery Tester",
        "Resistance Meter",
        "Multi Meter",
        "Oscilloscope",
        "Insulation Tester",
      ],
      correctAnswer: 4,
    },
    {
      id: 5,
      text: "หากต้องการวัดค่าแรงดัน (Voltage) ของเซลล์แบตเตอรี่ ควรตั้งค่ามัลติมิเตอร์อย่างไร",
      options: [
        "ตั้งโหมด VDC แล้วต่อสายสีแดงเข้ากับขั้ว (+) และต่อสายสีดำเข้ากับขั้ว (-) ค่าที่แสดงออกมาจะได้ค่า -",
        "ตั้งโหมด VAC แล้วต่อสายสีแดงเข้ากับขั้ว (+) และต่อสายสีดำเข้ากับขั้ว (-) ค่าที่แสดงออกมาจะได้ค่า +",
        "ตั้งโหมด VDC แล้วต่อสายสีแดงเข้ากับขั้ว (+) และต่อสายสีดำเข้ากับขั้ว (-) ค่าที่แสดงออกมาจะได้ค่า +",
        "ตั้งโหมด VAC แล้วต่อสายสีแดงเข้ากับขั้ว (+) และต่อสายสีดำเข้ากับขั้ว (-) ค่าที่แสดงออกมาจะได้ค่า –",
        "ตั้งโหมด VDC แล้วต่อสายสีแดงเข้ากับขั้ว (+) และต่อสายสีดำเข้ากับขั้ว (-) ค่าที่แสดงออกมาจะได้ค่า 0",
      ],
      correctAnswer: 2,
    },
    {
      id: 6,
      text: "เมื่อต้องการทดสอบคุณสมบัติของเซลล์แบตเตอรี่ โดยการคายประจุ (Discharge) ข้อใดตั้งค่าได้ถูกต้อง",
      options: [
        "Mode: D-CV, Test Val: 10 A, Cutoff Vol: 2.5 V",
        "Mode: C-CV, Test Val: 10 A, Cutoff Vol: 3.65 V",
        "Mode: D-CC, Test Val: 10 A, Cutoff Vol: 3.65 V",
        "Mode: D-CC, Test Val: 10 A, Cutoff Vol: 2.5 V",
        "Mode: C-CV, Test Val: 10 A, Cutoff Vol: 2.5 V",
      ],
      correctAnswer: 3,
    },
    {
      id: 7,
      text: "สัญลักษณ์ใดต่อไปนี้เป็นสัญลักษณ์มาตรฐานที่ใช้เตือนอันตรายจากไฟฟ้าแรงดันสูง",
      options: [
        { text: "A", image: "/images/7_1.jpg" },
        { text: "B", image: "/images/7_2.jpg" },
        { text: "C", image: "/images/7_3.jpg" },
        { text: "D", image: "/images/7_4.jpg" },
        { text: "E", image: "/images/7_5.jpg" },
      ],
      correctAnswer: 1,
    },
    {
      id: 8,
      text: "ข้อใดต่อไปนี้เป็นแนวทางที่ถูกต้องในจัดการพื้นที่ปฏิบัติงานกับระบบไฟฟ้าแรงดันสูง",
      options: [
        "เปิดเครื่องก่อน แล้วจึงค่อยกั้นพื้นที่ภายหลัง",
        "ติดป้ายเตือนเฉพาะบริเวณที่เจ้าหน้าที่ประจำอยู่เท่านั้น",
        "ปิดกั้นพื้นที่ด้วยวัสดุชั่วคราว เช่น เชือกผ้า เพื่อประหยัดงบประมาณ",
        "ปิดกั้นพื้นที่ด้วยบริเขต และติดป้ายสัญลักษณ์อันตรายให้ชัดเจน",
        "ให้ผู้ไม่เกี่ยวข้องอยู่ใกล้พื้นที่เพื่อเฝ้าระวังเหตุ",
      ],
      correctAnswer: 3,
    },
    {
      id: 9,
      text: "ข้อใดคือความสำคัญของการทดสอบค่าความจุของเซลล์แบตเตอรี่",
      options: [
        "เพื่อดูความสามารถในการชาร์จและคายประจุของแบตเตอรี่",
        "เพื่อประเมินความสามารถในการจ่ายพลังงานของแบตเตอรี่ในสภาวะใช้งานจริง",
        "เพื่อให้รู้แรงดันไฟฟ้าสูงสุดที่แบตเตอรี่ทำได้",
        "เพื่อเลือกประเภทแบตเตอรี่ตามชื่อรุ่นโดยไม่ต้องดูคุณสมบัติ",
        "เพื่อเพิ่มอุณหภูมิการทำงานของเซลล์แบตเตอรี่",
      ],
      correctAnswer: 1,
    },
    {
      id: 10,
      text: "หากต้องการวัดแรงดันและความต้านทานภายในของเซลล์แบตเตอรี่ ควรเลือกใช้เครื่องมือชนิดใด",
      options: [
        "Battery Tester",
        "Multi Meter",
        "Clamp Meter",
        "Insulation Tester",
        "Ohm Meter",
      ],
      correctAnswer: 0,
    },
    {
      id: 11,
      text: "ขั้นตอนใดต่อไปนี้ ไม่ถูกต้อง เกี่ยวกับกระบวนการจัดกลุ่มเซลล์แบตเตอรี่ตามค่าความต้านทานภายใน (Internal Resistance)",
      options: [
        "วัดค่าความต้านทานภายใน (Internal Resistance) ของเซลล์ที่ชาร์จเต็มแล้ว",
        "จดบันทึกค่าความต้านทานภายใน (Internal Resistance) ของแต่ละเซลล์เพื่อใช้ในการจัดกลุ่ม",
        "จัดกลุ่มเซลล์ให้มีค่าความต้านทานภายใน (Internal Resistance) ใกล้เคียงกันมากที่สุด",
        "เลือกเฉพาะเซลล์ที่มีค่าความต้านทานภายใน (Internal Resistance) สูงสุดรวมกลุ่มเดียวกัน",
        "ใช้คอมพิวเตอร์หรือซอฟต์แวร์ช่วยในการจัดกลุ่ม",
      ],
      correctAnswer: 3,
    },
    {
      id: 12,
      text: "เหตุใดจึงต้องจัดกลุ่มเซลล์แบตเตอรี่ที่มีค่าความต้านทานภายใน (Internal Resistance) ใกล้เคียงกันในการสร้างมอดูลหรือแพ็คแบตเตอรี่",
      options: [
        "เพื่อให้แต่ละเซลล์ทำงานไม่พร้อมกัน",
        "เพื่อให้แต่ละเซลล์ในกลุ่มทำงานได้สมดุลและยืดอายุการใช้งาน",
        "เพื่อให้ความต้านทานรวมของแพ็คสูงขึ้น",
        "เพื่อเพิ่มน้ำหนักของแพ็คแบตเตอรี่",
        "เพื่อให้ชาร์จเซลล์ได้พร้อมกันในเวลาสั้นที่สุด",
      ],
      correctAnswer: 1,
    },
    {
      id: 13,
      text: "หากนำเซลล์แบตเตอรี่ 3.2V 20Ah มาเชื่อมต่อแบบอนุกรม 15 เซลล์ จะได้แรงดันไฟฟ้าเท่าใด",
      options: ["42 V", "51.2 V", "60.8 V", "48 V", "54.4 V"],
      correctAnswer: 3,
    },
    {
      id: 14,
      text: "จากการรับชม VDO หากต้องการเชื่อมต่อขั้ว B- ของระบบจัดการแบตเตอรี่ (BMS) ต้องเชื่อมต่อที่เซลล์ใดของแบตเตอรี่ (มอดูลแบตเตอรี่ 15S)",
      options: [
        "ขั้ว – ของเซลล์ที่ 1",
        "ขั้ว + ของเซลล์ที่ 1",
        "ขั้ว – ของเซลล์ที่ 15",
        "ขั้ว + ของเซลล์ที่ 15",
        "ถูกทุกข้อ",
      ],
      correctAnswer: 2,
    },
    {
      id: 15,
      text: "การเชื่อมต่อระบบจัดการแบตเตอรี่ BMS กับแพ็คแบตเตอรี่ หากนำแพ็คแบตเตอรี่มาเชื่อมต่อแบบอนุกรมจำนวน 15 เซลล์ ควรเลือก BMS ในข้อใดจึงจะเหมาะสมที่สุด",
      options: ["BMS 4S", "BMS 7S", "BMS 16S", "BMS 32S"],
      correctAnswer: 2,
    },
    {
      id: 16,
      text: "หากต้องการทดสอบความเป็นฉนวนของแพ็คแบตเตอรี่ 15S ที่มีแรงดันรวมเท่ากับ 48V ควรตั้งค่าการทดสอบที่แรงดันเท่าใด โดยใช้วิธีการคำนวณแบบ Hipot test (Hipot test = 2 x (แรงดันไฟฟ้าที่ใช้งาน) + 1,000 V)",
      options: ["10.96 V", "1096 V", "109,600 V", "1.096 V", "10,960 V"],
      correctAnswer: 1,
    },
    {
      id: 17,
      text: "ข้อใดคือความสำคัญในการทดสอบความเป็นฉนวน",
      options: [
        "เพื่อเพิ่มประสิทธิภาพในการจ่ายกระแส",
        "เพื่อดูว่าสามารถทนแรงกระแทกได้หรือไม่",
        "เพื่อป้องกันการลัดวงจรและการรั่วไหลของกระแสไฟ",
        "เพื่อยืนยันอายุการใช้งานของเซลล์แบตเตอรี่",
        "เพื่อวัดค่าความจุของวงจรภายใน",
      ],
      correctAnswer: 2,
    },
    {
      id: 18,
      text: "จากภาพการแสดงผลของระบบจัดการแบตเตอรี่ (BMS) แบตเตอรี่เซลล์ใดในมอดูลมีแรงดันที่ต่ำที่สุด",
      image: "/images/18.png",
      options: [
        "เซลล์ที่ 11",
        "เซลล์ที่ 12",
        "เซลล์ที่ 13",
        "เซลล์ที่ 14",
        "เซลล์ที่ 15",
      ],
      correctAnswer: 4,
    },
    {
      id: 19,
      text: "ข้อใดต่อไปนี้ ไม่ใช่ หน้าที่ของฟังก์ชัน Overheat Protection ในระบบจัดการแบตเตอรี่ (BMS)",
      options: [
        "ตรวจจับอุณหภูมิที่สูงเกินเกณฑ์ที่กำหนด",
        "สั่งตัดการชาร์จเมื่ออุณหภูมิสูงผิดปกติ",
        "สั่งเปิดระบบทำความเย็นในแบตเตอรี่",
        "ป้องกันไม่ให้แบตเตอรี่ทำงานต่อในสภาพอุณหภูมิอันตราย",
        "บันทึกประวัติอุณหภูมิของแบตเตอรี่เพื่อการวิเคราะห์ย้อนหลัง",
      ],
      correctAnswer: 4,
    },
    {
      id: 20,
      text: "ผลกระทบใดที่อาจเกิดขึ้นหากไม่มีระบบจัดการแบตเตอรี่ (BMS) ควบคุมเมื่อเซลล์แบตเตอรี่มีอุณหภูมิสูงผิดปกติ",
      options: [
        "แบตเตอรี่จะสามารถทำงานได้นานขึ้น",
        "อุณหภูมิสูงช่วยเพิ่มความเร็วในการชาร์จ",
        "อาจเกิดการลุกไหม้หรือระเบิดของเซลล์แบตเตอรี่",
        "ไม่มีผลต่อความปลอดภัยของระบบ",
        "ระบบจะเข้าสู่โหมดประหยัดพลังงานโดยอัตโนมัติ",
      ],
      correctAnswer: 2,
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(
    Array(questions.length).fill(-1)
  );
  const [showResults, setShowResults] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [preTestScore, setPreTestScore] = useState<number | null>(null);

  useEffect(() => {
    // Get user name from token
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = decodeToken(token);
      setUserName(decoded?.name || "");
    }

    // Fetch previous scores if user is logged in
    const fetchScores = async () => {
      if (!user) return;
      const res = await fetch("/api/user", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      if (res.ok) {
        const data = await res.json();
        setPreTestScore(data.preTestScore?.score ?? null);
      }
    };
    fetchScores();
  }, [user]);

  // จัดการการเลือกคำตอบ
  const handleAnswerSelect = (answerIndex: number) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newSelectedAnswers);
  };

  // ไปยังคำถามถัดไป
  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  // ไปยังคำถามก่อนหน้า
  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // คำนวณคะแนน
  const calculateScore = () => {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
      if (selectedAnswers[i] === questions[i].correctAnswer) {
        score++;
      }
    }
    return score;
  };

  // ส่งแบบทดสอบ
  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Save score to backend
    const score = calculateScore();
    await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ type: testType, score }),
    });
    setShowResults(true);
    setIsSubmitting(false);
  };

  // ตรวจสอบว่าตอบครบทุกข้อหรือยัง
  const allQuestionsAnswered = selectedAnswers.every((answer) => answer !== -1);
  if (loading) return <LoadingSpinner text="กำลังโหลดแบบทดสอบ..." />;
  if (!user) return null;
  if (showResults) {
    const score = calculateScore();
    const percentage = (score / questions.length) * 100;

    return (
      <div className="max-w-3xl mx-auto my-12 p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-900 text-center mb-6">
          {testType === "pre" ? "ผลการทดสอบก่อนเรียน" : "ผลการทดสอบหลังเรียน"}
        </h1>

        {userName && (
          <div className="text-center mb-4">
            <p className="text-lg text-gray-600">
              ผู้ทำแบบทดสอบ:{" "}
              <span className="font-semibold text-blue-800">{userName}</span>
            </p>
          </div>
        )}

        <div className="text-center mb-8">
          <div className="text-5xl font-bold text-blue-800 mb-2">
            {score} / {questions.length}
          </div>
          <div className="text-xl text-blue-900">{percentage.toFixed(0)}%</div>

          <div className="mt-4 p-4 bg-gray-100 rounded-lg">
            <p className="text-lg text-gray-900">
              {percentage >= 80
                ? "ยอดเยี่ยม! คุณมีความรู้พื้นฐานที่ดีมากเกี่ยวกับแบตเตอรี่ไฟฟ้าแรงดันสูง"
                : percentage >= 60
                ? "ดี! คุณมีความรู้พื้นฐานที่ดีพอสมควร แต่ยังมีบางส่วนที่ต้องเรียนรู้เพิ่มเติม"
                : "คุณควรศึกษาเนื้อหาเพิ่มเติมเกี่ยวกับแบตเตอรี่ไฟฟ้าแรงดันสูง"}
            </p>
          </div>
        </div>

        {testType === "pre" ? (
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => router.push("/learn")}
              className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition"
            >
              เริ่มเรียนเลย
            </button>
            <button
              onClick={() => {
                setShowResults(false);
                setCurrentQuestion(0);
                setSelectedAnswers(Array(questions.length).fill(-1));
              }}
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md font-medium hover:bg-gray-300 transition"
            >
              ทำแบบทดสอบอีกครั้ง
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-blue-900">
                คะแนนก่อนเรียน:{" "}
                {preTestScore !== null
                  ? `${preTestScore} / ${questions.length}`
                  : "-"}
              </div>
              <div className="text-blue-900">
                คะแนนหลังเรียน: {score} / {questions.length}
              </div>
              {preTestScore !== null && (
                <div className="mt-2 text-green-700 font-semibold">
                  {score > preTestScore
                    ? `คุณพัฒนาขึ้น ${score - preTestScore} คะแนน!`
                    : score === preTestScore
                    ? "คะแนนเท่าเดิม"
                    : `คะแนนลดลง ${preTestScore - score} คะแนน`}
                </div>
              )}
            </div>
            <button
              onClick={() => router.push("/learn")}
              className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition"
            >
              กลับไปหน้าเรียนรู้
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto my-12 p-8 bg-white rounded-lg shadow-md">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">แบบทดสอบก่อนเรียน</h1>
      </div>

      <div className="mb-6 bg-gray-100 p-4 rounded-lg">
        <div className="flex justify-between mb-2 text-blue-900">
          <span>ความคืบหน้า</span>
          <span>
            {currentQuestion + 1} / {questions.length}
          </span>
        </div>
        <div className="w-full bg-gray-300 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-blue-900 mb-4">
          {currentQuestion + 1}. {questions[currentQuestion].text}
        </h2>
        {questions[currentQuestion].image && (
          <div className="mb-4 flex justify-center">
            <img
              src={questions[currentQuestion].image}
              alt="question visual"
              className="max-h-80 object-contain"
            />
          </div>
        )}
        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => {
            // รองรับทั้ง string และ object ที่มีรูป
            const isObj = typeof option === "object" && option !== null;
            return (
              <div
                key={index}
                className={`p-3 border rounded-lg cursor-pointer transition ${
                  selectedAnswers[currentQuestion] === index
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300 hover:border-blue-300"
                }`}
                onClick={() => handleAnswerSelect(index)}
              >
                <div className="flex items-center">
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${
                      selectedAnswers[currentQuestion] === index
                        ? "border-blue-500 bg-blue-500"
                        : "border-gray-400"
                    }`}
                  >
                    {selectedAnswers[currentQuestion] === index && (
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    )}
                  </div>
                  {isObj && option.image && (
                    <img
                      src={option.image}
                      alt={option.text}
                      className="h-30 w-30 object-contain mr-2"
                    />
                  )}
                  <span className="text-gray-900">
                    {isObj ? option.text : option}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={handlePrevQuestion}
          disabled={currentQuestion === 0}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ก่อนหน้า
        </button>

        {currentQuestion === questions.length - 1 ? (
          <button
            onClick={handleSubmit}
            disabled={!allQuestionsAnswered || isSubmitting}
            className="px-6 py-2 bg-green-600 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center">
                <LoadingSpinner size="sm" text="" className="p-0 mr-2" />
                กำลังส่ง...
              </div>
            ) : (
              "ส่งคำตอบ"
            )}
          </button>
        ) : (
          <button
            onClick={handleNextQuestion}
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            ถัดไป
          </button>
        )}
      </div>
    </div>
  );
}
