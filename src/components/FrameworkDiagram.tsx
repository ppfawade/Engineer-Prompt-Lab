import { motion } from "motion/react";

interface FrameworkDiagramProps {
  frameworkId: string;
}

export function FrameworkDiagram({ frameworkId }: FrameworkDiagramProps) {
  const renderDiagram = () => {
    // Common styles
    const boxStrokeWidth = "3";
    const arrowStrokeWidth = "2";
    const textClass = "text-sm font-medium fill-foreground";
    const subTextClass = "text-xs fill-muted-foreground";

    switch (frameworkId) {
      case "chain-of-thought":
        return (
          <svg viewBox="0 0 400 200" className="w-full h-auto">
            <defs>
              <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L9,3 z" fill="currentColor" className="text-muted-foreground" />
              </marker>
            </defs>
            <g className="text-primary" stroke="currentColor" fill="none">
              <rect x="20" y="80" width="80" height="40" rx="4" strokeWidth={boxStrokeWidth} />
              <text x="60" y="105" textAnchor="middle" stroke="none" className={textClass}>Input</text>
              
              <line x1="100" y1="100" x2="140" y2="100" strokeWidth={arrowStrokeWidth} markerEnd="url(#arrow)" />
              
              <rect x="140" y="80" width="120" height="40" rx="4" strokeWidth={boxStrokeWidth} strokeDasharray="4 4" />
              <text x="200" y="105" textAnchor="middle" stroke="none" className={textClass}>Reasoning</text>
              
              <line x1="260" y1="100" x2="300" y2="100" strokeWidth={arrowStrokeWidth} markerEnd="url(#arrow)" />
              
              <rect x="300" y="80" width="80" height="40" rx="4" strokeWidth={boxStrokeWidth} />
              <text x="340" y="105" textAnchor="middle" stroke="none" className={textClass}>Output</text>
            </g>
          </svg>
        );
      case "react":
        return (
          <svg viewBox="0 0 400 250" className="w-full h-auto">
             <defs>
              <marker id="arrow-react" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L9,3 z" fill="currentColor" className="text-muted-foreground" />
              </marker>
            </defs>
            <g className="text-primary" stroke="currentColor" fill="none">
              {/* Cycle */}
              <circle cx="200" cy="125" r="90" strokeDasharray="4 4" strokeWidth="1" className="text-muted-foreground/30" />
              
              <rect x="160" y="20" width="80" height="40" rx="4" strokeWidth={boxStrokeWidth} />
              <text x="200" y="45" textAnchor="middle" stroke="none" className={textClass}>Thought</text>
              
              <line x1="240" y1="40" x2="300" y2="80" strokeWidth={arrowStrokeWidth} markerEnd="url(#arrow-react)" />
              
              <rect x="280" y="80" width="80" height="40" rx="4" strokeWidth={boxStrokeWidth} />
              <text x="320" y="105" textAnchor="middle" stroke="none" className={textClass}>Action</text>
              
              <line x1="320" y1="120" x2="260" y2="180" strokeWidth={arrowStrokeWidth} markerEnd="url(#arrow-react)" />
              
              <rect x="160" y="180" width="80" height="40" rx="4" strokeWidth={boxStrokeWidth} />
              <text x="200" y="205" textAnchor="middle" stroke="none" className={textClass}>Observation</text>
              
              <line x1="160" y1="180" x2="100" y2="120" strokeWidth={arrowStrokeWidth} markerEnd="url(#arrow-react)" />
              
              <rect x="40" y="80" width="80" height="40" rx="4" strokeWidth={boxStrokeWidth} />
              <text x="80" y="105" textAnchor="middle" stroke="none" className={textClass}>Input</text>
              
              <line x1="80" y1="80" x2="160" y2="40" strokeWidth={arrowStrokeWidth} markerEnd="url(#arrow-react)" />
            </g>
          </svg>
        );
      case "crispe":
        return (
          <svg viewBox="0 0 400 250" className="w-full h-auto">
            <g className="text-primary" stroke="currentColor" fill="none">
              {/* Central Node */}
              <circle cx="200" cy="125" r="45" strokeWidth={boxStrokeWidth} />
              <text x="200" y="130" textAnchor="middle" stroke="none" className="text-sm font-bold fill-foreground">PROMPT</text>
              
              {/* Satellites */}
              <g transform="translate(200, 125)">
                {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const x = Math.cos(rad) * 100;
                  const y = Math.sin(rad) * 80;
                  const labels = ["Capacity", "Role", "Insight", "Statement", "Personality", "Experiment"];
                  return (
                    <g key={i}>
                      <line x1="0" y1="0" x2={x*0.85} y2={y*0.85} className="text-muted-foreground" strokeWidth="1" />
                      <rect x={x-35} y={y-12} width="70" height="24" rx="4" strokeWidth="2" className="fill-background" />
                      <text x={x} y={y+4} textAnchor="middle" stroke="none" className="text-xs font-medium fill-foreground">{labels[i]}</text>
                    </g>
                  );
                })}
              </g>
            </g>
          </svg>
        );
      case "co-star":
         return (
          <svg viewBox="0 0 400 250" className="w-full h-auto">
            <g className="text-primary" stroke="currentColor" fill="none">
               {/* Star Shape approx */}
               <path d="M200,20 L230,90 L300,90 L245,140 L260,210 L200,170 L140,210 L155,140 L100,90 L170,90 Z" className="text-muted-foreground/10" strokeWidth="1" />
               
               <text x="200" y="130" textAnchor="middle" stroke="none" className="text-sm font-bold fill-foreground">RESPONSE</text>

               {/* Nodes */}
               <g className="text-xs">
                 <rect x="160" y="10" width="80" height="28" rx="4" strokeWidth={boxStrokeWidth} className="fill-background" />
                 <text x="200" y="28" textAnchor="middle" stroke="none" className={textClass}>Context</text>

                 <rect x="290" y="80" width="80" height="28" rx="4" strokeWidth={boxStrokeWidth} className="fill-background" />
                 <text x="330" y="98" textAnchor="middle" stroke="none" className={textClass}>Objective</text>

                 <rect x="250" y="200" width="80" height="28" rx="4" strokeWidth={boxStrokeWidth} className="fill-background" />
                 <text x="290" y="218" textAnchor="middle" stroke="none" className={textClass}>Style</text>

                 <rect x="70" y="200" width="80" height="28" rx="4" strokeWidth={boxStrokeWidth} className="fill-background" />
                 <text x="110" y="218" textAnchor="middle" stroke="none" className={textClass}>Tone</text>

                 <rect x="30" y="80" width="80" height="28" rx="4" strokeWidth={boxStrokeWidth} className="fill-background" />
                 <text x="70" y="98" textAnchor="middle" stroke="none" className={textClass}>Audience</text>
               </g>
            </g>
          </svg>
        );
      case "risen":
        return (
          <svg viewBox="0 0 400 250" className="w-full h-auto">
            <defs>
              <marker id="arrow-down" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L9,3 z" fill="currentColor" className="text-muted-foreground" />
              </marker>
            </defs>
            <g className="text-primary" stroke="currentColor" fill="none">
              {/* Funnel shape */}
              <path d="M100,20 L300,20 L240,180 L160,180 Z" className="text-muted-foreground/10" strokeWidth="1" />
              
              <rect x="120" y="30" width="160" height="30" rx="4" strokeWidth={boxStrokeWidth} className="fill-background" />
              <text x="200" y="50" textAnchor="middle" stroke="none" className={textClass}>Role & Instructions</text>
              
              <line x1="200" y1="60" x2="200" y2="80" strokeWidth={arrowStrokeWidth} markerEnd="url(#arrow-down)" />
              
              <rect x="140" y="80" width="120" height="30" rx="4" strokeWidth={boxStrokeWidth} className="fill-background" />
              <text x="200" y="100" textAnchor="middle" stroke="none" className={textClass}>Steps</text>
              
              <line x1="200" y1="110" x2="200" y2="130" strokeWidth={arrowStrokeWidth} markerEnd="url(#arrow-down)" />
              
              <rect x="160" y="130" width="80" height="30" rx="4" strokeWidth={boxStrokeWidth} className="fill-background" />
              <text x="200" y="150" textAnchor="middle" stroke="none" className={textClass}>Constraints</text>
              
              <line x1="200" y1="160" x2="200" y2="190" strokeWidth={arrowStrokeWidth} markerEnd="url(#arrow-down)" />
              
              <rect x="150" y="190" width="100" height="40" rx="4" strokeWidth={boxStrokeWidth} className="fill-primary text-primary-foreground" />
              <text x="200" y="215" textAnchor="middle" stroke="none" className="text-sm font-bold fill-primary-foreground">End Goal</text>
            </g>
          </svg>
        );
      case "rgcov":
        return (
           <svg viewBox="0 0 400 250" className="w-full h-auto">
            <g className="text-primary" stroke="currentColor" fill="none">
              <rect x="50" y="20" width="300" height="210" rx="8" className="text-muted-foreground/10" strokeWidth="1" />
              
              <g transform="translate(80, 50)">
                <rect x="0" y="0" width="24" height="24" rx="4" strokeWidth={boxStrokeWidth} />
                <path d="M6,12 L10,16 L18,8" strokeWidth="3" />
                <text x="40" y="18" stroke="none" className={textClass}>Role Defined</text>
              </g>
              
              <g transform="translate(80, 90)">
                <rect x="0" y="0" width="24" height="24" rx="4" strokeWidth={boxStrokeWidth} />
                <path d="M6,12 L10,16 L18,8" strokeWidth="3" />
                <text x="40" y="18" stroke="none" className={textClass}>Goal Clear</text>
              </g>
              
              <g transform="translate(80, 130)">
                <rect x="0" y="0" width="24" height="24" rx="4" strokeWidth={boxStrokeWidth} />
                <path d="M6,12 L10,16 L18,8" strokeWidth="3" />
                <text x="40" y="18" stroke="none" className={textClass}>Context Provided</text>
              </g>
              
              <g transform="translate(80, 170)">
                <rect x="0" y="0" width="24" height="24" rx="4" strokeWidth={boxStrokeWidth} className="text-primary" />
                <text x="40" y="18" stroke="none" className="text-sm font-bold fill-primary">Verification Step</text>
              </g>
            </g>
          </svg>
        );
      case "tree-of-thoughts":
        return (
          <svg viewBox="0 0 400 250" className="w-full h-auto">
            <g className="text-primary" stroke="currentColor" fill="none">
              <rect x="160" y="10" width="80" height="30" rx="4" strokeWidth={boxStrokeWidth} />
              <text x="200" y="30" textAnchor="middle" stroke="none" className={textClass}>Problem</text>
              
              <path d="M200,40 L100,80" className="text-muted-foreground" strokeWidth={arrowStrokeWidth} />
              <path d="M200,40 L200,80" className="text-muted-foreground" strokeWidth={arrowStrokeWidth} />
              <path d="M200,40 L300,80" className="text-muted-foreground" strokeWidth={arrowStrokeWidth} />
              
              <rect x="60" y="80" width="80" height="30" rx="4" strokeWidth={boxStrokeWidth} />
              <text x="100" y="100" textAnchor="middle" stroke="none" className={textClass}>Idea A</text>
              
              <rect x="160" y="80" width="80" height="30" rx="4" strokeWidth={boxStrokeWidth} />
              <text x="200" y="100" textAnchor="middle" stroke="none" className={textClass}>Idea B</text>
              
              <rect x="260" y="80" width="80" height="30" rx="4" strokeWidth={boxStrokeWidth} />
              <text x="300" y="100" textAnchor="middle" stroke="none" className={textClass}>Idea C</text>
              
              <path d="M100,110 L150,150" className="text-muted-foreground" strokeWidth={arrowStrokeWidth} />
              <path d="M200,110 L200,150" className="text-muted-foreground" strokeWidth={arrowStrokeWidth} />
              <path d="M300,110 L250,150" className="text-muted-foreground" strokeWidth={arrowStrokeWidth} />
              
              <rect x="120" y="150" width="160" height="30" rx="4" strokeWidth={boxStrokeWidth} strokeDasharray="4 4" />
              <text x="200" y="170" textAnchor="middle" stroke="none" className={textClass}>Evaluation</text>
              
              <path d="M200,180 L200,210" strokeWidth={arrowStrokeWidth} />
              
              <rect x="160" y="210" width="80" height="30" rx="4" strokeWidth={boxStrokeWidth} className="fill-primary text-primary-foreground" />
              <text x="200" y="230" textAnchor="middle" stroke="none" className="text-sm font-bold fill-primary-foreground">Solution</text>
            </g>
          </svg>
        );
      case "self-refine":
        return (
          <svg viewBox="0 0 400 200" className="w-full h-auto">
             <defs>
              <marker id="arrow-cycle" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L9,3 z" fill="currentColor" className="text-muted-foreground" />
              </marker>
            </defs>
            <g className="text-primary" stroke="currentColor" fill="none">
              <rect x="40" y="80" width="80" height="40" rx="4" strokeWidth={boxStrokeWidth} />
              <text x="80" y="105" textAnchor="middle" stroke="none" className={textClass}>Draft</text>
              
              <path d="M120,100 L160,100" strokeWidth={arrowStrokeWidth} markerEnd="url(#arrow-cycle)" />
              
              <rect x="160" y="80" width="80" height="40" rx="4" strokeWidth={boxStrokeWidth} />
              <text x="200" y="105" textAnchor="middle" stroke="none" className={textClass}>Critique</text>
              
              <path d="M200,80 Q200,40 100,80" strokeWidth={arrowStrokeWidth} markerEnd="url(#arrow-cycle)" strokeDasharray="4 4" />
              
              {/* Added background rect for text readability */}
              <rect x="125" y="38" width="50" height="20" rx="4" className="fill-background" stroke="none" />
              <text x="150" y="52" textAnchor="middle" stroke="none" className="text-xs font-bold fill-primary">Iterate</text>
              
              <path d="M240,100 L280,100" strokeWidth={arrowStrokeWidth} markerEnd="url(#arrow-cycle)" />
              
              <rect x="280" y="80" width="80" height="40" rx="4" strokeWidth={boxStrokeWidth} className="fill-primary text-primary-foreground" />
              <text x="320" y="105" textAnchor="middle" stroke="none" className="text-sm font-bold fill-primary-foreground">Final</text>
            </g>
          </svg>
        );
      case "markdown-prompting":
        return (
          <svg viewBox="0 0 400 250" className="w-full h-auto">
            <g className="text-primary" stroke="currentColor" fill="none">
              {/* Document Outline */}
              <rect x="60" y="10" width="280" height="230" rx="4" strokeWidth="2" className="text-muted-foreground/20" />
              
              {/* Headers and Content Blocks */}
              <g transform="translate(80, 30)">
                <text x="0" y="0" stroke="none" className="text-xs font-bold fill-primary"># Role</text>
                <line x1="0" y1="5" x2="240" y2="5" strokeWidth="1" className="text-muted-foreground/30" />
                <rect x="0" y="10" width="240" height="20" rx="2" strokeWidth="0" className="fill-muted/20" />
              </g>

              <g transform="translate(80, 70)">
                <text x="0" y="0" stroke="none" className="text-xs font-bold fill-primary"># Context</text>
                <line x1="0" y1="5" x2="240" y2="5" strokeWidth="1" className="text-muted-foreground/30" />
                <rect x="0" y="10" width="240" height="20" rx="2" strokeWidth="0" className="fill-muted/20" />
              </g>

              <g transform="translate(80, 110)">
                <text x="0" y="0" stroke="none" className="text-xs font-bold fill-primary"># Task</text>
                <line x1="0" y1="5" x2="240" y2="5" strokeWidth="1" className="text-muted-foreground/30" />
                <rect x="0" y="10" width="240" height="20" rx="2" strokeWidth="0" className="fill-muted/20" />
              </g>

              <g transform="translate(80, 150)">
                <text x="0" y="0" stroke="none" className="text-xs font-bold fill-primary"># Constraints</text>
                <line x1="0" y1="5" x2="240" y2="5" strokeWidth="1" className="text-muted-foreground/30" />
                <rect x="0" y="10" width="240" height="20" rx="2" strokeWidth="0" className="fill-muted/20" />
              </g>

              <g transform="translate(80, 190)">
                <text x="0" y="0" stroke="none" className="text-xs font-bold fill-primary"># Output</text>
                <line x1="0" y1="5" x2="240" y2="5" strokeWidth="1" className="text-muted-foreground/30" />
                <rect x="0" y="10" width="240" height="20" rx="2" strokeWidth="0" className="fill-muted/20" />
              </g>
            </g>
          </svg>
        );
      default:
        return (
          <div className="flex items-center justify-center h-48 bg-muted/20 rounded-lg border border-dashed">
            <p className="text-muted-foreground text-sm">Visual diagram not available for this framework.</p>
          </div>
        );
    }
  };

  return (
    <div className="w-full bg-card rounded-xl border p-6 flex items-center justify-center">
      {renderDiagram()}
    </div>
  );
}
