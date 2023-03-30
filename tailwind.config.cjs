/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            //Neutral
            colors: {
                DarkText: 'hsl(229, 25%, 31%)',
                ScoreText: 'hsl(229, 64%, 46%)',
                HeaderOutline: 'hsl(217, 16%, 45%)',
            },
            backgroundImage: {
                ScissorsGradient:
                    'linear-gradient(360deg, hsl(39, 89%, 49%), hsl(40, 84%, 53%))',
                PaperGradient:
                    'linear-gradient(360deg, hsl(230, 89%, 62%), hsl(230, 89%, 65%))',

                RockGradient:
                    'linear-gradient(360deg, hsl(349, 71%, 52%), hsl(349, 70%, 56%))',
            },
            boxShadow: {
                customInnerTop: 'inset 0 6px 0px 0 rgb(0 0 0 / 0.15)',
                customInnerBottom: 'inset 0px -6px 0px 0 rgb(0 0 0 / 0.3)',
            },
        },
    },
    plugins: [],
}
