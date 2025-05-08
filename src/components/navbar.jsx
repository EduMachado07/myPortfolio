import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Link } from "react-router-dom";

const links = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Projetos",
    route: "/",
  },
  {
    name: "Sobre",
    route: "/about",
  },
  {
    name: "Dicas",
    route: "/",
  },
  {
    name: "Contato",
    route: "/",
  },
];

function Navbar() {
  return (
    <main>
      <section className="w-full flex justify-between items-center py-3 lg:px-[12vw] px-[5vw]">
        <div className="w-12 h-12 rounded-full shadow-lg">
          <img src="" alt="" />
        </div>
        {/* NAVBAR DESKTOP */}
        <section className="flex gap-4 max-md:hidden">
          {links.map((item, index) => (
            <Link className="lato-semibold" key={index} to={item.route}>
              {item.name}
            </Link>
          ))}
        </section>
        {/* MENU MOBILE */}
        <Sheet>
          <SheetTrigger className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="inter-regular">Menu</SheetTitle>
              <SheetDescription></SheetDescription>
              <section className="flex flex-col gap-5">
                {links.map((item, index) => (
                  <Link className="lato-regular" key={index} to={item.route}>
                    {item.name}
                  </Link>
                ))}
              </section>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </section>
    </main>
  );
}

export default Navbar;
