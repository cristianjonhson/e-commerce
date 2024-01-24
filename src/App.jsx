// App.js

import "bootstrap/dist/css/bootstrap.min.css";
import { UseGetProducts } from "./hooks/useProducts";
import MainRouter from "./router/MainRouter";
import { CartProvider } from "./context/CartContext";


const App = () => {
  const { productos, loading } = UseGetProducts();

  return (
    <div className="app-container" style={{ width: "100vw", height: "100vh" }}>
      <CartProvider>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <MainRouter productos={productos} />
        )}
      </CartProvider>
    </div>
  );
};

export default App;
