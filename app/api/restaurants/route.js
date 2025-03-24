    // app/api/restaurants/route.js
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Restaurant } from "@/models/restaurant";
import { Cuina } from "@/models/cuina";

// Obtenir llistat de restaurants
export async function GET() {
    try {
        await connectDB();
        const restaurants = await Restaurant.find().populate('cuina');
        return NextResponse.json(restaurants, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Error obtenint els restaurants", details: error.message }, { status: 500 });
    }
}
     