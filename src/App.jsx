import HeaderWrapper from "./components/header/HeaderWrapper";
import Brands from "./components/main/brands";
import AppFeatures from "./components/main/AppFeatures";
import HowWork from "./components/main/HowWork";
import Testimonials from "./components/main/Testimonials";
import FAQ from "./components/main/FAQ";
import Subscription from "./components/main/Subscription";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
        <HeaderWrapper />
      <main>
        <Brands />
        <AppFeatures />
        <HowWork />
        <Testimonials />
        <FAQ />
        <Subscription />
      </main>
      <Footer />
    </>
  );
}

export default App;
