module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      black15: "rgba(0,0,0,0.15)",
      gray1: "rgba(246,246,246,1)",
      gray2: "rgba(206,206,206,1)",
      gray3: "rgba(112,112,112,1)",
      orange: "rgba(252, 163, 17, 1)",
      darkBlue: "rgba(20, 33, 61, 1)",
      white: 'rgba(255,255,255,1)'
    },
    fontFamily: {
      'headings': ['Code Pro', 'sans-serif'],
      'body': ['Gilroy', 'sans-serif'],
    },
    screens: {
      '2xl': {'min': '1280px', 'max': '1920px'},
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1280px',
    },
    fontSize: {
      zero: '0',
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '8xl': '6rem',
    },
    boxShadow: {
      text: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
      xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      focus: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      none: 'none',
    },
    bd: {
      padding: {
        default: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
    },
    container: {},
    extend: {
      backgroundImage: () => ({
        'hero-pattern': "url('https://res.cloudinary.com/dpiuthi6q/image/upload/v1602171163/stroy2/img/slider_maaevf.png')",
        'feedback-pattern': "url('https://res.cloudinary.com/dpiuthi6q/image/upload/v1602290991/Group_102_yxtgmw.png')",
      }),
      // colors: {
      //   'sorange': '#FCA311',
      //   'colorGraySub': '#CECECE38',
      //   'colorPrimary': '#14213d',
      //   'colorPrimary-light': '#3e4868',
      //   'colorPrimary-dark': '#000018',
      //   'colorSecondary': '#ff5722',
      //   'colorSecondary-light': '#ff8a50',
      //   'colorSecondary-dark': '#c41c00',
      //   'onPrimary': '#FFFFFF',
      //   'onSecondary': '#ffffff',
      //
      //   'colorGray': '#E1E2E1',
      //   'colorMain': '#212121',
      // },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
      boxShadow: ['group-hover', 'hover'],
      fill: ['hover', 'focus'],
    },
    width: ['responsive', 'group-hover'],
    display: ['responsive', 'group-hover', 'hover'],
    margin: ['responsive', 'group-hover', 'hover'],
    backgroundColor: ['responsive',  'group-hover', 'focus-within', 'hover', 'focus'],
    opacity: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
    borderColor: ['responsive',  'group-hover', 'focus-within', 'hover', 'focus'],
    textColor: ['responsive',  'group-hover', 'focus-within', 'hover', 'focus'],
    divideColor: ['group-hover'],
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',

    }),
  ],
};
