import SpaloonMenu from "../assets/Pdf/SpaloonMenu.pdf";

const Menu = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-start pt-20">
      <iframe
        src={SpaloonMenu}
        className="w-[90%] h-[80vh] rounded-lg shadow-lg"
        frameBorder="0"
        title="Spaloon Menu"
      ></iframe>
    </div>
  );
};

export default Menu;
