import { useContext } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const Products = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const { id, image, title } = product;
  return (
    <section name="more" className="py-20 select-none">
      <div
        data-aos="fade-up"
        className="w-full h-[300px] max-md:max-w-[600px] border group relative overflow-hidden rounded-lg"
        key={product.id}
      >
        <Link
          to={`/product/${id}`}
          className="mx-auto h-full flex items-center justify-center cursor-pointer w-[200px]  "
        >
          <img
            src={image}
            alt={id}
            height={50}
            width={150}
            className="group-hover:scale-125 duration-500"
          />
        </Link>
        <div className="absolute top-3 -right-14  z-20 flex justify-center items-center duration-700 group-hover:right-2 flex-col  gap-1">
          <button>
            <div
              onClick={() => {
                addToCart(product, id);
              }}
              className="flex justify-center items-center cursor-pointer  text-white bg-[#ab9b90] opacity-50 hover:opacity-100 duration-300  w-10 h-10 rounded-lg"
            >
              <AiOutlinePlus className="text-2xl " />
            </div>
          </button>

          <Link to={`/product/${id}`}>
            <div className="flex justify-center items-center opacity-50  duration-300 hover:opacity-100 bg-[#f5f5f5] w-10 h-10 rounded-lg">
              <AiOutlineEye className="text-2xl " />
            </div>
          </Link>
        </div>

        <Link
          to={`/product/${id}`}
          className="absolute  text-white left-0 group-hover:bottom-0 px-5  right-0 duration-500  bottom-[100%] top-0 bg-black/55 w-full rounded-lg flex justify-center items-center z-10 flex-col hover:left-0  "
        >
          <div data-aos="fade-up" className="text-center pb-4">
            {title}
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Products;
