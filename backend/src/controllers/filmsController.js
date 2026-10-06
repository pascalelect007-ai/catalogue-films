const connection = require('../config/db');

exports.getAllFilms = (req, res) => {
  const query = `
    SELECT films.id, films.titre, films.annee, films.duree, films.synopsis, films.affiche,
           realisateurs.nom AS realisateur, genres.nom AS genre
    FROM films
    JOIN realisateurs ON films.realisateur_id = realisateurs.id
    JOIN genres ON films.genre_id = genres.id
  `;
  connection.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ erreur: 'Erreur serveur' });
    }
    res.status(200).json(results);
  });
};

exports.getFilmById = (req, res) => {
  const query = `
    SELECT films.id, films.titre, films.annee, films.duree, films.synopsis, films.affiche,
           realisateurs.nom AS realisateur, genres.nom AS genre
    FROM films
    JOIN realisateurs ON films.realisateur_id = realisateurs.id
    JOIN genres ON films.genre_id = genres.id
    WHERE films.id = ?
  `;
  connection.query(query, [req.params.id], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ erreur: 'Erreur serveur' });
    }
    if (results.length === 0) {
      return res.status(404).json({ erreur: 'Film introuvable' });
    }
    res.status(200).json(results[0]);
  });
};