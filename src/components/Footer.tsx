export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-100 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-zinc-600 dark:text-zinc-400 text-sm text-center">
          © {currentYear} Kundan Thota. AI Researcher & Consultant.
        </p>
      </div>
    </footer>
  );
}
