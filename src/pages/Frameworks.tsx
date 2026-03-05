import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import frameworksData from "@/data/frameworks.json";

export default function Frameworks() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Prompt Frameworks</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          The top 10 structured prompting methods for engineering applications, ranked by utility and popularity in 2026.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {frameworksData.map((framework) => (
          <Card key={framework.id} className="flex flex-col hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <Badge variant="outline" className="mb-2">Rank #{framework.rank}</Badge>
              </div>
              <CardTitle className="text-2xl">{framework.name}</CardTitle>
              <CardDescription className="line-clamp-2 mt-2">
                {framework.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Best for:</span> {framework.when_to_use}
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full group">
                <Link to={`/frameworks/${framework.id}`}>
                  View Details 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
