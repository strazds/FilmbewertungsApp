import mongoose, { Document, Schema } from "mongoose";

export interface IActor extends Document {
  name: string;
  birthDate: Date;
}

const ActorSchema: Schema = new Schema({
  name: { type: String, required: true },
  birthDate: { type: Date, required: true },
});

export default mongoose.model<IActor>("Actor", ActorSchema);
