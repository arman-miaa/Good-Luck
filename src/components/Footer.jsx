import logo from "../assets/logo.png";
import google from "../assets/google.png";

const Footer = () => {
  // এই ফাংশনটি প্রতিটি লিঙ্কের জন্য ব্যবহার করা হবে
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-black text-white py-10">
      <footer className="container mx-auto flex flex-col sm:flex-row justify-between items-start space-y-8 sm:space-y-0 sm:space-x-8 px-4">
        {/* GoodLuck Logo and Description */}
        <div className="flex flex-col items-start w-full sm:w-1/3 lg:w-1/4">
          <div className="flex items-center mb-4">
            <img src={logo} alt="GoodLuck Logo" className="h-8 w-8 mr-2" />
            <span className="text-xl font-bold">GoodLuck</span>
          </div>
          <p className="text-gray-400 text-sm">
            Discover daily horoscopes, personalized insights, and more right at
            your fingertips!
          </p>
        </div>

        {/* Quick Links */}
        <div className="w-full sm:w-1/3 lg:w-1/4">
          <h6 className="text-lg font-bold mb-4">Quick Links</h6>
          <nav className="flex flex-col space-y-2">
            <a
              onClick={() => scrollToSection("home")}
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              Home
            </a>
            <a
              onClick={() => scrollToSection("about")}
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              About
            </a>
            <a
              onClick={() => scrollToSection("choose")}
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              Why Choose Us
            </a>
            {/* Services লিঙ্কটি সাধারণত "Services" সেকশনে যায়, তাই এখানে service ID ব্যবহার করা হয়েছে */}
            <a
              onClick={() => scrollToSection("service")}
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              Services
            </a>
            <a
              onClick={() => scrollToSection("review")}
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              Testimonials
            </a>
          </nav>
        </div>

        {/* Download Now */}
        <div className="w-full sm:w-1/3 lg:w-1/4 flex flex-col items-end">
          <h6 className="text-lg font-bold mb-4">Download Now</h6>
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={google}
              alt="Get it on Google Play"
              className="h-10 cursor-pointer"
            />
          </a>
        </div>
      </footer>
      <div className="w-full h-1 bg-gray-800 mt-10"></div>
    </div>
  );
};

export default Footer;
