import SpaloonMenu from "../assets/Pdf/SpaloonMenu.pdf";

const Menu = () => {
  return (
    // <div className="flex justify-center items-center  h-[700px] ">
    //   <h1 className="text-4xl">Coming Soon </h1>
    // </div>

    <div className="w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px]">
      <iframe
        src={SpaloonMenu}
        className="w-full h-full"
        frameBorder={0}
        title="Spaloon Menu"
      ></iframe>
    </div>
  );
};

export default Menu;
