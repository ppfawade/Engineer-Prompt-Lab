# EngineerPromptLab

A curated reference of the **Top Prompt Frameworks Engineers Should Use in 2026**.

## Project Overview

EngineerPromptLab is a web application designed to help mechanical engineers, product designers, and hardware founders leverage AI tools more effectively. It provides structured prompt frameworks, an interactive prompt builder, and a library of copy-paste ready engineering prompts.

## Features

- **Framework Library**: Detailed guides on top 10 prompt frameworks (CRISPE, ReAct, Chain of Thought, etc.).
- **Interactive Prompt Builder**: Generate structured prompts for specific engineering tasks.
- **Prompt Library**: Curated collection of prompts for FMEA, design reviews, manufacturing planning, and more.
- **Blog**: Educational content on AI in engineering.
- **Dark Mode**: Fully supported dark/light theme.

## Tech Stack

- **Framework**: React 19 + Vite (Simulating Next.js App Router structure)
- **Language**: TypeScript
- **Styling**: TailwindCSS v4
- **UI Components**: Custom components inspired by shadcn/ui
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Animation**: Framer Motion

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/engineer-prompt-lab.git
   cd engineer-prompt-lab
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Local Development

The application uses a standard Vite + React setup.

- `src/pages`: Contains the route components.
- `src/components`: Reusable UI components.
- `src/data`: JSON datasets for frameworks and prompts.

## Deployment

This project is ready for deployment on Vercel.

1. Push your code to GitHub.
2. Import the project in Vercel.
3. Vercel will automatically detect the Vite settings and deploy.

No special configuration is needed.

## License

MIT
