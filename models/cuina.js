/*

// Afegir a models/cuina.js
import mongoose from 'mongoose';
import { z } from "zod";

export const cuinaValidator = z.object({
  nom: z
      .string({
        required_error: "El nom és obligatori.", })
      .min(1, { message: "El nom ha de tenir almenys 3 caràcters." }).trim(),
  descripcio: z.string(
    {
      required_error : "La descripció és"
    }
  ).min(10, { message: "La descripció ha de tenir almenys 10 caràcters." }).trim(),
  nivellDificultat: z
    .number()
    .min(1, { message: "El nivell de dificultat ha de ser com a mínim 1." })
    .max(10, { message: "El nivell de dificultat ha de ser com a màxim 10." }),
  vegana: z.boolean().optional(), // No és obligatori
});

const CuinaSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
    trim: true
  },
  descripcio: {
    type: String,
    required: true,
    trim: true
  },
  nivellDificultat: {
    type: Number,
    required: true,
    min: 1,
    max: 10
  },
  vegana: {
    type: Boolean,
    required: true,
    default: false
  }
}, { timestamps: true });

export const Cuina = mongoose.models.Cuina || mongoose.model('Cuina', CuinaSchema,'cuines');

*/


import mongoose from 'mongoose';
import { z } from "zod";
import mongoosePaginate from 'mongoose-paginate-v2';

export const cuinaValidator = z.object({
  nom: z.string({ required_error: "El nom és obligatori." })
          .min(1, { message: "El nom ha de tenir almenys 3 caràcters." }).trim(),
  descripcio: z.string({ required_error: "La descripció és obligatòria." })
          .min(10, { message: "La descripció ha de tenir almenys 10 caràcters." }).trim(),
  nivellDificultat: z.number()
          .min(1, { message: "El nivell de dificultat ha de ser com a mínim 1." })
          .max(10, { message: "El nivell de dificultat ha de ser com a màxim 10." }),
  vegana: z.boolean().optional(),
});

const CuinaSchema = new mongoose.Schema({
  nom: { type: String, required: true, trim: true },
  descripcio: { type: String, required: true, trim: true },
  nivellDificultat: { type: Number, required: true, min: 1, max: 10 },
  vegana: { type: Boolean, required: true, default: false }
}, { timestamps: true });

CuinaSchema.plugin(mongoosePaginate);

export const Cuina = mongoose.models.Cuina || mongoose.model('Cuina', CuinaSchema, 'cuines');