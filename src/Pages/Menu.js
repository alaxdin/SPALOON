import SpaloonMenu from "../assets/Pdf/SpaloonMenu.pdf";

const Menu = () => {
  return (
    // <div className="flex justify-center items-center  h-[700px] ">
    //   <h1 className="text-4xl">Coming Soon </h1>
    // </div>

    <div className="w-full h-[420px] sm:h-[520px] md:h-[640px] lg:h-[800px] xl:h-[900px]">
      <iframe
        src={SpaloonMenu}
        className="w-full h-full"
        style={{ zoom: "0.9" }}
        frameBorder={0}
        title="Spaloon Menu"
      ></iframe>
    </div>
  );
};

export default Menu;
