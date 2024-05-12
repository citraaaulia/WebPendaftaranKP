const express = require("express");
const db = require("./config/database.js");
const cookieParser = require("cookie-parser");
const router = require("./routes/index.js");
const dotenv = require ("dotenv");
const cors = require ("cors");
dotenv.config();

try {
    await db.authenticate();
    console.log('Database Connected...');
} catch (error) {
    console.error(error);
}

app.use(cors({ credential:true, origin:'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(8000, ()=> console.log('server running at port 8000'));