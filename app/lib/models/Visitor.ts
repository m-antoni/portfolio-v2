import mongoose, { Schema, Document, Model } from "mongoose";

export interface IVisitor extends Document {
  ip: string;
  hostname?: string;
  continent_code?: string;
  continent_name?: string;
  country_code?: string;
  country_name?: string;
  region_code?: string;
  region_name?: string;
  city?: string;
  latitude?: number;
  longitude?: number;
  country_flag?: string;
  visit_count: number;
  createdAt: Date;
  updatedAt: Date;
  dateString: string;
}

const VisitorSchema: Schema = new Schema(
  {
    ip: { type: String, required: true, trim: true, index: true },
    hostname: { type: String, trim: true },
    continent_code: { type: String, trim: true, index: true },
    continent_name: { type: String, trim: true },
    country_code: { type: String, trim: true, index: true },
    country_name: { type: String, trim: true },
    region_code: { type: String, trim: true },
    region_name: { type: String, trim: true },
    city: { type: String, trim: true },
    latitude: { type: Number },
    longitude: { type: Number },
    country_flag: { type: String, trim: true },
    visit_count: {
      type: Number,
      default: 1,
    },
    dateString: { type: String, index: true }, // Format: YYYY-MM-DD
  },
  {
    timestamps: true,
    collection: "visitors",
  }
);

// Add an index for the timestamp to speed up "Recent Visitors" queries
VisitorSchema.index({ ip: 1, createdAt: -1 });

if (process.env.NODE_ENV === "development") {
  delete mongoose.models.Visitor;
}

const Visitor = (mongoose.models.Visitor ||
  mongoose.model<IVisitor>("Visitor", VisitorSchema)) as Model<IVisitor>;

export default Visitor;
