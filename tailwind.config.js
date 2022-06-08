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
        neoShadow: {
          darkL: "#1C2230",
          darkR: "#121620",
          lightL: "#EEf4FF",
          lightR: "#C2C8D2",
        },
        neoButton: {
          darkL: "#181D2B",
          darkR: "#141925",
          lightL: "#DBE2EC",
          lightR: "#D5DBE6",
        }
      },
      boxShadow: ({ theme }) => ({ // 65 20 6 0.2 12
        default: [
          "4px 4px 12px transparent",
          "-4px -4px 12px transparent",
        ],
        normalDark: [
          `4px 4px 12px ${theme("colors.neoShadow.darkR")}`,
          `-4px -4px 12px ${theme("colors.neoShadow.darkL")}`,
        ],
        normalLight: [
          `4px 4px 12px ${theme("colors.neoShadow.lightR")}`,
          `-4px -4px 12px ${theme("colors.neoShadow.lightL")}`,
        ],
        highlight: [
          `0px 0px 6px ${theme("colors.frost.400")}`,
          `-0px -0px 6px ${theme("colors.frost.400")}`,
          `inset 0px 0px 2px ${theme("colors.frost.400")}`,
          `inset -0px -0px 2px ${theme("colors.frost.400")}`,
        ]
      }),
      transitionProperty: {
        "width": "width",
      },
      transitionTimingFunction: {
        "cubic": "cubic-bezier(.1,.3,.1,1)",
      }
    },
  },
  plugins: [],
}
