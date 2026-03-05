import { useState } from "react";
import { Copy, RefreshCw, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import frameworksData from "@/data/frameworks.json";

const domains = [
  "Mechanical Design",
  "Manufacturing",
  "Failure Analysis",
  "Product Development",
  "Research",
  "Software Engineering"
];

export default function PromptBuilder() {
  const [selectedFrameworkId, setSelectedFrameworkId] = useState(frameworksData[0].id);
  const [domain, setDomain] = useState(domains[0]);
  const [task, setTask] = useState("");
  const [context, setContext] = useState("");
  const [generatedPrompt, setGeneratedPrompt] = useState("");
  const [copied, setCopied] = useState(false);

  const selectedFramework = frameworksData.find(f => f.id === selectedFrameworkId) || frameworksData[0];

  const generatePrompt = () => {
    let prompt = "";
    
    // Basic template filling logic based on framework ID
    // In a real app, this would be more sophisticated or use a template engine
    switch (selectedFramework.id) {
      case "chain-of-thought":
        prompt = `Act as an expert in ${domain}.\nQ: ${task}\n${context ? `Context: ${context}\n` : ""}A: Let's think step by step.`;
        break;
      case "react":
        prompt = `Act as an expert in ${domain}.\nQuestion: ${task}\n${context ? `Context: ${context}\n` : ""}Thought: I need to break this down.\nAction: [Search/Calculate]`;
        break;
      case "crispe":
        prompt = `Capacity: Expert ${domain} Engineer\nInsight: ${context || "Standard engineering context"}\nStatement: ${task}\nPersonality: Professional and Technical\nExperiment: Provide a detailed analysis with pros and cons.`;
        break;
      case "co-star":
        prompt = `Context: ${context || "Engineering project"}\nObjective: ${task}\nStyle: Technical\nTone: Professional\nAudience: ${domain} Team\nResponse: Detailed Report`;
        break;
      case "risen":
        prompt = `Role: Senior ${domain} Engineer\nInstructions: ${task}\nSteps: Break down the solution into actionable steps.\nEnd Goal: A complete solution.\nNarrowing: ${context || "Focus on efficiency and safety."}`;
        break;
      case "rgcov":
        prompt = `Role: ${domain} Specialist\nGoal: ${task}\nContext: ${context}\nOutput: Technical Report\nVerification: Check against standard engineering principles.`;
        break;
      case "tree-of-thoughts":
        prompt = `Task: ${task}\nContext: ${context}\nImagine three different experts in ${domain} are solving this.\n1. Expert 1 proposes a solution.\n2. Expert 2 critiques it.\n3. Expert 3 offers an alternative.\nSynthesize the best solution.`;
        break;
      case "self-refine":
        prompt = `Task: ${task}\nContext: ${context}\n1. Generate a draft solution.\n2. Critique the draft for errors or inefficiencies.\n3. Provide a refined, final solution.`;
        break;
      case "ape":
        prompt = `Action: ${task}\nPurpose: To solve a ${domain} problem.\nExpectation: ${context || "Clear and concise answer."}`;
        break;
      case "dsp":
        prompt = `Direction: ${task}\nStructure: ${context || "Step-by-step list"}\nParameters: Focus on ${domain} best practices.`;
        break;
      case "markdown-prompting":
        prompt = `# Role\nYou are an expert ${domain} Engineer.\n\n# Objective\n${task}\n\n# Context\n${context || "Standard engineering context."}\n\n# Task\nProvide a detailed solution including calculations and reasoning.\n\n# Constraints\n- Use standard units.\n- Cite sources if applicable.\n\n# Output Format\nMarkdown report with clear headings.`;
        break;
      default:
        prompt = `${task}\n\nContext: ${context}`;
    }
    setGeneratedPrompt(prompt);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Interactive Prompt Builder</h1>
        <p className="text-xl text-muted-foreground">
          Select a framework and input your task to generate a structured engineering prompt.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <Card>
          <CardHeader>
            <CardTitle>Configuration</CardTitle>
            <CardDescription>Define your engineering task.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Prompt Framework</Label>
              <Select 
                value={selectedFrameworkId} 
                onChange={(e) => setSelectedFrameworkId(e.target.value)}
              >
                {frameworksData.map(f => (
                  <option key={f.id} value={f.id}>{f.name}</option>
                ))}
              </Select>
              <p className="text-xs text-muted-foreground">
                {selectedFramework.description}
              </p>
            </div>

            <div className="space-y-2">
              <Label>Engineering Domain</Label>
              <Select 
                value={domain} 
                onChange={(e) => setDomain(e.target.value)}
              >
                {domains.map(d => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Task / Objective</Label>
              <Textarea 
                placeholder="e.g., Design a mounting bracket for a NEMA 17 stepper motor..." 
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="h-24"
              />
            </div>

            <div className="space-y-2">
              <Label>Context / Constraints (Optional)</Label>
              <Textarea 
                placeholder="e.g., Must be 3D printable, max load 5kg..." 
                value={context}
                onChange={(e) => setContext(e.target.value)}
                className="h-24"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={generatePrompt} className="w-full" disabled={!task}>
              <RefreshCw className="mr-2 h-4 w-4" /> Generate Prompt
            </Button>
          </CardFooter>
        </Card>

        {/* Output Section */}
        <Card className="flex flex-col h-full bg-muted/30">
          <CardHeader>
            <CardTitle>Generated Prompt</CardTitle>
            <CardDescription>Ready to copy and paste into your AI tool.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            {generatedPrompt ? (
              <div className="bg-background p-6 rounded-md border shadow-sm font-mono text-sm whitespace-pre-wrap h-full min-h-[300px]">
                {generatedPrompt}
              </div>
            ) : (
              <div className="flex items-center justify-center h-full min-h-[300px] text-muted-foreground border-2 border-dashed rounded-md">
                Configure settings to generate a prompt
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button 
              variant="default" 
              className="w-full" 
              onClick={handleCopy}
              disabled={!generatedPrompt}
            >
              {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
              {copied ? "Copied to Clipboard" : "Copy to Clipboard"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
