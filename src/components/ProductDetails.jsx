import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProContext } from "../Context/Products";
import { CartContext } from "../Context/CartContext";

const ProductDetails = () => {
  const { products } = useContext(ProContext);
  const { addToCart } = useContext(CartContext);

  const { id } = useParams();

  const product = products.find((ele) => {
    return ele.id === parseInt(id);
  });

  return (
    <section className="w-full py-20 px-10 container mx-auto lg:h-screen">
      {product && (
        <div className="flex justify-around items-center max-lg:flex-col max-lg:justify-center w-full h-full gap-10">
          <div className="w-1/2 flex   flex-col ">
            <img
              src={product.image}
              className="mx-auto  bg-slate-500 "
              width={300}
              alt={product.title}
            />
          </div>

          <div className="w-1/2 flex flex-col gap-y-5 ">
            <div className="font-semibold text-[20px]">{product.title}</div>
            <div className="font-bold">{product.price} $</div>

            <div className="leading-[1.2] text-gray-600">
              {product.description}
            </div>

            <button
              onClick={() => {
                addToCart(product, product.id);
              }}
              className="border self-start px-6 py-2 rounded-md  hover:bg-black/80 duration-500 font-semibold text-white bg-black "
            >
              add to cart
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductDetails;
