import Header from "./Component/header/header";
import Footer from "./Component/footer/footer";
import Placecomponent from "./Component/placecomponent/placecomponent"
import { Route, Routes, useLocation } from "react-router-dom"
import NotFound from './Component/NotFound/notfound';
import Reserv from './Component/reserv/reserv';
import Boxfurniture from './Component/boxi/SectionFurniture';

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
    <Route path="*" element={<NotFound />} />
    </Routes>
    </main>
    <Footer />
    </>
  );
}

