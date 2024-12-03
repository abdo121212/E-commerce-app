import { Sidebar } from "./components/Sidebar";
import React, { lazy, Suspense, useEffect } from "react";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProProvider } from "./Context/Products";
import { SidebarProvider } from "./Context/SidBarContext";
import { LoadingScreen } from "./components/LoadingScreen.jsx";
import { CartProvider } from "./Context/CartContext.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const LazyHome = lazy(() => import("./components/HomePage.jsx"));
const LazyProductDetails = lazy(() =>
  import("./components/ProductDetails.jsx")
);

const routes = [
  {
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <LazyHome />
      </Suspense>
    ),
    path: "/",
  },
  {
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <LazyProductDetails />
      </Suspense>
    ),
    path: "/product/:id",
  },
];

const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
  },
});

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <SidebarProvider>
        <CartProvider>
          <ProProvider>
            <Header />
            <RouterProvider router={router} />
            <Sidebar />
            <Footer />
          </ProProvider>
        </CartProvider>
      </SidebarProvider>
    </>
  );
}

export default App;
