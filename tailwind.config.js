module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'myfont' : ["Concert One", 'sans-serif'],
      },
      colors: {
        mycolor: "#7b8afa",
        myblue: "#050A30",
        "home-blue": "#CAE8FF",
        "home-flex-blue": "#5CB6F9",
      },
      rotate: {
        160: "160deg",
      },
      inset: {
        "5rem": "-5rem",
      },
      boxShadow: {
        'my': "2px 2px 2px 2px rgba(0,0,0,0.8)",
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['hover'],
    },
  },
  plugins: [],
};
