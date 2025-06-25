import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
import bcrypt from 'bcrypt';

export async function POST(req: NextRequest) {
  await dbConnect();
  const { name, email, password, profileImage } = await req.json();
  if (!name || !email || !password) {
    return NextResponse.json({ message: 'Name, email and password are required' }, { status: 400 });
  }
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return NextResponse.json({ message: 'Email already exists' }, { status: 409 });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ name, email, password: hashedPassword, profileImage: profileImage || '' });
  await user.save();
  return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });
} 