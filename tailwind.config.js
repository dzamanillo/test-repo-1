// tailwind.config.js
module.exports = {
  purge: {
    
    content: ['./src/**/*.pug', './src/**/*.html', './src/**/*.js'],
    options: {
      safelist: ['py-12', 'py-16', 'pt-12', 'pb-16', 'pb-24', 'pb-28', 'pb-32', 'uppercase']
      
    }
  },
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1440px',
      xxxl: '1600px',
    },
    fontFamily: {
      sans: ['proxima-nova', 'sans-serif'],
      serif: ['Georgia', 'serif'],

    },
    extend: {
      colors: {
        transparent: 'transparent',
      },
      width: {
        initial: 'initial',
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms'),
    require('tailwindcss-elevation')(['responsive']),
    require('tailwindcss-flexbox-order')(),
  ],
};
