# โครงสร้าง Backend (API + MongoDB + JWT) สำหรับ Next.js

## 1. โฟลเดอร์และไฟล์หลัก

```
web/
├── src/
│   ├── app/
│   │   └── api/
│   │       ├── auth/
│   │       │   ├── register/route.ts   # สมัครสมาชิก (Register)
│   │       │   └── login/route.ts      # ล็อกอิน (Login)
│   │       └── user/route.ts           # ดึงข้อมูลผู้ใช้ (ต้องใช้ JWT)
│   ├── lib/
│   │   └── mongodb.ts                  # เชื่อมต่อ MongoDB
│   └── models/
│       └── User.ts                     # โมเดล User สำหรับ mongoose
├── .env.local                          # เก็บค่า MONGODB_URI, JWT_SECRET
```

## 2. อธิบายแต่ละไฟล์

- **/src/lib/mongodb.ts**: ฟังก์ชันเชื่อมต่อ MongoDB ด้วย mongoose
- **/src/models/User.ts**: โมเดล User (email, password)
- **/src/app/api/auth/register/route.ts**: API สมัครสมาชิก (hash password ก่อนบันทึก)
- **/src/app/api/auth/login/route.ts**: API ล็อกอิน (ตรวจสอบรหัสผ่าน, คืน JWT)
- **/src/app/api/user/route.ts**: API ดึงข้อมูล user (ต้องแนบ JWT ใน header)
- **.env.local**: กำหนดค่าเชื่อมต่อฐานข้อมูลและ secret key

## 3. ตัวอย่าง .env.local

```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## 4. การติดตั้ง dependencies

```
npm install mongoose bcrypt jsonwebtoken
```

## 5. วิธีใช้งาน API

- **POST /api/auth/register**: สมัครสมาชิก (body: `{ email, password }`)
- **POST /api/auth/login**: ล็อกอิน (body: `{ email, password }`) จะได้ token
- **GET /api/user**: ดึงข้อมูล user (ต้องแนบ header: `Authorization: Bearer <token>`)
