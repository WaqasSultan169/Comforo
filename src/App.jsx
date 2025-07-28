import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AdminLogin from './pages/AddProduct/AdminLogin';
import AddProduct from './pages/AddProduct/AddProduct';
import CategoryPage from "./pages/collections/CategoryPage";
import NightWear from "./pages/collections/NightWear";
import BodySharper from "./pages/collections/BodySharper";
import Camisoles from "./pages/collections/Camisoles";
import EmbroideredBra from "./pages/collections/bras/EmbroideredBra";
import CottonBra from "./pages/collections/bras/CottonBra";
import DoublePaddedBra from "./pages/collections/bras/DoublePaddedBra";
import FoamBra from "./pages/collections/bras/FoamBra";
import SinglePaddedBra from "./pages/collections/bras/SinglePaddedBra";
import NetBra from "./pages/collections/bras/NetBra";
import NursingBra from "./pages/collections/bras/NursingBra";
import SportsBra from "./pages/collections/bras/SportsBra";
import LaceBra from "./pages/collections/bras/LaceBra";
import Bralette from "./pages/collections/bras/Bralette";
import CottonPanties from "./pages/collections/panties/CottonPanties";
import PantiesPack from "./pages/collections/panties/PantiesPack";
import PeriodPanties from "./pages/collections/panties/PeriodPanties";
import ProductDetails from "./pages/ProductDetails";
import Bras from "./pages/collections/bras";
import Panties from "./pages/collections/panties";
import Lingerie from "./pages/collections/lingerie";
import BrasPanties from "./pages/collections/bras_panties";
import Accessories from "./pages/collections/Accessories";
import Blouse from "./pages/collections/blouse";
import CartPage from "./pages/CartPage";
import ShippingPolicy from "./pages/policies/ShippingPolicy";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AddProduct />} />
          <Route path="/checkout" element={<CheckoutPage />} />

        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          
          <Route path="/collections/:categoryName" element={<CategoryPage />} />
          
          {/* Bras */}
          <Route path="/collections/Bras" element={<Bras />} />
          <Route path="/collections/embroidered-bra" element={<EmbroideredBra />} />
          <Route path="/collections/cotton-bra" element={<CottonBra />} />
          <Route path="/collections/double-padded-bra" element={<DoublePaddedBra />} />
          <Route path="/collections/foam-bra" element={<FoamBra />} />
          <Route path="/collections/single-padded-bra" element={<SinglePaddedBra />} />
          <Route path="/collections/net-bra" element={<NetBra />} />
          <Route path="/collections/nursing-bra" element={<NursingBra />} />
          <Route path="/collections/sports-bra" element={<SportsBra />} />
          <Route path="/collections/lace-bra" element={<LaceBra />} />
          <Route path="/collections/bralette" element={<Bralette />} />

          {/* Panties */}
          <Route path="/collections/panties" element={<Panties />} />
          <Route path="/collections/cotton-panties" element={<CottonPanties />} />
          <Route path="/collections/panties-pack" element={<PantiesPack />} />
          <Route path="/collections/period-panties" element={<PeriodPanties />} />

          {/* Other Pages */}
          <Route path="/collections/night-wear" element={<NightWear />} />
          <Route path="/collections/body-sharper" element={<BodySharper />} />
          <Route path="/collections/camisoles" element={<Camisoles />} />
          <Route path="/collections/Lingerie" element={<Lingerie />} />
          <Route path="/collections/bras_panties" element={<BrasPanties />} />
          <Route path="/collections/accessories" element={<Accessories />} />
          <Route path="/collections/blouse" element={<Blouse />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policies/shipping-policy" element={<ShippingPolicy />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
