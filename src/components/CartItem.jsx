import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
export const CartItem = ({ ele }) => {
  // Destructure the cart

  const { removeItemFromCart, handleIncrease, handleDecrease } =
    useContext(CartContext);

  const { id, title, image, price, amount } = ele;
  return (
    <section className="select-none">
      <cart className=" border-b flex  py-4 px-2 flex-row  w-full">
        <div className="flex justify-start items-start gap-x-3 w-full">
          <div className="flex justify-center items-center w-1/4 h-full">
            <img
              src={image}
              alt={title}
              className="max-w-[55px]  object-contain"
            />
          </div>

          <div className="flex items-center justify-center flex-col gap-y-4 w-full">
            <div className="flex justify-center items-center w-full gap-x-5">
              <h6 className=" w-full  lg:text-md md:text-[12px]">{title}</h6>

              <div
                onClick={() => {
                  removeItemFromCart(id);
                }}
              >
                <CgClose
                  className=" hover:text-red-500 duration-500 text-gray-500 cursor-pointer "
                  size={18}
                />
              </div>
            </div>
            <div className="flex w-full justify-between items-center">
              <div className="flex justify-between items-center w-full">
                <div className="border flex justify-center max-w-[100px] px-2  items-center gap-x-5">
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      handleIncrease(id);
                    }}
                  >
                    <AiOutlinePlus className="cursor-pointer" />
                  </div>
                  <div>{amount}</div>
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      handleDecrease(id);
                    }}
                  >
                    <AiOutlineMinus
                      className={`cursor-pointer ${
                        amount === 1
                          ? "opacity-50 cursor-not-allowed"
                          : "opacity-100"
                      }`}
                    />
                  </div>
                </div>

                <div className="text-gray-500 text-[12px] ">{price} $</div>

                <div className=" text-[12px] ">
                  {(price * amount).toFixed(2)} $
                </div>
              </div>
            </div>
          </div>
        </div>
      </cart>
    </section>
  );
};
