import mongoose from 'mongoose';
import { Cuina } from '../models/cuina.js';
import dotenv from 'dotenv';
  
// Carrega les variables d'entorn
dotenv.config({ path: '.env.local' });
  
const cuines = [
  { nom: 'Mediterrània', descripcio: "Cuina saludable amb oli d'oliva, verdures i peix.", nivellDificultat: 5, vegana: false },
  { nom: 'Asiàtica', descripcio: "Gran varietat de sabors i tècniques de cuina tradicionals d'Àsia.", nivellDificultat: 7, vegana: true },
  { nom: 'Francesa', descripcio: 'Alta cuina amb tècniques elaborades i ingredients sofisticats.', nivellDificultat: 8, vegana: false },
  { nom: 'Mexicana', descripcio: 'Sabor intens amb espècies, xili i tortillas.', nivellDificultat: 6, vegana: false },
  { nom: 'Italiana', descripcio: 'Pasta, pizzes i plats tradicionals plens de sabor.', nivellDificultat: 4, vegana: true },
  { nom: 'Vegana', descripcio: 'Plats 100% vegetals, saludables i creatius.', nivellDificultat: 5, vegana: true },
  { nom: 'Àrab', descripcio: 'Plats amb espècies aromàtiques, hummus i tajines.', nivellDificultat: 6, vegana: false },
  { nom: 'Índia', descripcio: 'Curry, espècies exòtiques i combinacions de sabors intenses.', nivellDificultat: 7, vegana: true },
  { nom: 'Japonesa', descripcio: 'Sushi, ramen i plats minimalistes de gran qualitat.', nivellDificultat: 9, vegana: false },
  { nom: 'Africana', descripcio: 'Plats tradicionals amb cereals, llegums i espècies.', nivellDificultat: 6, vegana: true }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connectat a MongoDB');
    await Cuina.deleteMany();
    console.log('Cuines eliminades');
    await Cuina.insertMany(cuines);
    console.log('Cuines creades correctament!');
  } catch (error) {
    console.error('Error al generar cuines:', error);
  } finally {
    mongoose.connection.close();
  }
}

seed();