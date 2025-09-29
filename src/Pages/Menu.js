import SpaloonMenu from "../assets/Pdf/SpaloonMenu.pdf";

const Menu = () => {
  return (
    // <div className="flex justify-center items-center  h-[700px] ">
    //   <h1 className="text-4xl">Coming Soon </h1>
    // </div>

    <div className="w-full h-screen flex justify-center items-center">
      <a
        href={SpaloonMenu}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white bg-black px-6 py-3 rounded-lg font-bold"
      >
        View Menu
      </a>
    </div>
  );
};

export default Menu;
