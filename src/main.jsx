import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Router from "@/router";
import { ThemeProvider } from "@/components/ui/theme-provider";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <Router />
            </ThemeProvider>
        </BrowserRouter>
    </StrictMode>
);