import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Engineering AI Blog</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Insights, tutorials, and guides on leveraging artificial intelligence in mechanical and hardware engineering.
        </p>
      </div>

      <div className="grid gap-8">
        {blogPosts.map((post) => (
          <Link key={post.id} to={`/blog/${post.id}`}>
            <Card className="flex flex-col md:flex-row overflow-hidden hover:shadow-md transition-shadow h-full">
              <div className="md:w-1/3 bg-muted/20 flex items-center justify-center p-8">
                <div className="text-primary/20">
                  {/* Placeholder for blog image */}
                  <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
                    <path d="M7 15h10v2H7zm0-4h10v2H7zm0-4h10v2H7z"/>
                  </svg>
                </div>
              </div>
              <div className="md:w-2/3 flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-2xl hover:text-primary">{post.title}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto flex justify-between items-center border-t pt-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><User className="h-3 w-3" /> {post.author}</span>
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                  </div>
                  <Button asChild variant="ghost" size="sm" className="ml-auto">
                    <span>Read Article <ArrowRight className="ml-2 h-3 w-3" /></span>
                  </Button>
                </CardFooter>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
