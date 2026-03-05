export default function Privacy() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="prose prose-slate dark:prose-invert prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-ul:text-foreground prose-li:text-foreground prose-a:text-primary">
        <p>Last updated: March 4, 2026</p>
        <p>
          This is a placeholder Privacy Policy for EngineerPromptLab. As this is a demonstration application, no real personal data is collected or stored.
        </p>
        <h3>Data Collection</h3>
        <p>
          We do not collect any personal information. Any prompts you generate are processed locally in your browser or via stateless API calls.
        </p>
        <h3>Cookies</h3>
        <p>
          We use local storage to save your theme preference (light/dark mode). No tracking cookies are used.
        </p>
      </div>
    </div>
  );
}
