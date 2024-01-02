/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "verylightblue": "#F2F8FE",
        "darkblue": "#1C4980",
        "pureblue": "#0073E6",
        "bglight": " #E5F1FC",
        "admin": "#D63500",
        "bgorange": "#FBEBEA",
        "greyblue": "#3E6493",
        "whiteblue": "#F6F8FA",
        "bordergrey": "#DADCE0",
        "blurdate": "#8DA4BF",
        "logocolor": "#6548EE",
      },
      boxShadow: {
        "btnshadow": "0px -4px 50px 0px rgba(0, 0, 0, 0.09)",
      }
    },
  },
  plugins: [],
}
