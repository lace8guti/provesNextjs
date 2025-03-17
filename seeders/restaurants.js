import mongoose from 'mongoose';
import { Restaurant } from '../models/restaurant.js';
import { Cuina } from '../models/cuina.js';
import dotenv from 'dotenv';

// Carrega les variables d'entorn
dotenv.config({ path: '.env.local' });
      
const restaurants = [
  { nom: 'La Taula', adreça: { carrer: 'Carrer Major, 10', codiPostal: '08001' }, barri: 'Gòtic', restaurant_id: 'R001', qualificacions: [ { data: new Date(), qualificacio: 'A', puntuacio: 9 }, { data: new Date(), qualificacio: 'B', puntuacio: 8 } ] },
  { nom: 'El Gust', adreça: { carrer: 'Carrer Gran, 5', codiPostal: '08002' }, barri: 'Eixample', restaurant_id: 'R002', qualificacions: [ { data: new Date(), qualificacio: 'C', puntuacio: 7 }, { data: new Date(), qualificacio: 'D', puntuacio: 6 } ] },
  { nom: 'Sabor Antic', adreça: { carrer: 'Carrer Nou, 15', codiPostal: '08003' }, barri: 'Born', restaurant_id: 'R003', qualificacions: [ { data: new Date(), qualificacio: 'A', puntuacio: 9 }, { data: new Date(), qualificacio: 'B', puntuacio: 7 } ] },
  { nom: 'Cuina Moderna', adreça: { carrer: 'Passeig de Gràcia, 20', codiPostal: '08008' }, barri: 'Gràcia', restaurant_id: 'R004', qualificacions: [ { data: new Date(), qualificacio: 'B', puntuacio: 8 }, { data: new Date(), qualificacio: 'C', puntuacio: 7 } ] }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connectat a MongoDB');

    await Restaurant.deleteMany();
    console.log('Restaurants eliminats');

    const cuines = await Cuina.find();
    if (cuines.length === 0) {
      throw new Error('No hi ha cuines disponibles!');
    }

    for (let i = 0; i < restaurants.length; i++) {
      const cuinaAleatoria = cuines[Math.floor(Math.random() * cuines.length)];
      restaurants[i].cuina = cuinaAleatoria._id;
    }

    const newRestaurants = await Restaurant.insertMany(restaurants);
    console.log('Restaurants creats correctament!');

    // Exemples de consulta
    // const cuinaItaliana = await Cuina.findOne({ nom: 'Italiana' });
    // console.log(cuinaItaliana);
    // const restaurantsItalians = await Restaurant.find({ cuina: cuinaItaliana._id });
    // console.log(restaurantsItalians);
  
  } catch (error) {
    console.error('Error al generar restaurants:', error);
  } finally {
    mongoose.connection.close();
  }
}

seed();
    