import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import AboutPage from "./pages/AboutPage";
import WorksPage from "./pages/WorksPage";
import TermsAndServices from "./pages/TermsAndServices";
import Cart from "./pages/Card";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AllCategoriesPage from "./pages/AllCategoriesPage";
import ContactPage from "./pages/ContactPage";
import AllProductsPage from "./pages/AllProductsPage";
import Login from "./pages/Login";
import Sign from "./pages/Sign";
import Forg from "./pages/Forg";
import Pay from "./pages/Pay";
import Forge from "./pages/Forge";
import BuyAccounts from "./pages/BuyAccounts";
import SellAccounts from "./pages/SellAccounts";
import TopUp from "./pages/TopUp";
import Topp from "./pages/Topp";
import Marketplace from "./pages/Marketplace";
import OffersAndDeals from "./pages/OffersAndDeals";
import Dashboard from "./pages/Dashboard";
const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
           <Route path="/topp" element={<Topp />}></Route>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/all-works" element={<WorksPage />} />
          <Route path="/terms" element={<TermsAndServices />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/allCategories" element={<AllCategoriesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/all-products" element={<AllProductsPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/forg" element={<Forg />} />
           <Route path="/pay" element={<Pay />} />
          <Route path="/forge" element={<Forge />} />           
          <Route path="/buy-accounts" element={<BuyAccounts />} />
          <Route path="/sell-accounts" element={<SellAccounts />} />
          <Route path="/top-up" element={<TopUp />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/offers&deals" element={<OffersAndDeals />} />
             <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Route>
    )
  );

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="bg-black h-[100vh] flex justify-center items-center">
          <BeatLoader size={50} color="#2563EB" />
        </div>
      ) : (
        <RouterProvider router={router} />
      )}
    </div>
  );
}

export default App;
