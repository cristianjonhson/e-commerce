// App.js

/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { UseGetProducts } from "./hooks/useProducts";
import MainRouter from "./router/MainRouter";

const App = () => {
  const { productos, loading } = UseGetProducts();

  return (
    <div className="app-container" style={{ width: "100vw", height: "100vh" }}>
      {/* Pasa las props correctamente a NavBarComponent */}
      {loading ? (
        <div>Loading...</div>
      ) : (
          <MainRouter productos={productos} />
      )}
    </div>
  );
};

export default App;
