/* eslint-disable prettier/prettier */
// eslint-disable-next-line no-undef
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    jit: true,
    theme: {
        letterSpacing: {
            tightest: '-.075em',
            tighter: '-.05em',
            tight: '-.025em',
            normal: '0',
            wide: '.025em',
            wider: '.05em',
            widest: '.1em',
        },
        extend: {
            backgroundImage: {
                'footer-image': "url('../src/assets/brsk-fullfibre-home-broadband.svg')",
            },
            plugins: [],
        }
    }
}