import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-vhxzzsuff2wss88l.us.auth0.com"
      clientId="3TdTlbonK2rCEEiuPSGWObuSkSMScs5M"
      authorizationParams={{
        redirect_uri: window.location.origin, // ✅ Ensure this matches your Auth0 settings
        audience: "https://dev-vhxzzsuff2wss88l.us.auth0.com/api/v2/", // ✅ Required for API calls
        scope: "openid profile email"
      }}
      cacheLocation="localstorage" // 🛠 Fix invalid state issue
      useRefreshTokens={true} // 🔥 Prevents token expiration issues
    >
      <App />
    </Auth0Provider>
  </StrictMode>
);
