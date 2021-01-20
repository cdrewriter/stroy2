module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    color: {
      primary: '#14213D',
    },
    fontFamily: {
      'body': ['Montserrat', 'sans-serif'],
    },

    screens: {
      '2xl': {'min': '1280px', 'max': '1920px'},

        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1280px',

    },

    boxShadow: {
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
      backgroundImage: (theme) => ({
        
        'hero-pattern': "url('https://res.cloudinary.com/dpiuthi6q/image/upload/v1602171163/stroy2/img/slider_maaevf.png')",
'feedback-pattern': "url('https://res.cloudinary.com/dpiuthi6q/image/upload/v1602290991/Group_102_yxtgmw.png')",
       
      }),
      colors: {
        'sorange': '#FCA311',
      },
    },
  },
  variants: {},
  plugins: [],
};
