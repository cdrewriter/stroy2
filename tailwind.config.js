module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
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
        "hero-pattern": "url('https://res.cloudinary.com/dpiuthi6q/image/upload/v1602171163/stroy2/img/slider_maaevf.png')",       
      }),
    },
  },
  variants: {},
  plugins: [],
};
