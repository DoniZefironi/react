import Header from "./Component/header/header";
import Footer from "./Component/footer/footer";
import Placecomponent from "./Component/placecomponent/placecomponent"
import { Route, Routes, useLocation } from "react-router-dom"
import NotFound from './Component/NotFound/notfound';
import Reserv from './Component/reserv/reserv';
import Boxfurniture from './Component/boxi/SectionFurniture';
import Food from './Component/food/food';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
    <Header />
    <main>
    <Routes>
    <Route path="/" element={<>
          <Placecomponent />
    </>
    } />
    <Route path="/placecomponent" element={<Placecomponent />} />
    <Route path="/reserv" element={<Reserv />} />
    <Route path="/cards" element={<Boxfurniture/>} />
    <Route path="/foods" element={<Food/>} />
    <Route path="*" element={<NotFound />} />
    </Routes>
    </main>
    <Footer />
    </>
  );
}

