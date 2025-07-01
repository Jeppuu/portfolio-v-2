import { useTheme } from "next-themes";
import { useEffect } from "react";

// Currently unused: Add latte favalour to tailwind.config if want to use again

export default function ThemeBtn() {
  const { setTheme, resolvedTheme } = useTheme();

  // Sync Catppuccin flavor class with theme
  useEffect(() => {
    if (typeof window === "undefined") return;
    const body = document.body;
    // Remove both classes first for safety
    body.classList.remove("latte", "macchiato");
    if (resolvedTheme === "dark") {
      body.classList.add("macchiato");
    } else {
      body.classList.add("latte");
    }
  }, [resolvedTheme]);

  // Toggle theme
  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      className="h-12 w-12 rounded-full p-2 hover:bg-mauve/10 hover:shadow transition ease-in-out duration-300 mx-2 my-2 md:my-0"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      type="button"
    >
      {/* Moon icon for light mode, sun icon for dark mode */}
      <svg
        className="fill-cyan-700 block dark:hidden"
        fill="currentColor"
        viewBox="0 0 20 20"
        width={24}
        height={24}
        aria-hidden="true"
      >
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
      </svg>
      <svg
        className="fill-yellow-500 hidden dark:block"
        fill="currentColor"
        viewBox="0 0 20 20"
        width={24}
        height={24}
        aria-hidden="true"
      >
        <path
          d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
          fillRule="evenodd"
          clipRule="evenodd"
        ></path>
      </svg>
    </button>
  );
}
