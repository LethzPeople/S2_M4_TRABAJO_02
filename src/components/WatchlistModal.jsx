import Button from './Button';

const WatchlistModal = ({ watchlist, onClose, onRemove }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-55 flex items-center justify-center">
      <div className="bg-black p-6 w-3/4 max-w-lg">
        <h2 className="text-2xl font-bold mb-4">Mi Lista</h2>
        {watchlist.length === 0 ? (
          <p className="mb-4">No hay películas en la lista</p> 
        ) : (
          <ul>
            {watchlist.map(movie => (
              <li key={movie.id} className="flex justify-between items-center mb-2">
                <span>{movie.title}</span>
                <Button
                  variant="secondary" 
                  onClick={() => onRemove(movie.id)}
                  className="bg-red-600 text-white border-2 border-red-600 hover:bg-red-700 hover:border-red-700 hover:shadow-[0_0_20px_#ff0000] transition-all duration-300 ease-in-out"
                >
                  Eliminar
                </Button>
              </li>
            ))}
          </ul>
        )}
        <Button variant="primary" onClick={onClose} className="mt-4">Cerrar</Button>
      </div>
    </div>
  );
};

export default WatchlistModal;





