import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          500: '#75C242',  // warna hijau yang akan digunakan pada button
        },
        bone: '#EDF1FD', // warna putih tulang untuk background
        gray: {
          600: '#585858', // abu-abu untuk tipografi utama
          400: '#A9A9A9', // abu-abu muda untuk teks sekunder
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      
      },
    },
  },
  plugins: [],
} satisfies Config;
