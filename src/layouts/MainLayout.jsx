import AboveFooter from "../components/AboveFooter";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <AboveFooter />
      <Footer />
    </>
  );
}

export default MainLayout;
