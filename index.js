const express = require('express');
const bodyParser = require('body-parser');
const terrainsRoutes = require('./routes/terrainsRoutes');
const reservationsRoutes = require('./routes/reservationsRoutes');
const usersRoutes = require('./routes/usersRoutes');
const authRoutes = require('./routes/authRoutes');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/terrains', terrainsRoutes);
app.use('/reservations', reservationsRoutes);
app.use('/users', usersRoutes);
app.use('/auth', authRoutes);
app.get('/', (req, res) => {
    res.send('Bienvenue sur l\'API de réservation de terrains de badminton !');
});
app.listen(port, () => {
    console.log(`Le serveur est en cours d'exécution sur http://localhost:${port}`);
});
