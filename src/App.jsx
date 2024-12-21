import "./App.css";
import Banner from "./components/Banner";
import Blog from "./components/Blog";
import Choose from "./components/Choose";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Service from "./components/Service";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Choose />
      <Service />
      <Faq />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
