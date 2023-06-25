const Container = {
  variants: {
    section: {
      display: "flex",
      flexDir: "column",
      position: "relative",
      gap: 8,
      width: "full",
      minH: "50vh",
      maxW: { base: "1024px", "2xl": "1550px" },
      margin: "0 auto !important",
      justifyContent: "center",
      p: { base: 4 },
    },
    overlay: {
      display: "flex",
      flexDir: "column",
      position: "relative",
      gap: 8,
      width: "full",
      minH: "50vh",
      p: 0,
      my: "2 !important",
      maxW: "full",
    },
  },
};

export default Container;
