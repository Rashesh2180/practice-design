/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#83CD20",
        "secondary":"#034833",
        "custom-gray":"#727272",
        "banner-bg":"#F1F5EB",
        "border-color":"#E3DBD8"
      },
      borderRadius:{
        "rounded-20":"20px"
      },
      lineHeight:{
        "lead-30":"30px"
      }
    
    },
  },
  plugins: [],
}