import mongoose, { Schema, Document, Model } from "mongoose";

export interface IVisitor extends Document {
  ip: string;
  asn: string;
  hostname?: string;
  country?: string;
  country_code?: string;
  continent?: string;
  continent_code?: string;
  visit_count: number;
  createdAt: Date;
  updatedAt: Date;
  dateString: string;
}

const VisitorSchema: Schema = new Schema(
  {
    ip: { type: String, required: true, trim: true, index: true },
    asn: { type: String },
    hostname: { type: String, trim: true },
    country: { type: String, trim: true },
    country_code: { type: String, trim: true, index: true },
    continent: { type: String, trim: true },
    continent_code: { type: String, trim: true, index: true },
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
