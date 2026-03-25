import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../lib/theme";
import './globals.css';
import Navigation from "./components/Navigation";

export const metadata: Metadata = {
  title: "Portfolio de Vincent Pham",
  description: "Portfolio de Vincent Pham - Développeur Full Stack",
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navigation />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
