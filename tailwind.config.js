export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { chalk: '#F4F4F1', ink: '#42474D', orange: '#E87524', sawdust: '#D7D1C8', steel: '#656B70' },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        body: ['Newsreader', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}