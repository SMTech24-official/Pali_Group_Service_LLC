import "./App.css";
import About from "./components/About";
import Awards from "./components/Awards";
import Banner from "./components/Banner";
import Blog from "./components/Blog";
// import CaseStudy from "./components/CaseStudy";
import Choose from "./components/Choose";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
// import Faq from "./components/Faqs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Service from "./components/Service";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Awards/>
      <Choose />
      <Service />
      <About/>
      {/* <CaseStudy/> */}
      <Faq />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
