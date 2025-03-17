import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  cuina: { type: mongoose.Schema.Types.ObjectId, ref: 'Cuina', required: true },
  adreça: {
    carrer: { type: String, required: true },
    codiPostal: { type: String, required: true }
  },
  barri: { type: String, required: true },
  qualificacions: [
    {
      data: { type: Date, required: true },
      qualificacio: { type: String, required: true, enum: ['A', 'B', 'C', 'D'] },
      puntuacio: { type: Number, required: true }
    }
  ],
  restaurant_id: { type: String, required: true }
}, { timestamps: true });

export const Restaurant = mongoose.models.Restaurant || mongoose.model('Restaurant', restaurantSchema,'restaurants');