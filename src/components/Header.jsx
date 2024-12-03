import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { SideBarContext } from "../Context/SidBarContext";
import { CartContext } from "../Context/CartContext";

import logo from "../img/logo.svg";

export const Header = () => {
  const { isOpen, setIsOpen } = useContext(SideBarContext);
  const { cart } = useContext(CartContext);
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setActive(true) : setActive(false);
    });
  });

  return (
    <header
      className={`fixed  w-full top-0 py-2  px-10 z-50 ${
        active ? "bg-white shadow-md duration-700" : "bg-[#f5e6e0]"
      }  `}
    >
      <div className="flex justify-between items-center container mx-auto  ">
        <div data-aos="fade-right">
          <img
            className="rounded-full cursor-pointer"
            alt="logo"
            width={30}
            src={logo}
          />
        </div>

        <div
          data-aos="fade-left"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <div className="relative max-w-[50px]">
            <AiOutlineShoppingCart className="cursor-pointer" size={35} />

            {cart.length !== 0 ? (
              <div className="bg-red-500 absolute bottom-0 rounded-[50%] text-white w-5 h-5 flex justify-center items-center right-0 font-semibold text-sm">
                {cart.length}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
