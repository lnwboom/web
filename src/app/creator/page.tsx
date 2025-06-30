import Image from "next/image";

interface Creator {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  contact?: {
    email?: string;
    phone?: string;
    website?: string;
  };
}

export default function CreatorPage() {
  // ข้อมูลผู้จัดทำ
  const creators: Creator[] = [
    {
      id: 1,
      name: "ทิพวัลย์ โทวงษ์",
      role: "64080502019",
      image: "/images/n.jpg",
      bio: "ครุศาสตร์อุตสาหกรรมและเทคโนโลยี มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี สาขาครุศาสตร์เครื่องกล ",
      contact: {
        email: "tippavan6748@gmail.com",
      },
    },
    {
      id: 2,
      name: "สิริกร ปันชัย",
      role: "64080502024",
      image: "/images/a.jpg",
      bio: "ครุศาสตร์อุตสาหกรรมและเทคโนโลยี มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี สาขาครุศาสตร์เครื่องกล ",
      contact: {
        email: "sirikonpanchai@gmail.com",
      },
    },
  ];

  // ข้อมูลองค์กรที่สนับสนุน
  const organizations = [
    {
      name: "สาขาวิชาครุศาสตร์เครื่องกล\nคณะครุศาสตร์อุตสาหกรรมและเทคโนโลยีพระจอมเกล้าธนบุรี",
      logo: "/images/logoDepartment.png",
      website: "https://www.kmutt.ac.th/",
    },
  ];

  return (
    <div className="space-y-8">
      <section className="bg-blue-50 p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-4">ผู้จัดทำ</h1>
        <p className="text-lg mb-6">
          ทีมผู้เชี่ยวชาญที่ร่วมกันพัฒนาหลักสูตรการประกอบแบตเตอรี่ไฟฟ้าแรงดันสูงระดับ
          4
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">ทีมผู้จัดทำ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {creators.map((creator) => (
            <div
              key={creator.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 h-48 md:h-auto relative bg-gray-200">
                  <Image
                    src={creator.image}
                    alt={creator.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-semibold mb-1">{creator.name}</h3>
                  <p className="text-blue-600 mb-3">{creator.role}</p>
                  <span style={{ whiteSpace: "pre-line" }}>
                    {creator.bio.split("\n").map((line, idx) => (
                      <span key={idx}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </span>

                  {creator.contact && (
                    <div className="space-y-1">
                      {creator.contact.email && (
                        <div className="flex items-center text-sm">
                          <svg
                            className="w-4 h-4 mr-2 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                          <a
                            href={`mailto:${creator.contact.email}`}
                            className="text-blue-600 hover:underline"
                          >
                            {creator.contact.email}
                          </a>
                        </div>
                      )}

                      {creator.contact.phone && (
                        <div className="flex items-center text-sm">
                          <svg
                            className="w-4 h-4 mr-2 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                          <span>{creator.contact.phone}</span>
                        </div>
                      )}

                      {creator.contact.website && (
                        <div className="flex items-center text-sm">
                          <svg
                            className="w-4 h-4 mr-2 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                            />
                          </svg>
                          <a
                            href={creator.contact.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            เว็บไซต์
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">องค์กรที่สนับสนุน</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {organizations.map((org, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center"
            >
              <div className="h-24 relative mb-4">
                <Image
                  src={org.logo}
                  alt={org.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {org.name.split("\n").map((line, idx) => (
                  <span key={idx}>
                    {line}
                    <br />
                  </span>
                ))}
              </h3>
              <a
                href={org.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
              >
                เยี่ยมชมเว็บไซต์
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 p-6 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">ติดต่อเรา</h2>
        <p className="text-lg mb-6">
          หากมีคำถามหรือข้อเสนอแนะเกี่ยวกับหลักสูตร กรุณาติดต่อเราได้ที่
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="flex items-center">
            <svg
              className="w-6 h-6 mr-2 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <a
              href="mailto:contact@example.com"
              className="text-blue-600 hover:underline"
            >
              tippavan6748@gmail.com
            </a>
          </div>
          <div className="flex items-center">
            <svg
              className="w-6 h-6 mr-2 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span>02-123-4567</span>
          </div>
        </div>
      </section>
    </div>
  );
}
