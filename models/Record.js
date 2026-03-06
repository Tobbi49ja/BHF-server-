import mongoose from "mongoose";

export const recordSchema = new mongoose.Schema(
  {
  
    firstName:   { type: String, required: true, trim: true },
    lastName:    { type: String, required: true, trim: true },
    gender:      { type: String, enum: ["male", "female", "other"] },
    age:         { type: Number },
    phone:       { type: String, trim: true },
    address:     { type: String, trim: true },
    volunteerName: { type: String, trim: true },

   
    bloodPressureSystolic:  { type: Number },
    bloodPressureDiastolic: { type: Number },
    bloodSugar:             { type: Number },
    weight:                 { type: Number },
    height:                 { type: Number },
    bmi:                    { type: Number },
    conditions:             { type: [String], default: [] },

   
    lang:        { type: String, default: "en" },
    submittedAt: { type: Date, default: Date.now },
    submittedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);