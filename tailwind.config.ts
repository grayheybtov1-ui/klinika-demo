import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F0F5FA',
          100: '#E1ECF5',
          200: '#C2D9EB',
          300: '#94BEDD',
          400: '#5F9ECB',
          500: '#387FB5',
          600: '#266596',
          700: '#1F517A',
          800: '#1B4466',
          900: '#0F2742',
          950: '#0A1A2F',
        },
        navy: {
          800: '#0F233D',
          900: '#0B1B30',
          950: '#071221',
        },
        clinical: {
          bg: '#F8FAFC',
          surface: '#FFFFFF',
          border: '#E2E8F0',
          muted: '#64748B',
          accent: '#0284C7',
          highlight: '#E0F2FE',
        }
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        // STRICT ENFORCEMENT: All border radius explicitly 0
        none: '0px',
        sm: '0px',
        DEFAULT: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px',
        '3xl': '0px',
        full: '0px',
      }
    },
  },
  plugins: [],
};
export default config;
