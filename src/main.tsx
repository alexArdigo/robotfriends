import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "./Components/ErrorPage/index.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary 
        FallbackComponent={ErrorPage}
        onReset={() => location.href = '/'}
        >
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
