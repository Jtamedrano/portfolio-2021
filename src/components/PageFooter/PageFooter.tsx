"use client";

const PageFooter = () => {
  const handleThemeToggle = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <footer className="py-4 text-center text-sm bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 flex flex-col items-center gap-2 transition-all duration-500">
      <button
        className="p-2 bg-slate-300 dark:bg-slate-700 text-slate-900 dark:text-slate-50 transition-colors duration-500 rounded-md"
        onClick={handleThemeToggle}
      >
        Toggle Theme
      </button>
      &copy; 2025 Jesse Medrano
    </footer>
  );
};

export default PageFooter;
