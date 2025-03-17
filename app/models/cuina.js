// Afegir a models/cuina.js
import { z } from "zod";

export const cuinaValidator = z.object({
  nom: z
      .string({
        required_error: "El nom és obligatori.", })
      .min(1, { message: "El nom ha de tenir almenys 3 caràcters." }).trim(),
  descripcio: z.string().min(10, { message: "La descripció ha de tenir almenys 10 caràcters." }).trim(),
  nivellDificultat: z
    .number()
    .min(1, { message: "El nivell de dificultat ha de ser com a mínim 1." })
    .max(10, { message: "El nivell de dificultat ha de ser com a màxim 10." }),
  vegana: z.boolean().optional(), // No és obligatori
});