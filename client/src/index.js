import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import * as Sentry from "@sentry/react";
import { ErrorBoundary } from "@sentry/react";

Sentry.init({
  dsn: process.env.SENTRY_FRONTEND_DSN,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary fallback={<p>An error has occurred</p>}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
reportWebVitals();
serviceWorkerRegistration.register();
