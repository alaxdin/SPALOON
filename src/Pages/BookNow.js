import City from "../assets/SpaloonImages/City.png";
import Palms from "../assets/SpaloonImages/Palms.png";
import Gar from "../assets/SpaloonImages/Gar.png";
import Mangaf from "../assets/SpaloonImages/Mangaf.png";

const BookNow = () => {
  return (
    <div>
      <div className="w-full h-60 flex justify-center items-center ">
        <h1 className="font-bold text-3xl">Choose the branch nearest to you</h1>
      </div>
      {/* -------------------- Location --------------------------------------------- */}
      <div className="w-full h-full flex justify-center  ">
        {/* ---------------------  Kuwait City Location  */}
        <div className="  w-[100%] h-[100%]  flex justify-center items-center flex-col gap-8">
          <a
            href="https:wa.me/96596625725"
            target="_blank"
            rel="noopener noreferrer"
            to="/Salon"
          >
            <img
              className="rounded-3xl w-[300px] h-[400px] object-cover"
              src={City}
            />
          </a>
          <h2 className="font-bold text-xl">Kuwait City</h2>
        </div>
        {/* -------------------------- Palms Location ---------------- */}
        <div className="  w-[100%] h-[100%]  flex justify-center items-center flex-col gap-8">
          <a
            href="https:wa.me/96598980254"
            target="_blank"
            rel="noopener noreferrer"
            to="/Salon"
          >
            <img
              className="rounded-3xl w-[300px] h-[400px] object-cover "
              src={Palms}
            />
          </a>
          <h2 className="font-bold text-xl">Al-Bida</h2>
        </div>

        {/* --------------------------- Bneid al Gar Location */}
        <div className="  w-[100%] h-[100%]  flex justify-center items-center flex-col gap-8">
          <a
            href="https:wa.me/96597626201"
            target="_blank"
            rel="noopener noreferrer"
            to="/Salon"
          >
            <img
              className="rounded-3xl w-[300px] h-[400px] object-cover"
              src={Gar}
            />
          </a>
          <h2 className="font-bold text-xl">Bneid Al-Gar</h2>
        </div>

        {/* --------------------------- Mangaf Location  */}
        <div className="  w-[100%] h-[100%]  flex justify-center items-center flex-col gap-8">
          <a
            href="https:wa.me/96599325148"
            target="_blank"
            rel="noopener noreferrer"
            to="/Salon"
          >
            <img
              className="rounded-3xl  w-[300px] h-[400px] object-cover"
              src={Mangaf}
            />
          </a>
          <h2 className="font-bold text-xl">Mangaf</h2>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
