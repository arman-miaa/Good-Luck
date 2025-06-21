import aboutImg from "../assets/about.png"
const About = () => {
  return (
    <div id="about" className="  mt-16">
      <div className="flex justify-between mt-30 gap-8">
              <div className="flex-1 relative flex justify-center  w-full h-[550px] rounded-2xl bg-gradient-to-b from-main to-[#fe806488]">
                  <img className="absolute -top-14" src={aboutImg} alt="" />
        </div>

        <div className="flex-1">
          <h3 className="text-4xl font-bold mb-4">About Good Luck</h3>{" "}
          <p className="text-gray-700 leading-relaxed ">
            We make astrology simple, accurate, and personal. Our app provides
            daily horoscopes, birth charts, love compatibility insights, and
            live astrologer consultations to help you navigate life’s journey
            with confidence. 
          </p>
          <p className="mt-4">
           
            lending ancient wisdom with modern technology, we deliver customized
            astrology readings that empower you in love, career, and personal
            growth.
          </p>
          <p className="mt-4">
            Join millions who trust Good Luck for celestial guidance. Download
            now and unlock the secrets of the stars!
          </p>
          <button className="mt-12 font-medium cursor-pointer bg-main text-white py-2 px-3 rounded-full hover:bg-gray-300 hover:text-main">
            DownLoad Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
