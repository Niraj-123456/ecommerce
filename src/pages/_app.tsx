import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { ThemeProvider } from "@mui/material";
import { customTheme } from "@/utils/customTheme";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={customTheme}>
      <SessionProvider>
        <Component {...pageProps} />
      </SessionProvider>
    </ThemeProvider>
  );
}
