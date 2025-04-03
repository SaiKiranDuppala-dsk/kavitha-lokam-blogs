
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { BlogPost, Genre } from "@/types/blog";
import { getGenres } from "@/lib/data";
import { slugify } from "@/lib/utils";

interface BlogPostFormProps {
  post?: BlogPost;
  onSave: (post: Partial<BlogPost>) => void;
}

const BlogPostForm = ({ post, onSave }: BlogPostFormProps) => {
  const genres = getGenres();
  const [formData, setFormData] = useState<Partial<BlogPost>>({
    title: post?.title || "",
    slug: post?.slug || "",
    excerpt: post?.excerpt || "",
    content: post?.content || "",
    genreId: post?.genre.id || genres[0].id,
    coverImage: post?.coverImage || "/placeholder.svg",
    isFeatured: post?.isFeatured || false
  });
  
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Auto-generate slug from title
    if (name === "title") {
      setFormData(prev => ({ ...prev, slug: slugify(value) }));
    }
  };
  
  const handleGenreChange = (value: string) => {
    setFormData(prev => ({ ...prev, genreId: value }));
  };
  
  const handleFeaturedChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, isFeatured: checked }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleTextChange}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="slug">Slug</Label>
          <Input
            id="slug"
            name="slug"
            value={formData.slug}
            onChange={handleTextChange}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="excerpt">Excerpt</Label>
          <Textarea
            id="excerpt"
            name="excerpt"
            value={formData.excerpt}
            onChange={handleTextChange}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="content">Content (Markdown)</Label>
          <Textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleTextChange}
            required
            className="min-h-[300px] font-mono"
          />
        </div>
        
        <div>
          <Label htmlFor="genre">Genre</Label>
          <Select
            value={formData.genreId}
            onValueChange={handleGenreChange}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a genre" />
            </SelectTrigger>
            <SelectContent>
              {genres.map((genre) => (
                <SelectItem key={genre.id} value={genre.id}>
                  {genre.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="coverImage">Cover Image URL</Label>
          <Input
            id="coverImage"
            name="coverImage"
            value={formData.coverImage}
            onChange={handleTextChange}
            placeholder="/placeholder.svg"
          />
        </div>
        
        <div className="flex items-center space-x-2">
          <Switch
            id="isFeatured"
            checked={formData.isFeatured}
            onCheckedChange={handleFeaturedChange}
          />
          <Label htmlFor="isFeatured">Featured Post</Label>
        </div>
      </div>
      
      <div className="flex justify-end">
        <Button type="submit">
          {post ? "Update" : "Create"} Blog Post
        </Button>
      </div>
    </form>
  );
};

export default BlogPostForm;
