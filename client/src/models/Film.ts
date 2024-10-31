import mongoose, { Document, Schema } from "mongoose";

export interface IFilm extends Document {
  title: string;
  releaseYear: number;
  actors: mongoose.Types.ObjectId[];
}

const FilmSchema: Schema = new Schema({
  title: { type: String, required: true },
  releaseYear: { type: Number, required: true },
  actors: [{ type: Schema.Types.ObjectId, ref: "Actor" }],
});

export default mongoose.model<IFilm>("Film", FilmSchema);
