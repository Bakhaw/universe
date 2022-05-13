module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "light-grayish-cyan": "#eafaf9",
      "light-grayish-blue": "#ecf2f9",
      "very-dark-blue": "#2A2D43",
      "very-dark-blue-transparent": "rgba(42, 45, 67, 0.24)",
      "soft-red": "#e67071",
      "white-transparent": "rgba(255, 255, 255, 0.25)",
    },
    fontFamily: {
      serif: ["ui-serif", "Bellefair"],
    },
    extend: {
      gridTemplateColumns: {
        work: "1fr 3fr 1fr",
      },
      height: {
        "bio-mobile": "calc(100vh - 76px)", // 76px = (MOBILE) Navbar height + Navbar padding-top
      },
      minHeight: {
        bio: "calc(100vh - 116px)", // 116px = (> MOBILE) Navbar height + Navbar padding-top
        "bio-mobile": "calc(100vh - 76px)", // 76px = (MOBILE) Navbar height + Navbar padding-top
      },
    },
  },
  plugins: [],
};
