
import { BlogPost } from "@/types/blog";
import { formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";

interface BlogPostsListProps {
  posts: BlogPost[];
  onEdit: (post: BlogPost) => void;
  onDelete: (postId: string) => void;
}

const BlogPostsList = ({ posts, onEdit, onDelete }: BlogPostsListProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left px-4 py-3 font-medium">Title</th>
            <th className="text-left px-4 py-3 font-medium">Genre</th>
            <th className="text-left px-4 py-3 font-medium">Created</th>
            <th className="text-left px-4 py-3 font-medium">Featured</th>
            <th className="text-right px-4 py-3 font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-3 font-medium">{post.title}</td>
              <td className="px-4 py-3">{post.genre.name}</td>
              <td className="px-4 py-3">{formatDate(post.createdAt)}</td>
              <td className="px-4 py-3">
                {post.isFeatured ? 
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">Yes</span> : 
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded">No</span>
                }
              </td>
              <td className="px-4 py-3 text-right">
                <div className="flex justify-end space-x-2">
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => onEdit(post)}
                  >
                    <Pencil size={16} />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => onDelete(post.id)}
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {posts.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No blog posts found
        </div>
      )}
    </div>
  );
};

export default BlogPostsList;
