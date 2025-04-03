
import { Link, useParams } from "react-router-dom";
import { getGenres } from "@/lib/data";
import { cn } from "@/lib/utils";

const GenreSelector = () => {
  const { genreSlug } = useParams<{ genreSlug: string }>();
  const genres = getGenres();
  
  return (
    <div className="flex flex-wrap gap-2 my-6">
      <Link 
        to="/genres" 
        className={cn(
          "px-4 py-2 rounded-full text-sm font-medium transition-colors",
          !genreSlug ? "bg-kavitha-purple text-white" : "bg-gray-100 hover:bg-gray-200"
        )}
      >
        All
      </Link>
      
      {genres.map((genre) => (
        <Link 
          key={genre.id} 
          to={`/genres/${genre.slug}`}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-colors",
            genreSlug === genre.slug ? "bg-kavitha-purple text-white" : "bg-gray-100 hover:bg-gray-200"
          )}
        >
          {genre.name}
        </Link>
      ))}
    </div>
  );
};

export default GenreSelector;
