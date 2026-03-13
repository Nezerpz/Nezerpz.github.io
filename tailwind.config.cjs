module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx,html}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // small palette extensions if needed
      }
    }
  },
  safelist: [
    'bg-slate-900',
    'bg-slate-700',
    'bg-slate-600',
    'text-slate-100',
    'text-slate-300',
    'text-sky-400',
    'hover:text-sky-300',
    'border-slate-800',
    'hover:bg-slate-600'
  ],
  plugins: []
}
