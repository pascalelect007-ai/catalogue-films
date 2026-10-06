import './App.css'
import { useState } from 'react'

import inceptionPoster from './assets/movies/inception.jpg'
import interstellarPoster from './assets/movies/interstellar.jpg'
import darkKnightPoster from './assets/movies/dark-knight.jpg'
import parasitePoster from './assets/movies/parasite.jpg'
import toyStoryPoster from './assets/movies/toy-story.jpg'
import titanicPoster from './assets/movies/titanic.jpg'
import avengersEndgamePoster from './assets/movies/avengers-endgame.jpg'
import conjuringPoster from './assets/movies/the-conjuring.jpg'
import hangoverPoster from './assets/movies/the-hangover.jpg'
import shawshankPoster from './assets/movies/shawshank-redemption.jpg'

function App() {
  const [recherche, setRecherche] = useState('')
  const [genreSelectionne, setGenreSelectionne] = useState('Tous')
  const [filmSelectionne, setFilmSelectionne] = useState(null)
 const films = [
  {
    id: 1,
    titre: 'Inception',
    realisateur: 'Christopher Nolan',
    annee: 2010,
    genre: 'Science-fiction',
    duree: '2 h 28',
    affiche: inceptionPoster,
    synopsis:
      'Dom Cobb est un voleur expérimenté capable de s’introduire dans les rêves des autres pour y dérober des informations secrètes. Lorsqu’une mission lui demande au contraire d’implanter une idée dans l’esprit d’une personne, il accepte ce défi exceptionnel. Mais plus il s’enfonce dans les différents niveaux de rêve, plus la frontière entre le rêve et la réalité devient difficile à distinguer.',
  },
  {
    id: 2,
    titre: 'Interstellar',
    realisateur: 'Christopher Nolan',
    annee: 2014,
    genre: 'Science-fiction',
    duree: '2 h 49',
    affiche: interstellarPoster,
    synopsis:
      'Dans un futur où la Terre devient de moins en moins habitable, un ancien pilote de la NASA rejoint une mission spatiale destinée à rechercher une nouvelle planète capable d’accueillir l’humanité. L’équipage voyage à travers un mystérieux passage spatial et doit affronter des distances immenses, des phénomènes extraordinaires et des choix difficiles.',
  },
  {
    id: 3,
    titre: 'The Dark Knight',
    realisateur: 'Christopher Nolan',
    annee: 2008,
    genre: 'Action',
    duree: '2 h 32',
    affiche: darkKnightPoster,
    synopsis:
      'Batman poursuit son combat contre la criminalité à Gotham City avec l’aide du commissaire Gordon et du procureur Harvey Dent. Mais l’arrivée d’un criminel imprévisible connu sous le nom du Joker plonge la ville dans le chaos. Batman doit alors affronter un adversaire qui cherche à tester ses limites et celles de toute la société.',
  },
  {
    id: 4,
    titre: 'Parasite',
    realisateur: 'Bong Joon-ho',
    annee: 2019,
    genre: 'Drame',
    duree: '2 h 12',
    affiche: parasitePoster,
    synopsis:
      'Une famille vivant dans une situation économique difficile découvre une opportunité lorsqu’un de ses membres commence à travailler pour une famille riche. Peu à peu, les autres membres de la famille s’introduisent eux aussi dans leur quotidien. Cette rencontre entre deux milieux sociaux très différents entraîne progressivement des événements inattendus.',
  },
  {
    id: 5,
    titre: 'Toy Story',
    realisateur: 'John Lasseter',
    annee: 1995,
    genre: 'Animation',
    duree: '1 h 21',
    affiche: toyStoryPoster,
    synopsis:
      'Woody est le jouet préféré d’un jeune garçon et le chef de ses autres jouets. Tout change lorsque Buzz l’Éclair, un nouveau jouet convaincu d’être un véritable héros venu de l’espace, arrive dans la chambre. Une rivalité commence entre les deux personnages avant qu’ils ne soient obligés de mettre leurs différences de côté pour retrouver leur propriétaire.',
  },
  {
    id: 6,
    titre: 'Titanic',
    realisateur: 'James Cameron',
    annee: 1997,
    genre: 'Romance',
    duree: '3 h 14',
    affiche: titanicPoster,
    synopsis:
      'Rose, une jeune femme issue d’une famille aisée, voyage à bord du Titanic alors qu’elle se sent prisonnière des attentes de son entourage. Elle rencontre Jack, un jeune homme voyageant dans une classe beaucoup plus modeste. Leur rencontre donne naissance à une histoire d’amour qui se déroule alors que le navire poursuit son voyage à travers l’Atlantique.',
  },
  {
    id: 7,
    titre: 'Avengers: Endgame',
    realisateur: 'Anthony Russo',
    annee: 2019,
    genre: 'Action',
    duree: '3 h 01',
    affiche: avengersEndgamePoster,
    synopsis:
      'Après les événements qui ont bouleversé l’univers, les Avengers survivants doivent faire face aux conséquences de leur défaite. Alors qu’une nouvelle possibilité apparaît, les héros décident de tenter une dernière mission pour réparer les dégâts et sauver ceux qu’ils ont perdus. Cette mission les oblige à affronter leur passé et à unir leurs forces une dernière fois.',
  },
  {
    id: 8,
    titre: 'The Conjuring',
    realisateur: 'James Wan',
    annee: 2013,
    genre: 'Horreur',
    duree: '1 h 52',
    affiche: conjuringPoster,
    synopsis:
      'Une famille s’installe dans une vieille maison isolée et commence rapidement à être confrontée à des phénomènes inquiétants. Elle fait appel à deux enquêteurs spécialisés dans les phénomènes paranormaux. Ceux-ci découvrent que la maison semble cacher une histoire particulièrement sombre et doivent tenter de protéger la famille contre une présence menaçante.',
  },
  {
    id: 9,
    titre: 'The Hangover',
    realisateur: 'Todd Phillips',
    annee: 2009,
    genre: 'Comédie',
    duree: '1 h 40',
    affiche: hangoverPoster,
    synopsis:
      'Trois amis accompagnent leur meilleur ami à Las Vegas pour célébrer son enterrement de vie de garçon. Après une nuit dont ils ne gardent presque aucun souvenir, ils se réveillent dans une chambre complètement désordonnée et découvrent que le futur marié a disparu. Ils doivent alors reconstituer les événements de la nuit pour retrouver leur ami avant le mariage.',
  },
  {
    id: 10,
    titre: 'The Shawshank Redemption',
    realisateur: 'Frank Darabont',
    annee: 1994,
    genre: 'Drame',
    duree: '2 h 22',
    affiche: shawshankPoster,
    synopsis:
      'Andy Dufresne est condamné à une longue peine de prison après avoir été reconnu coupable du meurtre de sa femme et de son amant. Malgré les difficultés de la vie carcérale, il conserve son intelligence, son calme et son espoir. Au fil des années, il développe une profonde amitié avec Red et cherche à construire une nouvelle vie malgré les murs qui l’entourent.',
  },
]
  const filmsFiltres = films.filter((film) => {
  const correspondRecherche = film.titre
    .toLowerCase()
    .includes(recherche.toLowerCase())

  const correspondGenre =
    genreSelectionne === 'Tous' ||
    film.genre === genreSelectionne

  return correspondRecherche && correspondGenre
})
  return (
    <div>
      <header>
        <h1>Catalogue Films</h1>

        <nav>
          <a href="#">Accueil</a>
          <a href="#films">Films</a>
          <a href="#genres">Genres</a>
        </nav>

        <button>☰</button>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
  <div className="hero-content">
    <p>VOTRE CINÉMA, VOTRE CATALOGUE</p>

    <h1>Découvrez les nouveaux films</h1>

    <p>
      Explorez notre sélection de films et trouvez votre prochaine histoire à regarder.
    </p>
  </div>
</section>
{/* RECHERCHE ET FILTRES */}
<section className="search-section">
  <div className="search-container">
    <label htmlFor="recherche">Rechercher un film</label>

    <input
      id="recherche"
      type="text"
      placeholder="Exemple : Inception..."
      value={recherche}
      onChange={(e) => setRecherche(e.target.value)}
    />

    <div className="genre-filters">
      <button
        className={genreSelectionne === 'Tous' ? 'active' : ''}
        onClick={() => setGenreSelectionne('Tous')}
      >
        Tous
      </button>

      <button
        className={genreSelectionne === 'Action' ? 'active' : ''}
        onClick={() => setGenreSelectionne('Action')}
      >
        Action
      </button>

      <button
        className={genreSelectionne === 'Science-fiction' ? 'active' : ''}
        onClick={() => setGenreSelectionne('Science-fiction')}
      >
        Science-fiction
      </button>

      <button
        className={genreSelectionne === 'Drame' ? 'active' : ''}
        onClick={() => setGenreSelectionne('Drame')}
      >
        Drame
      </button>

      <button
        className={genreSelectionne === 'Animation' ? 'active' : ''}
        onClick={() => setGenreSelectionne('Animation')}
      >
        Animation
      </button>
    </div>
  </div>
</section>
        {/* CATALOGUE */}
        <section className="movies-section" id="films">
          <div className="section-heading">
            <p>NOTRE CATALOGUE</p>
            <h2>Films populaires</h2>
          </div>

          <div className="movies-grid">
           {filmsFiltres.map((film) => (
              <article
  className="movie-card"
  key={film.id}
  onClick={() => setFilmSelectionne(film)}
>
                <div className="movie-poster">
                  <img
                    src={film.affiche}
                    alt={`Affiche du film ${film.titre}`}
                  />
                </div>

                <div className="movie-info">
                  <h3>{film.titre}</h3>

                  <p className="movie-director">
                    {film.realisateur}
                  </p>

                  <div className="movie-meta">
                    <span>{film.annee}</span>
                    <span>{film.genre}</span>
                    <span>{film.duree}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
                {filmSelectionne && (
          <div
            className="movie-modal-overlay"
            onClick={() => setFilmSelectionne(null)}
          >
            <div
              className="movie-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="movie-modal-close"
                onClick={() => setFilmSelectionne(null)}
              >
                ×
              </button>

              <div className="movie-modal-content">
                <img
                  src={filmSelectionne.affiche}
                  alt={`Affiche du film ${filmSelectionne.titre}`}
                />

                <div className="movie-modal-info">
                  <p className="movie-modal-category">
                    {filmSelectionne.genre}
                  </p>

                  <h2>{filmSelectionne.titre}</h2>

                  <p className="movie-modal-meta">
                    {filmSelectionne.annee} · {filmSelectionne.duree}
                  </p>

                  <p className="movie-modal-director">
                    Réalisateur : {filmSelectionne.realisateur}
                  </p>

                  <h3>Synopsis</h3>

                  <p className="movie-modal-synopsis">
                    {filmSelectionne.synopsis}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App