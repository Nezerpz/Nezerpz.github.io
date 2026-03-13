import { useEffect, useState } from 'react';

import Nav from '@/components/molecules/Nav';
import { Languages, useTranslation } from '@/i18n';

const GITHUB_USERNAME = 'Nezerpz';

export default function Header() {
  const { lang, setLanguage } = useTranslation();
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const preferDark = stored ? stored === 'dark' : true;
    const html = document.documentElement;
    if (preferDark) html.classList.add('dark');
    else html.classList.remove('dark');
  }, []);

  useEffect(() => {
    // Prefer a local uploaded avatar if present. Place a file at `public/profile/avatar.png` to override.
    const local = '/profile/avatar.png';
    setAvatarUrl(local);
  }, []);

  const githubAvatar = `https://github.com/${GITHUB_USERNAME}.png`;

  return (
    <header className="flex items-center justify-between px-4 py-3 border-b border-slate-800">
      <div className="flex items-center gap-3">
        {avatarUrl ? (
          <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noreferrer" aria-label="Open GitHub profile">
            <img
              src={avatarUrl}
              alt={`${GITHUB_USERNAME} GitHub avatar`}
              className="w-9 h-9 rounded-full"
              onError={(e) => {
                const img = e.currentTarget as HTMLImageElement;
                // avoid infinite loop if fallback fails
                img.onerror = null;
                img.src = githubAvatar;
              }}
            />
          </a>
        ) : (
          <div className="w-9 h-9 rounded-full bg-slate-700" />
        )}
        <div className="text-xl font-semibold">
          <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noreferrer" className="hover:underline">
            {GITHUB_USERNAME}
          </a>
        </div>
      </div>

      <Nav />

      <div className="flex items-center gap-2">
        <button
          className={`px-2 py-1 rounded focus:outline-none focus:ring ${lang === Languages.EN ? 'bg-slate-700 text-white' : 'bg-transparent text-slate-200 hover:bg-slate-700 hover:text-white'}`}
          onClick={() => setLanguage(Languages.EN)}
          aria-pressed={lang === Languages.EN}
        >
          EN
        </button>
        <button
          className={`px-2 py-1 rounded focus:outline-none focus:ring ${lang === Languages.NO ? 'bg-slate-700 text-white' : 'bg-transparent text-slate-200 hover:bg-slate-700 hover:text-white'}`}
          onClick={() => setLanguage(Languages.NO)}
          aria-pressed={lang === Languages.NO}
        >
          NO
        </button>
      </div>
    </header>
  );
}
