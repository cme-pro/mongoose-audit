import { Schema } from "mongoose";

const ipSchema = {
  userAgent: { type: String },
  ip: { type: String },
  country: { type: String },
  continent: { type: String },
  region: { type: String },
  city: { type: String },
  zip: { type: String },
  lat: { type: Number },
  lng: { type: Number },
  tz: { type: String }
};

interface Options {
  userModel?: string;
}

export default function mongooseAudit(
  schema: Schema,
  options: Options = {}
): void {
  schema.add({
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: options.userModel || "User"
    },
    updatedBy: {
      type: Schema.Types.ObjectId,
      ref: options.userModel || "User"
    },
    deletedBy: {
      type: Schema.Types.ObjectId,
      ref: options.userModel || "User"
    },
    createdFrom: ipSchema,
    updatedFrom: ipSchema,
    deletedFrom: ipSchema
  });
}
