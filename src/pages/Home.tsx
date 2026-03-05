import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Zap, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4 text-center bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto max-w-4xl">
          <Badge className="mb-4 px-4 py-1 text-sm" variant="secondary">
            Updated for 2026
          </Badge>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Master AI Engineering Workflows
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            A curated reference of the top prompt frameworks for mechanical engineers, product designers, and hardware founders.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto text-base px-8 h-12">
              <Link to="/frameworks">
                Explore Frameworks <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto text-base px-8 h-12">
              <Link to="/prompt-builder">
                Build a Prompt
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-none bg-muted/10">
              <CardContent className="pt-6">
                <div className="mb-4 bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center text-primary">
                  <Layers className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">10+ Proven Frameworks</h3>
                <p className="text-muted-foreground">
                  From Chain of Thought to CRISPE. Learn the structured methods that yield better engineering results.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-none bg-muted/10">
              <CardContent className="pt-6">
                <div className="mb-4 bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center text-primary">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Interactive Builder</h3>
                <p className="text-muted-foreground">
                  Don't start from scratch. Use our builder to generate structured prompts for failure analysis, design, and more.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-none bg-muted/10">
              <CardContent className="pt-6">
                <div className="mb-4 bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center text-primary">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Engineering Library</h3>
                <p className="text-muted-foreground">
                  Copy-paste ready prompts for FMEA, tolerance analysis, manufacturing planning, and code generation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 border-t">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to upgrade your workflow?</h2>
          <Button asChild size="lg" variant="secondary">
            <Link to="/prompt-library">
              Browse the Prompt Library
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
