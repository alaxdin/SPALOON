import BWbarber from "../assets/SpaloonImages/BWbarber.png";
import { Link } from "react-router-dom";
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
    <div className="w-full flex flex-col">
      {/* -------------------- Hero Section ---------------- */}
      <div className="relative w-full">
        <img
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] object-cover"
          src={BWbarber}
          alt="Barber"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center p-6 md:p-10 gap-6 md:gap-10 text-white bg-black/50">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center w-full">
            KEEP THE LOOK SPALOON
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center leading-relaxed w-full">
            At Spaloon, we believe grooming is an art. Our space is designed for
            comfort, <br />
            relaxation, and refinement, ensuring a high-end experience that goes
            beyond the chair.
            <br />
            Whether you're preparing for an important event or just treating
            yourself, we provide the <br />
            ultimate grooming experience tailored to your needs.
          </h2>
        </div>
      </div>

      {/* -------------------- Book Now Button ---------------- */}
      <div className="w-full flex justify-center items-center p-4">
        <Link
          to="/BookNow"
          className="w-32 h-16 sm:w-40 md:w-52 md:h-20 bg-black border-r-8 border-t-8 text-white flex justify-center items-center text-lg sm:text-xl md:text-2xl font-medium"
        >
          Book Now
        </Link>
      </div>

      {/* -------------------- About Section ---------------- */}
      <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 p-4 sm:p-6 md:p-8 lg:p-10">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={Barber}
            alt="Barber"
            className="w-full h-auto sm:h-48 md:h-64 lg:h-full object-contain"
          />
        </div>
        {/* Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-4 sm:gap-6 md:gap-10 lg:gap-16">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
            About Us
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
            Spaloon is a premium grooming destination designed for the modern
            gentleman who values sophistication, quality, and self-care. With a
            focus on precision cuts, expert beard grooming, and top-tier
            grooming services, we create an experience that blends traditional
            barbering with contemporary techniques.
          </h2>
        </div>
      </div>

      {/* -------------------- Info Cards Section ---------------- */}
      <div className="w-full flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 p-4 sm:p-6 md:p-8">
        {/* Hours */}
        <div className="w-full md:w-1/3 flex flex-col items-center justify-start text-center gap-2 sm:gap-3 md:gap-4 lg:gap-5">
          <img
            className="w-16 sm:w-20 md:w-24 lg:w-28"
            src={tenoclock}
            alt="Clock Icon"
          />
          <h2 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Hours
          </h2>
          <h2 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
            10:00 AM - 10:00 PM
          </h2>
          <h3 className="font-medium text-sm sm:text-base md:text-lg lg:text-xl">
            In All Branches
          </h3>
        </div>

        {/* Contact */}
        <div className="w-full md:w-1/3 flex flex-col items-center justify-start text-center gap-2 sm:gap-3 md:gap-4 lg:gap-5">
          <img
            className="w-16 sm:w-20 md:w-24 lg:w-28"
            src={phone}
            alt="Phone Icon"
          />
          <h2 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Contact Us
          </h2>
          <h3 className="font-medium text-sm sm:text-base md:text-lg lg:text-xl">
            Ready for a fresh look? Get in touch with our team at Spaloon to
            book your appointment today.
          </h3>
        </div>

        {/* Location */}
        <div className="w-full md:w-1/3 flex flex-col items-center justify-center text-center gap-2 sm:gap-3 md:gap-4 lg:gap-5">
          <img
            className="w-16 sm:w-20 md:w-24 lg:w-28"
            src={location}
            alt="Location Icon"
          />
          <h2 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Location
          </h2>
          <h3 className="font-medium text-sm sm:text-base md:text-lg lg:text-xl">
            Kuwait City - Fahaid Al-Salam Street
          </h3>
          <h3 className="font-medium text-sm sm:text-base md:text-lg lg:text-xl">
            Al-Bida - The Palms Hotel
          </h3>
          <h3 className="font-medium text-sm sm:text-base md:text-lg lg:text-xl">
            Bneid Al-Gar - Meslah West
          </h3>
          <h3 className="font-medium text-sm sm:text-base md:text-lg lg:text-xl">
            Mangaf - Ray Hotel
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
