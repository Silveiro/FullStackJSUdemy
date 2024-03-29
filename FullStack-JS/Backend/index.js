import express from "express";
import dotenv from "dotenv";
import conectarDB from "../Backend/config/db..js";
import veterinarioRoutes from "./Routes/veterinarioRoutes.js";


const app = express();
app.use(express.json());
dotenv.config();
conectarDB();


app.use("/api/veterinarios", veterinarioRoutes )

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`servidor funcionando en el puerto ${PORT}`)
});