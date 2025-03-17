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

