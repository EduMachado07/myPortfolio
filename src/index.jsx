import Navbar from "./components/navbar";
import Footer from "./components/footer/footer";

import { Outlet } from "react-router";

function Index() {
  return (
    <main className="w-full bg-back-light flex flex-col gap-6">
      <Navbar />
      {/* PAGES */}
      <main className="flex flex-col gap-10 px-[6vw] lg:px-[12vw]">
        <Outlet />
      </main>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}

export default Index;
