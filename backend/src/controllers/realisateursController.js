const connection = require('../config/db');

exports.getAllRealisateurs = (req, res) => {
  connection.query('SELECT * FROM realisateurs', (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ erreur: 'Erreur serveur' });
    }
    res.status(200).json(results);
  });
};