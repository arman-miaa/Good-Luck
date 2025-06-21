import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";
import service5 from "../assets/service5.png";
import service6 from "../assets/service6.png";
import service7 from "../assets/service7.png";
import service8 from "../assets/service8.png";
import service9 from "../assets/service9.png";

const servicesData = [
  {
    img: service1,
    title: "Divine Shop",
    description:
      "Explore a range of divine and spiritual items, from idols to crystals, incense, and more — carefully curated to support your personal and spiritual well-being. Whether you're looking for items to enhance your home, gifts for loved ones, or tools for meditation and prayer, our Divine Shop offers a selection that resonates with your spiritual journey. Each product is chosen to help you connect more deeply with your faith and spirituality.",
  },
  {
    img: service2,
    title: "Matrimony",
    description:
      "Find your life partner through our trusted matrimony service, designed for those seeking meaningful, culturally rooted relationships. We match individuals based on values, beliefs, and spiritual compatibility. Our platform ensures a safe and respectful environment for all users, making it easier to connect with like-minded individuals who share your vision for a lifelong partnership.",
  },
  {
    img: service3,
    title: "Panchang Calendar",
    description:
      "Stay connected to your spiritual roots with our daily Panchang Calendar. Get accurate details about tithi, nakshatra, yoga, and auspicious muhurats — all in one place. Perfect for planning rituals, pujas, and important life events. Our Panchang is designed to help you align your daily activities with the cosmic energies, ensuring that you make the most of each day according to Vedic traditions.",
  },
  {
    img: service4,
    title: "Dating",
    description:
      "Explore meaningful connections with our dating service, designed for those seeking companionship and love. Our platform focuses on fostering genuine relationships through shared interests and values. Whether you're looking for friendship, romance, or something more, we provide a safe and welcoming environment to meet like-minded individuals. Join us to start your journey towards finding that special someone.",
  },
  {
    img: service5,
    title: "Kundli Matchingg",
    description:
      "Kundli matching is a traditional practice in Vedic astrology that involves comparing the birth charts of two individuals to assess their compatibility for marriage. This process evaluates various factors such as planetary positions, doshas (flaws), and overall harmony between the couple's horoscopes. By analyzing these elements, Kundli matching aims to predict the success and longevity of a relationship, helping families make informed decisions about marriage. It is a revered custom in many cultures, emphasizing the importance of astrological alignment in fostering a happy and prosperous union..",
  },
  {
    img: service6,
    title: "Talk to Astrologer",
    description:
      "Connect with our expert astrologers for personalized guidance and insights into your life. Whether you have questions about your career, relationships, health, or spiritual path, our experienced astrologers are here to help. They provide detailed readings based on your birth chart and current planetary positions, offering clarity and direction. Engage in meaningful conversations to understand the cosmic influences affecting your life and receive practical advice tailored to your unique situation.",
  },
  {
    img: service7,
    title: "Local Services",
    description:
      "Discover a range of local services tailored to your needs. From home repairs and cleaning to personal training and tutoring, our platform connects you with trusted professionals in your area. Whether you need assistance with daily tasks or specialized services, we ensure quality and reliability. Explore our offerings to find the right local service provider who can help enhance your lifestyle and meet your specific requirements..",
  },
  {
    img: service8,
    title: "Home and Land",
    description:
      "Discover our exclusive collection of home and land offerings, designed to enhance your living experience. From beautifully crafted homes that blend modern aesthetics with traditional values to prime land options in serene locations, we provide a range of choices to suit your lifestyle. Whether you're looking to build your dream home or invest in property, our expert team is here to guide you through every step of the process, ensuring you find the perfect match for your needs.",
  },
  {
    img: service9,
    title: "Job Opportunities",
    description:
      "Explore a wide range of job opportunities tailored to your skills and career aspirations. Whether you're looking for full-time positions, part-time roles, or freelance gigs, we connect you with top employers across various industries. Our platform offers resources to enhance your job search, including resume building tools, interview tips, and career advice. Stay updated with the latest job openings and take the next step in your professional journey with confidence.",
  },
];

const Services = () => {
  return (
    <div className="  mt-12">
      <h2 className="text-3xl font-bold text-center mb-12">Services</h2>

      <div className="space-y-12">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } items-center gap-8`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src={service.img}
                alt={service.title}
                className="rounded-2xl shadow-md w-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
