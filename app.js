const express = require('express');
const port = 3000;
const app = express();
const initDb = require('./Model/initDb');
const auth = require('./auth/auth');
const livreRoutes = require('./routes/livreRoutes');
app.use(express.json());
const cors = require('cors');
app.use(cors()); 
app.use('/apilivre',auth, livreRoutes);
app.use('/login', require('./routes/loginRoutes')); // Ajouter le point de terminaison
app.listen(port, () => console.log(`Server running on port ${port}`));
