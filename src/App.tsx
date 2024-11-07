import React, { useEffect } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppRoutes } from "./routes/router";
import "react-image-lightbox/style.css";

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
}
function App() {
  const routes = useRoutes(AppRoutes);

  return (
    <div className="app-routing-container">
      <ScrollToTop />
      {routes}
    </div>
  );
}

export default App;
