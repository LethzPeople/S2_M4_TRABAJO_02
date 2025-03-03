import Button from './Button';

const MovieCard = ({ movie, onAdd }) => {
  if (!movie) {
    return null;
  }

  return (
    <div className="relative flex flex-col bg-black overflow-hidden shadow-lg h-full transform transition-all duration-300 hover:scale-105">
      <img src={movie.image} alt={movie.title} className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-90">
        <h3 className="text-lg font-bold mb-2 text-white truncate">{movie.title}</h3>
        
        <div className="mt-auto">
          <Button 
            variant="primary" 
            onClick={() => onAdd(movie)}
          >
            Agregar a mi lista
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;





