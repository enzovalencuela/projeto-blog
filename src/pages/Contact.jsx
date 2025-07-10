import { useContext } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/ContactForm/ContactForm";
import Banner from "../components/Banner/Banner";

// CONTEXTS
import { AppContext } from "../contexts/AppContext";

function Projects() {
  const appContext = useContext(AppContext);

  return (
    <>
      <Header />
      <Banner
        title={appContext.languages[appContext.language].menu.contact}
        image="contact.jpg"
      />
      <div className="container">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}

export default Projects;
