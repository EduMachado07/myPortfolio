import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function Navbar() {
  return (
    <main>
      <section className="w-full flex justify-between py-3 md:px-20 px-8">
        <div className="w-12 h-12 bg-red-500">
          <img src="" alt="" />
        </div>
        {/* NAVBAR DESKTOP */}
        <section className="flex gap-4 max-md:hidden">
          <a href="">Projetos</a>
          <a href="">Sobre</a>
          <a href="">Configurações</a>
          <a href="">Contato</a>
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
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription></SheetDescription>
              <section className="flex flex-col gap-5">
                <a href="">Projetos</a>
                <a href="">Sobre</a>
                <a href="">Configurações</a>
                <a href="">Contato</a>
              </section>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </section>
    </main>
  );
}

export default Navbar;
