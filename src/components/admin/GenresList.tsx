
import { Genre } from "@/types/blog";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";

interface GenresListProps {
  genres: Genre[];
  onEdit: (genre: Genre) => void;
  onDelete: (genreId: string) => void;
}

const GenresList = ({ genres, onEdit, onDelete }: GenresListProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left px-4 py-3 font-medium">Name</th>
            <th className="text-left px-4 py-3 font-medium">Slug</th>
            <th className="text-right px-4 py-3 font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {genres.map((genre) => (
            <tr key={genre.id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-3 font-medium">{genre.name}</td>
              <td className="px-4 py-3">{genre.slug}</td>
              <td className="px-4 py-3 text-right">
                <div className="flex justify-end space-x-2">
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => onEdit(genre)}
                  >
                    <Pencil size={16} />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => onDelete(genre.id)}
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {genres.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No genres found
        </div>
      )}
    </div>
  );
};

export default GenresList;
