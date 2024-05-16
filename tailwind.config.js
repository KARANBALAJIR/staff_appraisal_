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
        primary: { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a", "950": "#172554" },
        secondary:'#EEEEEE',
        ghostWhite : '#F3F4F7',
        impButton : {"default":"#1d58d8", "hover":"#3b76f6"},
      },
      fontFamily:{
        'body':['Poppins', 'sans-serif']
      },
    }
  }, 
  darkMode: "class",
  plugins: [nextui()],
}