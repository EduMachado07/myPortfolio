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

function Index() {
  return (
    <main className="w-full h-screen bg-colorBack">
      <section className="w-full flex justify-between py-3 px-20">
        <div className="w-12 h-12 bg-red-500">
          <img src="" alt="" />
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            {/* MEUS PROJETOS */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Meus Projetos</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {/* FORMAÇÃO */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Formação Acadêmica</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </section>
    </main>
  );
}

export default Index;
