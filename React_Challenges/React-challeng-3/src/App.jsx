import Layout from "./components/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import ProtectedRoute from "./components/ProtectedRoute";

//import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />}/>
          <Route path="products/:id" element={<ProductDetails />}/>
          <Route path="about" element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<h1>404 - Page Not Found</h1>}/>
        </Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App
