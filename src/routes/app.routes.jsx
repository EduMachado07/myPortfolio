import Navbar from "./components/reusable/navbar";

import { Outlet } from "react-router";

function App() {
  return (
    <main className="w-full bg-colorBack px-5">
      <Navbar />

      <Outlet />
    </main>
  );
}

export default App;
