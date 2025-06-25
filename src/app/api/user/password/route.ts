import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const JWT_SECRET = process.env.JWT_SECRET || 'changeme';

export async function PUT(req: NextRequest) {
  await dbConnect();
  const authHeader = req.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return NextResponse.json({ message: 'No token provided' }, { status: 401 });
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded: any = jwt.verify(token, JWT_SECRET);
    const { currentPassword, newPassword } = await req.json();
    const user = await User.findById(decoded.userId);
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return NextResponse.json({ message: 'Current password is incorrect' }, { status: 400 });
    }
    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();
    return NextResponse.json({ message: 'Password updated successfully' }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }
} 