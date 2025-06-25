import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'changeme';

export async function GET(req: NextRequest) {
  await dbConnect();
  const authHeader = req.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return NextResponse.json({ message: 'No token provided' }, { status: 401 });
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
    const user = await User.findById(decoded.userId).select('-password');
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }
    return NextResponse.json({ 
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
        profileImage: user.profileImage,
        preTestScore: user.preTestScore,
        postTestScore: user.postTestScore
      }
    }, { status: 200 });
  } catch {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }
}

export async function PUT(req: NextRequest) {
  await dbConnect();
  const authHeader = req.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return NextResponse.json({ message: 'No token provided' }, { status: 401 });
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
    const { name, email, profileImage } = await req.json();
    const user = await User.findById(decoded.userId);
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }
    user.name = name || user.name;
    user.email = email || user.email;
    user.profileImage = profileImage || user.profileImage;
    await user.save();
    return NextResponse.json({ message: 'User updated successfully' }, { status: 200 });
  } catch {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }
}

export async function POST(req: NextRequest) {
  await dbConnect();
  const authHeader = req.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return NextResponse.json({ message: 'No token provided' }, { status: 401 });
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
    const { type, score } = await req.json(); // type: 'pre' | 'post'
    let update = {};
    if (type === 'pre') {
      update = { $set: { preTestScore: { score, date: new Date() } } };
    } else if (type === 'post') {
      update = { $set: { postTestScore: { score, date: new Date() } } };
    } else {
      return NextResponse.json({ message: 'Invalid test type' }, { status: 400 });
    }
    console.log('Update object:', update);
    const updatedUser = await User.findByIdAndUpdate(decoded.userId, update, { new: true });
    console.log('Updated user:', updatedUser);
    if (!updatedUser) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }
    const userWithScores = await User.findById(decoded.userId);
    return NextResponse.json({ message: 'Score saved successfully', user: userWithScores }, { status: 200 });
  } catch {
    return NextResponse.json({ message: 'Invalid token or server error' }, { status: 401 });
  }
} 