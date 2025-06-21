import About from "./components/About"
import Banner from "./components/Banner"
import Choose from "./components/Choose"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Review from "./components/Review"
import Services from "./components/Services"



function App() {
  // #FE8164

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <Banner />
        <About />
        <Choose />
        <Services />
        <Review />
      </div>
      <Footer />
    </>
  );
}

export default App
