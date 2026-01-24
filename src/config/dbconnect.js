import mongoose, { mongo } from "mongoose";

function conectaNaDatabase() {
  mongoose.connect(process.env.DB_CONNECTION_STRING);
  return mongoose.connection;
}

export default conectaNaDatabase;
