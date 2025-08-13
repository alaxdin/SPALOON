import SpaloonMenu from "../assets/Pdf/SpaloonMenu.pdf";

const Menu = () => {
  return (
    // <div className="flex justify-center items-center  h-[700px] ">
    //   <h1 className="text-4xl">Coming Soon </h1>
    // </div>

    <div class="w-full h-screen">
      <iframe src={SpaloonMenu} class="w-full h-full" frameborder="0"></iframe>
    </div>
  );
};

export default Menu;
