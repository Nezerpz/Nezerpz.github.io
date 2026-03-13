const GITHUB_URL = 'https://github.com/Nezerpz';
const LINKEDIN_URL = 'https://www.linkedin.com/in/henrik-aamot-25449322a';

export default function Footer() {

  return (
    <footer className="flex items-center justify-center px-4 py-3 border-t border-slate-800">

      <div className="flex items-center gap-3">
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open LinkedIn profile"
          title="LinkedIn"
          className="text-slate-300 hover:text-sky-400"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
            <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4v12h-4V8zM8.5 8h3.8v1.7h.1c.5-.9 1.8-1.9 3.7-1.9 4 0 4.8 2.6 4.8 6v6.2h-4V15.2c0-1.6 0-3.7-2.3-3.7-2.3 0-2.6 1.7-2.6 3.6V20h-4V8z" />
          </svg>
        </a>

        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open GitHub profile"
          title="GitHub"
          className="text-slate-300 hover:text-sky-400"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.263.82-.583 0-.288-.01-1.05-.016-2.06-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.24 1.84 1.24 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.762-1.605-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.526.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.653 1.65.242 2.873.118 3.176.77.84 1.232 1.91 1.232 3.22 0 4.61-2.807 5.62-5.48 5.92.43.37.823 1.096.823 2.21 0 1.596-.015 2.88-.015 3.273 0 .322.218.699.825.58C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
