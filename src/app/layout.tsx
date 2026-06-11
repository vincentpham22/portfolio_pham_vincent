import type { Metadata } from "next";
import { Roboto, Nunito, Roboto_Mono } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../lib/theme";
import './globals.css';
import Navigation from "./components/Navigation";
import AuroraBackground from "./components/AuroraBackground";
import ScrollRevealProvider from "./components/useScrollReveal";

// Fonts referenced by the theme (Roboto body / Nunito display) and globals.css
// (Roboto Mono eyebrows). Loaded via next/font for zero layout shift; exposed
// as CSS variables and also registered under their family names so existing
// fontFamily strings keep resolving.
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-roboto",
});
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  variable: "--font-nunito",
});
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Portfolio de Vincent Pham",
  description: "Portfolio de Vincent Pham - Développeur Full Stack",
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${roboto.variable} ${nunito.variable} ${robotoMono.variable}`}
    >
      <body suppressHydrationWarning>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* Fixed atmosphere behind everything (z-index:-1). Mounted once. */}
            <AuroraBackground />
            {/* Single shared IntersectionObserver driving all .reveal nodes. */}
            <ScrollRevealProvider />
            <Navigation />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
