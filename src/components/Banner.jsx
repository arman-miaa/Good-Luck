import banner from "../assets/banner.png"
import star from "../assets/star.png"
const Banner = () => {
  return (
    <div id="home">
      <div className="flex justify-between mt-16">
        <div>
          <h1 className=" text-6xl">
            Discover Your <br /> Future with <br />{" "}
            <span className="text-main">Astrology</span>
          </h1>
          <button className="mt-12 font-medium cursor-pointer bg-main text-white py-2 px-3 rounded-full hover:bg-gray-300 hover:text-main">
            DownLoad Now
          </button>
        </div>
        <div>
          <p>
            Discover daily horoscopes, personalized <br /> insights, and more –
            right at your fingertips!
          </p>
        </div>
      </div>

      <div className="mt-10">
        {/* box */}
        <div className="bg-gradient-to-r from-main via-[#fe806488] to-main w-full h-[560px] rounded-xl flex items-center text-white text-[200px] font-bold relative">
          <marquee className="mt-18" behavior="" direction="" >
            Download Now and Unlock Your Cosmic Guide!
                  </marquee>
                  <div className="absolute right-4 bottom-24 z-30">
                      <img src={banner} alt="" />
                  </div>
                  <div>
                      <img className="absolute  right-0 -top-46 w-24" src={star} alt="" />
                  </div>
        </div>
      </div>
    </div>
  );
}

export default Banner