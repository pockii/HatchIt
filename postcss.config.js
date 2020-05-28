module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
    ],
    
    theme: {
        fontFamily: {
            'display': ['Chewy', 'Candara', 'Verdana'],
            'body': ['Chewy', 'Candara', 'Verdana'],
        },

        extend: {                    
            colors: {
                lightbluebg: "#D9F2FF",
                nightblue: '#317CC1',
                darkblue: '#203864', // also used as nightblueoutline
                nightbluebar: '#BDD7EE',
                pinkbar: '#FFC5F0',
                pinkwindowbg: '#FEE2E2', // todos, shop
                lightbluebarbg:'#EBF8FF', // todos
                mintbarbg: '#E8FEF8', // tpdos
                yellowbarbg: '#FFFFEB', // todos, shop
                // don't use gray, already defined
                gray1: '#E7E6E6', // todos
                gray2: '#F2F2F2', // shop
                // maybe choose 1 of the grays, anyway choose 1 gray and stick with it
                purplewindowbg: '#E7E9FF', // shop
            }
        },
    },

    variants: {
        fontFamily: ['responsive']
    }
}