import { useContext, lazy, Suspense } from "react";
import { ProContext } from "../Context/Products";
import { LoadingScreen } from "./LoadingScreen.jsx";

const LazyProducts = lazy(() => import("./Products.jsx"));
const LazyHero = lazy(() => import("./Hero.jsx"));

const HomePage = () => {
  const { products } = useContext(ProContext);

  return (
    <section className="">
      <Suspense fallback={<LoadingScreen />}>
        <LazyHero />
      </Suspense>
      <div className="container mx-auto py-20 px-10">
        <div className="grid grid-cols-1 xl:grid-cols-5 md:grid-cols-2 lg:grid-cols-4  gap-4 max-w-sm mx-auto  md:max-w-none">
          {products.map((product, index) => (
            <Suspense fallback={<LoadingScreen />}>
              <LazyProducts product={product} key={index} />
            </Suspense>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
