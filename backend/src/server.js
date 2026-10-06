require('dotenv').config();
const express = require('express');
const cors = require('cors');

const filmsRoutes = require('./routes/filmsRoutes');
const realisateursRoutes = require('./routes/realisateursRoutes');
const genresRoutes = require('./routes/genresRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.use('/films', filmsRoutes);
app.use('/realisateurs', realisateursRoutes);
app.use('/genres', genresRoutes);

app.use((req, res) => {
  res.status(404).json({ erreur: 'Route introuvable' });
});

app.listen(PORT, () => {
  console.log(`Serveur backend démarré sur http://localhost:${PORT}`);
});