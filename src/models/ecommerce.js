import Mongoose from "mongoose";

const mensajesCollection = "mensajes";

const mensajesSchema = new Mongoose.Schema({
  email: { type: String, required: true },
  date: { type: String, required: true },
  texto: { type: String, required: false },
});

export const mensajes = new Mongoose.model(mensajesCollection, mensajesSchema);
