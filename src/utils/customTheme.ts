import { createTheme } from "@mui/material";

export const customTheme = createTheme({
  typography: {
    fontFamily: [
      "ProductSans-Light",
      "ProductSans-Regular",
      "ProductSans-Medium",
      "ProductSans-Bold",
      "Roboto",
      "san-serif",
    ].join(","),
  },
});
