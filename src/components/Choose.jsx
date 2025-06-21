import chooseImg1 from "../assets/choose1.png";
import chooseImg2 from "../assets/choose2.png";

const Choose = () => {
  return (
    <div className="mt-16">
      <div className="relative bg-gradient-to-b from-[#FF7553] to-[#FFC0A0] w-full min-h-[600px] rounded-xl overflow-hidden p-6 md:p-12">
        {/* Top Section: Image 1 and Text */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={chooseImg1}
              alt="Phone 1"
              className="max-w-[240px] md:max-w-[280px]"
            />
          </div>

          {/* Right Text */}
          <div className="flex-1 text-white text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Us
            </h3>
            <p className="text-sm md:text-base leading-relaxed">
              We offer a seamless and personalized astrology experience designed
              to help you navigate life’s journey with confidence. Our app
              provides accurate daily horoscopes, in-depth birth charts, and
              love compatibility insights. With access to expert astrologers for
              real-time guidance, you can receive advice on love, career, and
              personal growth. Our user-friendly interface and astrology tools
              make exploring the cosmos effortless.
            </p>

            {/* Download Button */}
            <button className="mt-6 bg-white text-main py-2 px-4 rounded-full font-medium hover:bg-gray-200">
              Download Now
            </button>

            {/* Image2 Below Button */}
            <div className="mt-8 flex justify-center md:justify-end">
              <img
                src={chooseImg2}
                alt="Phone 2"
                className="max-w-[240px] md:max-w-[260px]"
              />
            </div>
          </div>
        </div>

        {/* Marquee Text */}
        <div className="absolute bottom-4 left-0 w-full z-0">
          <marquee
            behavior="scroll"
            direction="left"
            className="text-[60px] md:text-[120px] font-black text-white  whitespace-nowrap"
          >
            Download Now and Unlock Your Cosmic Guide!
          </marquee>
        </div>
      </div>
    </div>
  );
};

export default Choose;
