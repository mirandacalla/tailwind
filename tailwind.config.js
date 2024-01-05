/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    container:{
      center: true,
      padding:'16px',
    },
    extend: {
      animation: {
        'slide': 'slide 10s infinite linear',
      },
      keyframes: {
        'slide': {
          from: { transform: 'translateX(0%)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
    
      colors: {
        primary : '#FFBB5C',
        second : '#33186B',
        hover : "#FF9B50",
        title : '#33186B',
        subtitle : '#E5CFF7',
        dark : '#',
        light : '#713ABE',
        button : '#E0AED0',
        second_bg : '#E5CFF7',
        css: '#1572B6',
        html: '#E34F26',
        bootstrap: "#7952B3",
        tailwind:"#06B6D4",
        js: "#F7DF1E",

      }
    },
    
  }, 
  plugins: [
    require('tailwindcss-animated'),
    ('@tailwindcss/aspect-ratio'),
  ],
}


 