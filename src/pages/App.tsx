import Navbar from "../component/Navbar";
import Hero from "./Hero";
import Venue from "./Venue";
import CountDown from "./CountDown";
import Location from "./Location";
import Chat from "./Chat";

import Background from "../assets/asset/Background.jpg";

const App = () => {
  return (
    <div className={`relative z-0 bg-cover bg-center bg-fixed bg-no-repeat`}
         style={{ backgroundImage: `url(${Background})` }}>
      <div className="container mx-auto">
        <Navbar />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-12">
          <Hero />
        </div>
        <div className="mt-12">
          <Venue />
        </div>
        <div className="mt-12">
          <CountDown />
        </div>
        <div className="mt-12">
          <Location />
        </div>
        <div className="mt-12">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default App;
