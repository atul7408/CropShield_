import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ClerkProvider } from '@clerk/clerk-react'


const PUBLISHABLE_KEY = "pk_test_bWFzdGVyLWplbm5ldC0zOS5jbGVyay5hY2NvdW50cy5kZXYk";


if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
  <App />
</ClerkProvider>
</React.StrictMode>,

);

