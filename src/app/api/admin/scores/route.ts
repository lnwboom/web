import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';

// Helper function to decode JWT token
function decodeToken(token: string) {
  try {
    const payload = token.split('.')[1];
    const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(escape(atob(base64)));
    return JSON.parse(jsonPayload);
  } catch {
    return null;
  }
}

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    
    // Get token from Authorization header
    const authHeader = req.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
    
    const token = authHeader.substring(7);
    const decoded = decodeToken(token);
    
    if (!decoded || decoded.role !== 'admin') {
      return NextResponse.json({ message: 'Access denied. Admin only.' }, { status: 403 });
    }
    
    // Get all users with their scores
    const users = await User.find({}, {
      name: 1,
      email: 1,
      role: 1,
      preTestScore: 1,
      postTestScore: 1,
      createdAt: 1
    }).sort({ createdAt: -1 });
    
    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    console.error('Error fetching user scores:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    await dbConnect();
    
    // Get token from Authorization header
    const authHeader = req.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
    
    const token = authHeader.substring(7);
    const decoded = decodeToken(token);
    
    if (!decoded || decoded.role !== 'admin') {
      return NextResponse.json({ message: 'Access denied. Admin only.' }, { status: 403 });
    }
    
    const { userId, preTestScore, postTestScore } = await req.json();
    
    if (!userId) {
      return NextResponse.json({ message: 'User ID is required' }, { status: 400 });
    }
    
    const updateData: Record<string, unknown> = {};
    if (preTestScore !== undefined) {
      updateData.preTestScore = preTestScore;
    }
    if (postTestScore !== undefined) {
      updateData.postTestScore = postTestScore;
    }
    
    const user = await User.findByIdAndUpdate(
      userId,
      { $set: updateData },
      { new: true }
    );
    
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }
    
    return NextResponse.json({ 
      message: 'Score updated successfully',
      user: {
        name: user.name,
        email: user.email,
        preTestScore: user.preTestScore,
        postTestScore: user.postTestScore
      }
    }, { status: 200 });
  } catch (error) {
    console.error('Error updating user score:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
} 