import mongoose, { Schema, Document, Model } from "mongoose";

export interface IVisitor extends Document {
  ip: string;
  asn: string;
  asn_organization?: string;
  country?: string;
  country_code?: string;
  continent?: string;
  continent_code?: string;
  zipcode?: string;
  city_name?: string;
  region_name?: string;
  capital?: string;
  is_proxy?: boolean;
  latitude: number;
  longitude: number;
  visit_count: number;
  createdAt: Date;
  updatedAt: Date;
  dateString: string;
}

const VisitorSchema: Schema = new Schema(
  {
    ip: { type: String, required: true, trim: true, index: true },
    asn: { type: String },
    asn_organization: { type: String, trim: true },
    country: { type: String, trim: true },
    country_code: { type: String, trim: true },
    continent: { type: String, trim: true },
    continent_code: { type: String, trim: true },
    zipcode: { type: String, trim: true },
    city_name: { type: String, trim: true },
    region_name: { type: String, trim: true },
    capital: { type: String, trim: true },
    is_proxy: { type: Boolean },
    latitude: { type: Number },
    longitude: { type: Number },
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
