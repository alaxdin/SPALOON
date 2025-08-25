import City from "../assets/SpaloonImages/City.png";
import Palms from "../assets/SpaloonImages/Palms.png";
import Gar from "../assets/SpaloonImages/Gar.png";
import Mangaf from "../assets/SpaloonImages/Mangaf.png";

const BookNow = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Header */}
      <div className="w-full h-60 flex justify-center items-center">
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
          Choose the branch nearest to you
        </h1>
      </div>

      {/* Locations Grid */}
      <div className="w-full flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        {/* Kuwait City */}
        <div className="flex flex-col items-center gap-2 sm:gap-4">
          <a
            href="https://wa.me/96596625725"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="rounded-3xl w-48 sm:w-56 md:w-60 lg:w-72 h-64 sm:h-72 md:h-80 lg:h-96 object-cover"
              src={City}
              alt="Kuwait City"
            />
          </a>
          <h2 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
            Kuwait City
          </h2>
        </div>

        {/* Al-Bida */}
        <div className="flex flex-col items-center gap-2 sm:gap-4">
          <a
            href="https://wa.me/96598980254"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="rounded-3xl w-48 sm:w-56 md:w-60 lg:w-72 h-64 sm:h-72 md:h-80 lg:h-96 object-cover"
              src={Palms}
              alt="Al-Bida"
            />
          </a>
          <h2 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
            Al-Bida
          </h2>
        </div>

        {/* Bneid Al-Gar */}
        <div className="flex flex-col items-center gap-2 sm:gap-4">
          <a
            href="https://wa.me/96597626201"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="rounded-3xl w-48 sm:w-56 md:w-60 lg:w-72 h-64 sm:h-72 md:h-80 lg:h-96 object-cover"
              src={Gar}
              alt="Bneid Al-Gar"
            />
          </a>
          <h2 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
            Bneid Al-Gar
          </h2>
        </div>

        {/* Mangaf */}
        <div className="flex flex-col items-center gap-2 sm:gap-4">
          <a
            href="https://wa.me/96599325148"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="rounded-3xl w-48 sm:w-56 md:w-60 lg:w-72 h-64 sm:h-72 md:h-80 lg:h-96 object-cover"
              src={Mangaf}
              alt="Mangaf"
            />
          </a>
          <h2 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
            Mangaf
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
