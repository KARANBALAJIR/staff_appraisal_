import { nextui } from "@nextui-org/react";


module.exports = { 
  content: [ 
    "./app/**/*.{js,ts,jsx,tsx}", 
    "./pages/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}", 
    "./src/**/*.{js,ts,jsx,tsx}", 
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",   
  ], 
  theme: { 
    extend:{
      colors:{
        secondary:'#EEEEEE',
        ghostWhite : '#F3F4F7',
        primary : {"default":"#1d58d8", "hover":"#3b76f6"},
      },
      fontFamily:{
        'body':['Poppins', 'sans-serif']
      },
    }
  }, 
  darkMode: "class",
  plugins: [nextui()],
}