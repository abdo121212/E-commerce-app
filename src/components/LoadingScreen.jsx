import { PropagateLoader } from "react-spinners";

export const LoadingScreen = () => {
  return (
    <section className="w-full h-screen flex fixed top-0 left-0 right-0 bottom-0 z-50 justify-center items-center bg-white">
      <PropagateLoader color="black" size={13} speedMultiplier={1} />
    </section>
  );
};
