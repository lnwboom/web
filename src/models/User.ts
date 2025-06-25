import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  profileImage?: string;
  preTestScore?: {
    score: number;
    date: Date;
  };
  postTestScore?: {
    score: number;
    date: Date;
  };
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profileImage: { type: String, default: '' },
  preTestScore: {
    score: { type: Number },
    date: { type: Date },
  },
  postTestScore: {
    score: { type: Number },
    date: { type: Date },
  },
});

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema); 