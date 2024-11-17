import "./styles/style.scss";
import HeaderWrapper from "./components/header/HeaderWrapper";
import Brands from "./components/main/brands/Brands";
import AppFeatures from "./components/main/features/AppFeatures";
import HowWork from "./components/main/HowWork";
import Transfer from "./components/main/transfer/Transfer";
import Testimonials from "./components/main/testimonials/Testimonials";
import FAQ from "./components/main/faq/FAQ";
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
        <Transfer />
        <Testimonials />
        <FAQ />
        <Subscription />
      </main>
      <Footer />
    </>
  );
}

export default App;
