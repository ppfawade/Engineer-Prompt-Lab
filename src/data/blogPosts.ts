export const blogPosts = [
  {
    id: 1,
    title: "Best AI Tools for Mechanical Engineers in 2026",
    excerpt: "A comprehensive comparison of Gemini, Claude, and specialized engineering AI tools for CAD and simulation.",
    date: "March 4, 2026",
    author: "EngineerPromptLab",
    category: "Tools",
    readTime: "8 min read",
    content: `
      <p class="mb-4 text-lg leading-relaxed">Artificial Intelligence has revolutionized mechanical engineering. In 2026, the landscape of tools available to engineers is vast and powerful. This article explores the top AI tools that every mechanical engineer should have in their toolkit, categorized by their primary function.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">1. Gemini for Engineering Analysis</h2>
      <p class="mb-4">Google's Gemini models have shown exceptional performance in reasoning tasks. For engineers, this means better support for complex calculations, failure analysis, and material selection.</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Best for:</strong> Logical reasoning, code generation (Python/MATLAB), and analyzing technical datasheets.</li>
        <li><strong>Key Feature:</strong> Multimodal capabilities allow you to upload a schematic or a graph and ask for an analysis.</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">2. Generative Design in CAD</h2>
      <p class="mb-4">Tools like Autodesk Fusion and PTC Creo have integrated AI-driven generative design. This allows engineers to input constraints and loads, and the AI generates optimal geometries that minimize weight while maintaining structural integrity.</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Workflow:</strong> Define "Keep-in" and "Keep-out" zones -> Apply Loads -> Set Safety Factor -> Generate.</li>
        <li><strong>Outcome:</strong> Organic, bone-like structures that are often 40% lighter than human-designed counterparts.</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">3. AI for Simulation (CAE)</h2>
      <p class="mb-4">Simulation tools are becoming faster with AI surrogates. Instead of running a full FEA which might take hours, AI models can predict stress distributions in seconds with high accuracy.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">References & Further Reading</h2>
      <ul class="list-disc pl-6 mb-4 space-y-2 text-primary">
        <li><a href="#" class="hover:underline">Google DeepMind - Gemini Technical Report</a></li>
        <li><a href="#" class="hover:underline">Autodesk Generative Design Guide</a></li>
        <li><a href="#" class="hover:underline">Ansys AI-Powered Simulation</a></li>
      </ul>
    `
  },
  {
    id: 2,
    title: "How Engineers Should Write Prompts: The CRISPE Method",
    excerpt: "Why context and persona are critical when asking AI to perform complex engineering calculations.",
    date: "March 4, 2026",
    author: "EngineerPromptLab",
    category: "Tutorial",
    readTime: "5 min read",
    content: `
      <p class="mb-4 text-lg leading-relaxed">Prompt engineering is a critical skill for modern engineers. The CRISPE framework offers a structured approach to getting the best results from Large Language Models. By explicitly defining the persona and context, you reduce the risk of "hallucinations" and ensure the output adheres to engineering standards.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">C - Capacity</h2>
      <p class="mb-4">Define the role the AI should play. "Act as a Senior Mechanical Engineer" sets the stage for technical accuracy. This primes the model to access its training data related to engineering principles rather than general knowledge.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">R - Role</h2>
      <p class="mb-4">Specify the persona details. Is the AI a mentor, a strict reviewer, or a creative brainstormer? For example, "You are a strict DFM (Design for Manufacturing) reviewer."</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">I - Insight</h2>
      <p class="mb-4">Provide context. Background information is crucial. "We are designing a consumer electronic device for outdoor use (IP67)."</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">S - Statement</h2>
      <p class="mb-4">State the task clearly. "List 5 potential failure modes for the battery compartment seal."</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">P - Personality</h2>
      <p class="mb-4">Set the tone. "Professional", "Concise", or "Academic". For engineering reports, "Data-driven and objective" is often best.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">E - Experiment</h2>
      <p class="mb-4">Ask for multiple variations or specific formats. "Output the result as a Markdown table with columns for Failure Mode, Severity, and Mitigation."</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Example Prompt</h2>
      <div class="bg-muted p-4 rounded-md font-mono text-sm mb-4">
        Capacity: Senior Manufacturing Engineer<br/>
        Insight: We are seeing warp in our injection molded ABS parts.<br/>
        Statement: Diagnose the root cause.<br/>
        Personality: Analytical and direct.<br/>
        Experiment: Provide top 3 probable causes and a suggested machine setting adjustment for each.
      </div>

      <h2 class="text-2xl font-bold mt-8 mb-4">References</h2>
      <ul class="list-disc pl-6 mb-4 space-y-2 text-primary">
        <li><a href="#" class="hover:underline">Prompt Engineering Guide - CRISPE Framework</a></li>
        <li><a href="#" class="hover:underline">OpenAI Best Practices for Prompting</a></li>
      </ul>
    `
  },
  {
    id: 3,
    title: "Generative Design vs. AI Prompting",
    excerpt: "Understanding the difference between topology optimization algorithms and LLM-based design suggestions.",
    date: "March 4, 2026",
    author: "EngineerPromptLab",
    category: "Design",
    readTime: "6 min read",
    content: `
      <p class="mb-4 text-lg leading-relaxed">There is often confusion between Generative Design (topology optimization) and AI Prompting (LLMs). Both use "AI", but for very different purposes. Understanding the distinction is key to choosing the right tool for the job.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Generative Design (Topology Optimization)</h2>
      <p class="mb-4">This is a geometry-based process. It uses physics solvers (FEA) and iterative algorithms to remove material from a block where it is not needed to support the load. It results in organic, bone-like structures.</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Input:</strong> 3D Design Space, Loads, Constraints, Material Properties.</li>
        <li><strong>Output:</strong> A 3D Mesh or CAD body.</li>
        <li><strong>Use Case:</strong> Lightweighting aerospace brackets, optimizing heat exchangers.</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">AI Prompting (LLMs)</h2>
      <p class="mb-4">This is a language-based process. You ask an LLM to "Suggest a mechanism for a latch". It gives you ideas, concepts, and descriptions, but not a 3D model (yet).</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Input:</strong> Text description of the problem.</li>
        <li><strong>Output:</strong> Text, code, or simple 2D images.</li>
        <li><strong>Use Case:</strong> Brainstorming concepts, writing specifications, explaining physics principles.</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Combining Both</h2>
      <p class="mb-4">The most powerful workflow is using LLMs to brainstorm concepts and define constraints, and then feeding those constraints into a Generative Design tool.</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">Further Reading</h2>
      <ul class="list-disc pl-6 mb-4 space-y-2 text-primary">
        <li><a href="#" class="hover:underline">Topology Optimization vs Generative Design</a></li>
        <li><a href="#" class="hover:underline">The Future of AI in Mechanical Design</a></li>
      </ul>
    `
  },
  {
    id: 4,
    title: "Automating FMEA with Chain of Thought Prompting",
    excerpt: "A step-by-step guide to reducing the time spent on Failure Mode and Effects Analysis using structured prompts.",
    date: "March 4, 2026",
    author: "EngineerPromptLab",
    category: "Workflow",
    readTime: "10 min read",
    content: `
      <p class="mb-4 text-lg leading-relaxed">FMEA (Failure Mode and Effects Analysis) is essential for safety and reliability, but it is often a tedious, manual process. AI can automate the brainstorming of failure modes, ensuring you don't miss obscure edge cases.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">The Chain of Thought Approach</h2>
      <p class="mb-4">Instead of asking "List failure modes", ask the AI to think through the system's operation step-by-step. This "Chain of Thought" (CoT) prompting significantly improves the quality of the output.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Step 1: Functional Decomposition</h2>
      <p class="mb-4">Ask the AI to list every function of the component. "What are the primary and secondary functions of a bicycle brake caliper?"</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Step 2: Failure Modes per Function</h2>
      <p class="mb-4">For each function, ask "How can this function fail?" Consider: No function, Partial function, Intermittent function, and Unintended function.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Step 3: Effects and Causes</h2>
      <p class="mb-4">For each failure mode, ask for the downstream effect (Severity) and the potential root cause (Occurrence).</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">The Mega-Prompt</h2>
      <div class="bg-muted p-4 rounded-md font-mono text-sm mb-4">
        Act as a Reliability Engineer.<br/>
        We are analyzing a [Component Name].<br/>
        Step 1: List all functions.<br/>
        Step 2: For each function, identify 3 potential failure modes.<br/>
        Step 3: For each failure mode, list the immediate effect on the user and one potential design cause.<br/>
        Output as a table.
      </div>

      <h2 class="text-2xl font-bold mt-8 mb-4">References</h2>
      <ul class="list-disc pl-6 mb-4 space-y-2 text-primary">
        <li><a href="#" class="hover:underline">AIAG & VDA FMEA Handbook</a></li>
        <li><a href="#" class="hover:underline">Chain-of-Thought Prompting Elicits Reasoning in Large Language Models (Wei et al.)</a></li>
      </ul>
    `
  }
];
