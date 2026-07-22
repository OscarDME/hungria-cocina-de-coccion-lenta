/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      // Paleta premium/editorial de cocina de cocción lenta.
      // Guiño a la marca original (menta + rosa) pero elevada: crema cálida,
      // tinta verde-hierba, CTA terracota apetitoso, salvia, oro para estrellas.
      colors: {
        slow: {
          cream: '#FBF7EF',
          'cream-deep': '#F1E7D5',
          paper: '#FFFFFF',
          ink: '#26332B',
          'ink-soft': '#3B473E',
          charcoal: '#2C2620',
          moss: '#6E7A63',
          'moss-soft': '#8B9580',
          sage: '#E6EFE7',
          'sage-deep': '#D2E3D4',
          forest: '#2F6B47',
          'forest-dark': '#1F4E33',
          'forest-light': '#4E8C63',
          terracotta: '#D2542B',
          'terracotta-dark': '#AF3F1B',
          paprika: '#E2683A',
          rose: '#C56B6B',
          'rose-soft': '#F4E0DC',
          gold: '#E5A72E',
          cocoa: '#5A4632',
        },
      },
      boxShadow: {
        cta: '0 14px 40px -10px rgba(210, 84, 43, 0.55)',
        'cta-hover': '0 20px 52px -10px rgba(210, 84, 43, 0.72)',
        card: '0 10px 34px -14px rgba(42, 38, 32, 0.22), 0 1px 0 0 rgba(255,255,255,0.7) inset',
        soft: '0 2px 18px rgba(42, 38, 32, 0.08)',
        frame: '0 30px 60px -22px rgba(31, 78, 51, 0.42)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        shimmer: 'shimmer 3s linear infinite',
        sweep: 'sweep 2.6s ease infinite',
        blink: 'blink 1.1s step-start infinite',
        'fade-down': 'fadeDown 0.7s ease both',
        'fade-up': 'fadeUp 0.9s ease both',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '300% 50%' },
        },
        sweep: {
          '0%': { transform: 'translateX(-120%)' },
          '55%': { transform: 'translateX(120%)' },
          '100%': { transform: 'translateX(120%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.25' },
        },
        fadeDown: {
          from: { opacity: '0', transform: 'translateY(-18px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(26px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
};
