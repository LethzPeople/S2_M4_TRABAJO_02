import { useState } from 'react';
import Header from '../components/Header';
import { MovieList } from '../components/MovieList';
import WatchlistModal from '../components/WatchlistModal';
import { useWatchlist } from '../hooks/useWatchlist';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { watchlist, addToWatchlist, removeFromWatchlist } = useWatchlist();
  
  const movies = [
    {
      id: 1,
      title: "The Substance",
      image: "https://postercinema.eu/cdn/shop/files/the-substance_vcvbwfcq.jpg?v=1728146651&width=600"
    },
    {
      id: 2,
      title: "Drive",
      image: "https://m.media-amazon.com/images/I/91vya3UmldL._AC_SY879_.jpg"
    },
    {
      id: 3,
      title: "Straight Outta Compton",
      image: "https://i.pinimg.com/736x/f0/31/dc/f031dc244eac7cd24eafd21ce119c952.jpg"
    },
    {
      id: 4,
      title: "The Captive",
      image: "https://resizing.flixster.com/5rbOuhJxYIKTOSzDP3nvsQCMs3M=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzJhYzRhY2IzLTBlOTQtNDUxZS1hYTFjLWE3MjllNWNjZWExOS5qcGc="
    },
    {
      id: 5,
      title: "Scream (2022)",
      image: "https://i.ebayimg.com/images/g/qoIAAOSwgYNipWiT/s-l1600.webp"
    },
    {
      id: 6,
      title: "Her",
      image: "https://image.tmdb.org/t/p/original/xPby6SuDafflEL7EWVHTFmhJsDp.jpg"
    },
    {
      id: 7,
      title: "X (2022)",
      image: "https://pics.filmaffinity.com/X-355161210-large.jpg"
    },
    {
      id: 8,
      title: "Last Night in Soho",
      image: "https://m.media-amazon.com/images/M/MV5BODdhZjBmZTEtZmQyMy00NWY5LWJiMWQtODhjODFkZWZlMjMyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
  ];
  
  return (
    <div className="min-h-screen bg-black">
      <Header onOpenWatchlist={() => setIsModalOpen(true)} />
      
      <main className="container mx-auto px-4 py-6">
        <MovieList
          movies={movies}
          onAddToWatchlist={addToWatchlist}
        />
      </main>
      
      {isModalOpen && (
        <WatchlistModal
          watchlist={watchlist}
          onClose={() => setIsModalOpen(false)}
          onRemove={removeFromWatchlist}
        />
      )}
    </div>
  );
};

export default Home;

