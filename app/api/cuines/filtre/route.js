// app/api/cuines/filtre/route.js

import { NextResponse } from "next/server";
import { Cuina } from "@/models/cuina";
import { connectDB } from "@/lib/mongodb";

export async function GET(req) {
    try {
        await connectDB();

        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get("page")) || 1;
        const limit = 5;
        
        const nom = searchParams.get("nom") || "";
        const nivellDificultat = searchParams.get("nivellDificultat");
        const vegana = searchParams.get("vegana");

        let filter = {};

        if (nom) {
            filter.nom = { $regex: nom, $options: "i" }; // Cerca insensible a majúscules i minúscules
        }
        if (nivellDificultat) {
            filter.nivellDificultat = parseInt(nivellDificultat);
        }
        if (vegana !== null) {
            filter.vegana = vegana === "true";      // Converteix "true"/"false" a boolean
        }

        const options = { page, limit };

        const result = await Cuina.paginate(filter, options);

        return NextResponse.json({
            cuines: result.docs,
            totalPages: result.totalPages,
            currentPage: result.page,
            totalCuines: result.totalDocs
        }, { status: 200 });

    } catch (error) {
        return NextResponse.json({
            error: "Error al recuperar les cuines",
            details: error.message
        }, { status: 500 });
    }
}