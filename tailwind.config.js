/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  // daisyui:{
  //   themes: [
  //     {
  //       travelToursTheme:{
  //         primary: '#5eead4',
  //         secondary: '#93c5fd',
  //         accent: '#fb7185',
         
  //         "bace-100": '#64748b' 
  //       }
  //     }
  //   ]
  // },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
