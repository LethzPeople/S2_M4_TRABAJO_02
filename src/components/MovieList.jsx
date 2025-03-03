import MovieCard from './MovieCard';

export const MovieList = ({ movies, onAddToWatchlist }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-red-700 mb-4">Películas Disponibles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onAdd={onAddToWatchlist}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
