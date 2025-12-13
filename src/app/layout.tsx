import "../styles/globals.css";
import type { ReactNode } from "react";

import ReduxProvider from "./ReduxProvider";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          {children}
          <Toaster /> 
        </ReduxProvider>
        
      </body>
    </html>
  );
}
