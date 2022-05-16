import Header from "./Components/Header/Header";
import SliderMain from "./Components/SliderMain/SliderMain";
import Populer from "./Components/Populer/Populer";
import Free from "./Components/Free/Free";
import Fragman from "./Components/Fragman/Fragman";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="bg-gray-200">
        <Header />
        <SliderMain />
        <div className="md:container md:mx-auto">
        <Populer />
        <Free />
        <Fragman />
        </div>
        <Footer />
    </div>
  );
}

export default App;
