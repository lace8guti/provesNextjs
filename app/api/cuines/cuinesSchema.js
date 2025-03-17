const mongoose = require('mongoose');

// Schema pare (Dispositiu)
const DispositiuSchema = new mongoose.Schema(
    {
        marca: { type: String, required: true },
        model: { type: String, required: true },
        anyFabricacio: Number,
    },
    { discriminatorKey: 'tipus', collection: 'dispositius' } // Defineix la clau per diferenciar els fills
);

// Model base
const Dispositiu = mongoose.model('Dispositiu', DispositiuSchema);

// Schema fill 1 (Mòbil)
const Mobil = Dispositiu.discriminator(
    'Mobil',
    new mongoose.Schema({
        sistemaOperatiu: String,
        midaPantalla: Number, // en polzades
    })
);

// Schema fill 2 (Portàtil)
const Portatil = Dispositiu.discriminator(
    'Portatil',
    new mongoose.Schema({
        processador: String,
        ram: Number, // en GB
    })
);

module.exports = { Dispositiu, Mobil, Portatil };