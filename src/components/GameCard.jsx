import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa"; // Import heart icons
import { useGameContext } from "../context/GameContext"; 

const GameCard = ({ game }) => { // Destructure game prop
  const { addFavorite, removeFavorite, isFavorite } = useGameContext(); // Access context functions 
  const favorite = isFavorite(game.id); // Check if game is favorite

  return (
    <Link
      to={`/games/${game.id}`} // Link to game details page
      className="group card bg-white/5 hover:bg-white/10 rounded-xl overflow-hidden shadow-lg transition"
    >
      <figure className="h-44 overflow-hidden"> // Image container
        <img
          src={game.thumbnail} // Game thumbnail
          alt={game.title}     // Alt text for accessibility
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
      </figure>

      <div className="p-4 space-y-2">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-lg line-clamp-1">
            {game.title}      // Game title
          </h3>

          <button
          onClick={(e) => {
            e.preventDefault(); // Prevent navigation on button click
            favorite ? removeFavorite(game.id) : addFavorite(game); }} // Toggle favorite status
            className="text-xl"
            title="Favorite">
              {favorite ? ( // Filled heart if favorite 
                <FaHeart className="text-pink-500 transition scale-110" /> ) : (
                <FaRegHeart className="text-white/50 hover:text-pink-400 transition" />
             )}
          </button>
        </div>

        <p className="text-sm text-gray-400">{game.genre}</p> // Game genre
        <p className="text-xs text-gray-500 line-clamp-2">
          {game.short_description} // Short description
        </p>

        <div className="flex justify-between items-center pt-2">
          <span className="badge badge-outline text-xs">
            {game.platform} // Game platform
          </span>
          <span className="text-xs text-primary">View Details →</span>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;