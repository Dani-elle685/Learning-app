import  { Schema, models, model } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String, 
      required: true, 
      unique: true,   // ✅ ensures uniqueness
      lowercase: true,
      trim: true,
    },
  },
  { timestamps: true },
);


// ✅ Exports the model
export const User = models.User || model("User", UserSchema);


