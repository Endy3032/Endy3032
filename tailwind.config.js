// module.exports = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
  //     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  jit: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        polar: {
          0: "#0E1420",
          25: "#171C28",
          50: "#1E2430",
          75: "#272C38",
          100: "#2E3440",
          200: "#3B4252",
          300: "#434C5E",
          400: "#4C566A"
        },
        snow: {
          100: "#D8DEE9",
          200: "#E5E9F0",
          300: "#ECEFF4"
        },
        frost: {
          100: "#8FBCBB",
          200: "#88C0D0",
          300: "#81A1C1",
          400: "#5E81AC",
        },
        red: "#BF616A",
        orange: "#D08770",
        yellow: "#EBCB8B",
        green: "#A3BE8C",
        purple: "#B48EAD",
      },
      fontFamily: {
        "ubuntu": "\"Ubuntu Mono\""
      },
      transitionProperty: {
        "width": "width",
      },
      transitionTimingFunction: {
        "myEase": "cubic-bezier(.1,.3,.1,1)",
      }
    },
  },
  plugins: [],
}
