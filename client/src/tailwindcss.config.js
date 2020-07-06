module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      'display': ['Chewy', 'Candara', 'Verdana'],
      'body': ['Chewy', 'Candara', 'Verdana'],
      curly: ['Chewy', 'Candara', 'Verdana'],
      test: ['Balsamiq Sans', 'Candara'],
    },
    extend: {                    
      colors: {
          lightbluebg: '#D9F2FF',
          nightbluebg: '#284881',
          bluegray: '#9ab9bc',
          nightblue: '#317CC1',
          darkblue: '#203864', // also used as nightblueoutline
          nightbluebar: '#BDD7EE',
          pinkbar: '#FFC5F0',
          pinkwindowbg: '#FEE2E2', // todos, shop
          lightpinkwindowbg: '#FEF0F0', // todos
          darkpinkwindowbg: '#F8BACF', // todos
          lightbluebarbg:'#EBF8FF', // todos
          mintbarbg: '#EBFDFF', // todos
          yellowbarbg: '#FFFFEB', // todos, shop
          // don't use gray, already defined
          gray2: '#F2F2F2', // shop
          // maybe choose 1 of the grays, anyway choose 1 gray and stick with it
          purplewindowbg: '#E7E9FF', // shop
      },
      height: {
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '75/100': '75%',
        '8/10': '80%',
        '9/10': '90%',
      },
      minHeight: {
        '10': '2.5rem',
        '64': '16rem',
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
      }
    }
  },
  variants: {
    fontFamily: ['responsive'],
    height: ["responsive", "hover", "focus"]
  },
  plugins: [],
}
