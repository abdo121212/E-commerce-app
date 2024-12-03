import { BsTrashFill } from "react-icons/bs";
import { IoMdArrowRoundForward } from "react-icons/io";
import { useContext } from "react";
import { SideBarContext } from "../Context/SidBarContext";
import { CartContext } from "../Context/CartContext";
import { CartItem } from "./CartItem";

export const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SideBarContext);
  const { cart, clearCart } = useContext(CartContext);

  return (
    <>
      <div
        className={` ${
          isOpen ? "right-0" : "-right-[100%]"
        } w-full bg-white fixed top-0 h-full duration-500 shadow-2xl xl:w-[30%] lg:w-[31%] md:w-[50%] ms:w-full p-4 rounded-tl overflow-hidden z-50 `}
      >
        <div>
          <div className="flex justify-between items-center border-b py-6 font-semibold">
            <div>Shopping Bag ( {cart.length} )</div>
            <IoMdArrowRoundForward
              onClick={() => {
                handleClose();
              }}
              className="text-2xl cursor-pointer w-8 h-8 flex justify-center items-center"
            />
          </div>

          <div className="flex z-50 flex-col  w-[400px] mx-auto h-[550px] overflow-y-auto border-b">
            {cart.map((ele) => {
              return <CartItem ele={ele} key={ele.id} />;
            })}
          </div>
          {cart.length ? (
            <div className="flex justify-between items-center py-5 px-4 ">
              <div className="font-semibold">
                Total :{" "}
                {cart
                  .reduce((acc, ele) => acc + ele.price * ele.amount, 0)
                  .toFixed(2)}
                $
              </div>
              <div
                onClick={() => {
                  clearCart();
                }}
              >
                <BsTrashFill
                  className=" text-red-500 cursor-pointer hover:scale-125 duration-300"
                  size={20}
                />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};
