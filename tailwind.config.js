module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "light-grayish-cyan": "#eafaf9",
      "light-grayish-blue": "#ecf2f9",
      "very-dark-blue": "#2A2D43",
      "very-dark-blue-transparent": "rgba(42, 45, 67, 0.54)",
      "soft-red": "#e67071",
    },
    fontFamily: {
      serif: ["ui-serif", "Bellefair"],
    },
    extend: {
      height: {
        bio: "calc(100vh - 116px)",
      },
    },
  },
  plugins: [],
};
