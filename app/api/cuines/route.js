// app/api/cuines/route.js
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Cuina, cuinaValidator } from "@/models/cuina";

// Obtenir llistat de cuines
export async function GET() {
    try {
        await connectDB();
        const cuines = await Cuina.find();
        return NextResponse.json(cuines, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Error obtenint les cuines", details: error.message }, { status: 500 });
    }
}

// Crear una nova cuina
export async function POST(request) {
    let data;
    try {
        data = await request.json();
        const validacio = cuinaValidator.safeParse(data);
        if (!validacio.success) {
            return NextResponse.json(
                { error: "Dades incorrectes", details: validacio.error.format() },
                { status: 400 }
            );
        }
    } catch (error) {
        return NextResponse.json({ error: "Error processant la petició" }, { status: 400 });
    }

    try {
        await connectDB();
        const novaCuina = await Cuina.create(data);
        return NextResponse.json(novaCuina, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

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