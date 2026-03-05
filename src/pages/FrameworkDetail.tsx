import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Copy, Check, AlertTriangle, Info } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FrameworkDiagram } from "@/components/FrameworkDiagram";
import frameworksData from "@/data/frameworks.json";

export default function FrameworkDetail() {
  const { id } = useParams();
  const framework = frameworksData.find((f) => f.id === id);
  const [copied, setCopied] = useState(false);

  if (!framework) {
    return <div className="container mx-auto px-4 py-20 text-center">Framework not found</div>;
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(framework.copy_prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Link to="/frameworks" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Frameworks
      </Link>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold">{framework.name}</h1>
            <Badge className="text-base px-3">Rank #{framework.rank}</Badge>
          </div>
          <p className="text-xl text-muted-foreground">{framework.description}</p>
        </div>
      </div>

      <div className="grid gap-8">
        {/* Core Concept & Diagram */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" /> Core Concept
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-1">When to use</h3>
                <p className="text-muted-foreground">{framework.when_to_use}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Logic Description</h3>
                <p className="text-muted-foreground italic">{framework.diagram_description}</p>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex flex-col">
            <div className="mb-2 font-semibold flex items-center gap-2">
              Visual Logic
            </div>
            <FrameworkDiagram frameworkId={framework.id} />
          </div>
        </div>

        {/* Template & Example */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-muted/30 border-dashed">
            <CardHeader>
              <CardTitle className="text-lg">Template Structure</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="whitespace-pre-wrap font-mono text-sm bg-background p-4 rounded-md border">
                {framework.template}
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Engineering Example</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{framework.engineering_example}</p>
            </CardContent>
          </Card>
        </div>

        {/* Copy Paste Section */}
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Ready-to-Use Prompt</CardTitle>
            <Button variant="outline" size="sm" onClick={handleCopy}>
              {copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
              {copied ? "Copied" : "Copy Prompt"}
            </Button>
          </CardHeader>
          <CardContent>
            <div className="bg-background p-4 rounded-md border font-mono text-sm whitespace-pre-wrap">
              {framework.copy_prompt}
            </div>
          </CardContent>
        </Card>

        {/* Mistakes */}
        <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6">
          <h3 className="flex items-center font-bold text-destructive mb-2">
            <AlertTriangle className="h-5 w-5 mr-2" /> Common Mistakes
          </h3>
          <p className="text-sm text-muted-foreground">{framework.mistakes}</p>
        </div>
      </div>
    </div>
  );
}
