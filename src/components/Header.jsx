import Button from './Button';

const Header = ({ onOpenWatchlist }) => {
  return (
    <header className="bg-black text-yellow-400 p-4 border-b-2 border-yellow-400">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/header-img.png"
            alt="Logo"
            className="w-6 h-6 mr-2 neon-img mt-1"
          />
          <h1 className="text-2xl font-bold neon-text">Movie List</h1>
        </div>
        <Button variant="primary" onClick={onOpenWatchlist}>Mi lista</Button>
      </div>
    </header>
  );
};

export default Header;


