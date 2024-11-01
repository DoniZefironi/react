import Header from "./Component/header/header";
import Footer from "./Component/footer/footer";
import Placecomponent from "./Component/placecomponent/placecomponent"
import { Route, Routes, useLocation } from "react-router-dom"
import image from './Component/image/punch.png';
import NotFound from './Component/NotFound/notfound';

export default function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
    <Header logo={image} />
    <main>
    <Routes>
    <Route path="/" element={<>
          <Placecomponent />
    </>
    } />
    <Route path="/placecomponent" element={<Placecomponent />} />
    <Route path="*" element={<NotFound />} />
    </Routes>
    </main>
    <Footer />
    </>
  );
}

