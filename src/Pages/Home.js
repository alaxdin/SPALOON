import BWbarber from "../assets/SpaloonImages/BWbarber.png";
import { Link, useNavigate } from "react-router-dom";
import Barber from "../assets/SpaloonImages/Barber.png";
import tenoclock from "../assets/SpaloonImages/tenoclock.svg";
import phone from "../assets/SpaloonImages/phone.svg";
import location from "../assets/SpaloonImages/location.svg";

const Home = () => {
  // const bookClick = useNavigate();
  // const handleClick = () => {
  //   bookClick("/BookNow");
  // };
  return (
    // className="flex relative w-[90%] lg:w-[50%]"
    // className="flex  justifycontent care  flexDirection column  gap 10px , w-[100vw]"
    <div>
      <div>
        {/* -------------------- Image ---------------- */}
        <div className="w-[100%] lg:w-[100%] h-full flex justify-center  ">
          <img
            className="w-[100%] lg:w-[100%] h-[700px] object-cover "
            src={BWbarber}
            alt="Barber"
          />

          <div
            className=" flex justify-center item-center flex-col lg:w-[100%] lg:h-[700px] md:w-[50px] md:h-10 border-black  absolute  text-white p-10 gap-40"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.521)",
            }}
          >
            <h1 className=" text-5xl text-center w-[100%] lg:w-[100%]">
              KEEP THE LOOK SPALOON
            </h1>

            <h2 className=" text-center text-3xl leading-relaxed  lg:w-[100%] lg:h-[700px]">
              At Spaloon, we believe grooming is an art. Our space is designed
              for comfort, <br />
              relaxation, and refinement, ensuring a high-end experience that
              goes beyond the chair.
              <br /> Whether you're preparing for an important event or just
              treating yourself, we provide the <br /> ultimate grooming
              experience tailored to your needs.
            </h2>
          </div>
        </div>

        {/* ------------------------------------------ Down Part ---------------- */}

        <div className="flex flex-col gap-10 p-8  ">
          {/* ---------------------------------- Button ----------------- */}
          <div className="md:w-[100%] lg:w-[100%] h-full flex justify-center items-center  ">
            <Link
              className="  w-52 h-20 bg-black border-r-8 border-t-8 text-white flex justify-center items-center text-2xl font-medium"
              to="/BookNow"
            >
              Book Now
            </Link>
          </div>

          {/* ------------------------------ Second part ---------------------- */}

          <div className=" w-full h-full flex  ">
            {/* -------- image ----- */}
            <div className="w-full h-full p-10 ">
              <img className=" w-full h-full object-contain" src={Barber} />
            </div>
            {/* ---------- Test --------- */}
            <div className="w-full h-100 flex justify-center items-start flex-col gap-16  ">
              <h1 className="text-2xl font-bold">About Us</h1>
              <h2 className="text-xl font-medium">
                Spaloon is a premium grooming destination designed for the
                modern gentleman who values sophistication, quality, and
                self-care. With a focus on precision cuts, expert beard
                grooming, and top-tier grooming services, we create an
                experience that blends traditional barbering with contemporary
                techniques.
              </h2>
            </div>
          </div>

          {/* ------------------------Theird Part ---------------------------- */}
          <div className="w-full h-full flex">
            <div className="w-full h-100 flex justify-start items-center flex-col text-center gap-2  ">
              <img className="w-20" src={tenoclock} />
              <h2 className="font-bold ">Hours</h2>
              <h2 className="font-bold text-xl">10:00 AM - 10:00 PM</h2>
              <h3 className="font-medium text-xl">In All Branches</h3>
            </div>
            <div className="w-full h-100 flex justify-start items-center flex-col text-center gap-2  ">
              <img className="w-20  " src={phone} />
              <h2 className="font-bold text-2xl">Contact Us</h2>
              <h3 className="font-bold text-xl">
                Ready for a fresh look? Get in touch with our team at Spaloon to
                book your appointment today.
              </h3>
            </div>
            <div className="w-full h-100 flex justify-center items-center flex-col text-center gap-3  ">
              <img className="w-20 " src={location} />
              <h2 className="font-bold text-2xl ">Location</h2>
              <h3 className="font-bold text-xl">
                Kuwait City - Fahaid Al-Salam Street
              </h3>
              <h3 className="font-bold text-xl">Al-Bida - The Palms Hotel</h3>
              <h3 className="font-bold text-xl">Bneid Al-Gar - Meslah West</h3>
              <h3 className="font-bold text-xl">Mangaf - Ray Hotel</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
