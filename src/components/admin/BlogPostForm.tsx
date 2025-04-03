
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
import { Image } from "lucide-react";

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

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(post?.coverImage || null);
  
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      
      // Create preview URL
      const fileUrl = URL.createObjectURL(file);
      setPreviewUrl(fileUrl);
      
      // Set the file path for the form data
      // In a real app, this would be handled after upload, but we're simulating
      setFormData(prev => ({ 
        ...prev, 
        coverImage: `/lovable-uploads/${file.name}` 
      }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you'd upload the file first and get a URL
    // For now, we'll add the uploaded image path to formData
    if (selectedFile) {
      // The image would now be uploaded to public/lovable-uploads/
      // and the path would be set in formData.coverImage
      formData.coverImage = "/lovable-uploads/249c693c-de68-4f17-ae99-4bb5cdd2dcb2.png";
    }
    
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
          <Label htmlFor="coverImage">Cover Image</Label>
          <div className="mt-2 space-y-4">
            <div className="flex items-center space-x-4">
              <Input
                id="imageUpload"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="flex-1"
              />
            </div>
            
            {previewUrl && (
              <div className="mt-4">
                <p className="text-sm text-gray-500 mb-2">Image Preview:</p>
                <div className="border rounded-md overflow-hidden w-40 h-40">
                  <img 
                    src={previewUrl} 
                    alt="Cover preview" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>
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
