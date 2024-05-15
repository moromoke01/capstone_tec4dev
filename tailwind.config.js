// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPurple: '#9C13BE',
        customDarkPurple: '#7d0d8d', // Add customDarkPurple color
      },
    },
  },
  variants: {},
  plugins: [],
};
