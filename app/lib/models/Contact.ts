import mongoose, { Schema, Document, Model } from "mongoose";

// 1. Interface for the Document Properties
export interface IContact extends Document {
  email: string;
  subject: string;
  body: string;
  createdAt: Date;
}

// 2. Define the Mongoose Schema
const ContactSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required for the contact form."],
      trim: true,
      lowercase: true,
      // Simple regex for basic email format validation
      match: [
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        "Please use a valid email address.",
      ],
    },
    subject: {
      type: String,
      required: [true, "Subject is required."],
      trim: true,
      maxlength: [100, "Subject cannot be more than 100 characters."],
    },
    body: {
      type: String,
      required: [true, "Body content is required."],
      maxlength: [5000, "Body content cannot exceed 5000 characters."],
    },
  },
  {
    timestamps: true, // Automatically adds 'createdAt' and 'updatedAt' fields
    // --- CHANGE MADE HERE ---
    // Explicitly specify the collection name as 'contacts'
    collection: "contacts",
  }
);

// 3. Define the Model Type (for static methods and queries)
type IContactModel = Model<IContact>;

// 4. Check if the model already exists before creating a new one (crucial for Next.js)
const Contact = (mongoose.models.Contact ||
  mongoose.model<IContact, IContactModel>(
    "Contact",
    ContactSchema
  )) as IContactModel;

export default Contact;
