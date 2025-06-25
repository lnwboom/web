import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'changeme';

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
    
    // Get all users
    const users = await User.find({}, {
      name: 1,
      email: 1,
      role: 1,
      createdAt: 1
    }).sort({ createdAt: -1 });
    
    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    console.error('Error fetching users:', error);
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
    
    const { userId, role } = await req.json();
    
    if (!userId || !role) {
      return NextResponse.json({ message: 'User ID and role are required' }, { status: 400 });
    }
    
    if (!['user', 'admin'].includes(role)) {
      return NextResponse.json({ message: 'Invalid role. Must be "user" or "admin"' }, { status: 400 });
    }
    
    const user = await User.findByIdAndUpdate(
      userId,
      { $set: { role } },
      { new: true }
    );
    
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }
    
    return NextResponse.json({ 
      message: 'User role updated successfully',
      user: {
        name: user.name,
        email: user.email,
        role: user.role
      }
    }, { status: 200 });
  } catch (error) {
    console.error('Error updating user role:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
} 