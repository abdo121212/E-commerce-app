import woman from "../img/woman_hero.png";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section className="h-[800px] bg-hero  w-full px-10">
      <div className="flex justify-around items-center w-full h-full ">
        <div className="flex justify-around items-center gap-x-3 font-semibold text-2xl uppercase">
          <div className="">
            <div className="flex flex-col font-semibold justify-center  gap-y-2">
              <div className="flex justify-start items-center gap-x-4">
                <div className="bg-red-500 w-10 h-[2px]"></div>
                <div data-aos="fade-up" className="">
                  new trend
                </div>
              </div>

              <h1
                data-aos="fade-left"
                className="sm:text-[70px] max-md:text-[40px] max-sm:[30px] leading-[1.1] font-light mb-5"
              >
                autumn sale stylish
                <br />
                <span className="font-semibold ">woman</span>
              </h1>
              <Link
                data-aos="fade-right"
                to={"more"}
                smooth
                duration={500}
                className="uppercase border-b-2 border-[#473c35] cursor-pointer self-start"
              >
                Discover More
              </Link>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in" className="hidden lg:block">
          <img src={woman} alt="woman" width={250} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
