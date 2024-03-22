import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_moduls/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest1: '.25em',
    },
   
    extend: {
      
      colors: {
          'primary':'#223055',
          'secondary':'#ffb7ca',
          'third' : '#abb8c3',
          'fourth' : '#bfab86'
        },
      fontFamily: {
       "sans" : [ 'sans-serif','Apple Color Emoji','Noto Color Emoji','system-ui','ui-sans-serif',  'Segoe UI Emoji', 'Segoe UI Symbol' ],
       "serif" :['ui-serif','serif', 'Times','Times New Roman','Cambria','Georgia'  ],
       "mono": ['Liberation Mono','Consolas','Monaco', 'Menlo', 'SFMono-Regular','ui-monospace','Courier New',  'monospace']

      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily : {
      figtree : ["var(--font-figtree)"],
    }
  },
  plugins: [require("daisyui"),
  require("flowbite/plugin")]
  
};

export default config;
