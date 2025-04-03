
import { useParams } from "react-router-dom";
import { getBlogPosts, getBlogPostsByGenre, getGenres } from "@/lib/data";
import BlogCard from "@/components/BlogCard";
import GenreSelector from "@/components/GenreSelector";

const GenresPage = () => {
  const { genreSlug } = useParams<{ genreSlug: string }>();
  
  const posts = genreSlug 
    ? getBlogPostsByGenre(genreSlug) 
    : getBlogPosts();
  
  const genres = getGenres();
  const currentGenre = genres.find(g => g.slug === genreSlug);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif font-bold mb-2">
        {currentGenre ? currentGenre.name : 'All Genres'}
      </h1>
      
      <GenreSelector />
      
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h3 className="text-xl font-medium text-gray-700">
            No posts found in this genre.
          </h3>
        </div>
      )}
    </div>
  );
};

export default GenresPage;
