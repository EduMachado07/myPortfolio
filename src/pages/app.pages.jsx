import imgPerfil from "../assets/perfil.jpg";

// import { Button } from "@/components/ui/button";

import { Projects } from "@/store/projects.store";

import { Link } from "react-router-dom";
import BtnRedirect from "@/components/btnRedirect";

function App() {
  return (
    <>
      {/* INTRODUCTION */}
      <section className="bg-card-light rounded-lg shadow-md flex max-sm:flex-col overflow-hidden">
        {/* img */}
        <div className="w-full sm:w-1/3 h-100 md:h-120">
          <img src={imgPerfil} alt="" className="w-full h-full object-cover" />
        </div>
        <main className="flex-1 px-10 py-14 max-md:p-4 flex flex-col justify-between">
          <section className="flex flex-col gap-2.5">
            <p className="text-sm inter-regular">
              Olá, meu nome é Eduardo Machado!
            </p>
            <h1 className="inter-extrabold text-xl text-pretty bg-gradient-to-l from-[#4da6ff] via-[#0077ff] to-[#005fcc] bg-clip-text text-transparent">
              Desenvolvedor Full Stack Apaixonado Pela Tecnologia
            </h1>
            <p className="text-lg lato-regular">Sou um desenvol</p>
          </section>
          <div className="flex justify-end">
            <BtnRedirect link="/" content="Saber Mais" />
          </div>
        </main>
      </section>

      {/* PROJECTS */}
      <section className="flex flex-col gap-5 ">
        <div>
          <h1 className="capitalize text-primary text-xl inter-regular text-pretty">
            Meus Projetos
          </h1>
          <hr className="h-1 w-18 bg-primary rounded-md" />
        </div>
        {/* list projects */}
        <main className="flex flex-wrap gap-6">
          {Projects.slice(0, 2).map((item, index) => (
            <section
              key={index}
              className="bg-card-light rounded-lg shadow-md md:w-[calc(50%-12px)] overflow-hidden"
            >
              {/* img project */}
              <div className="w-full md:h-65 relative group overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <a
                  href={item.linkProject}
                  className="bg-zinc-950/60 absolute top-0 h-full w-full flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-8 stroke-amber-50"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
              </div>

              {/* description */}
              <div className="py-4 px-5 flex flex-col gap-1.5">
                {/* technologies */}
                <p className="text-sm lato-semibold">
                  {item.technologies.join(", ")}
                </p>
                {/* title */}
                <h1 className="capitalize text-primary text-xl inter-extrabold text-pretty">
                  {item.title}
                </h1>
                {/* about */}
                <p className="text-base lato-regular line-clamp-3">
                  {item.about}
                </p>
                {/* type project | page link */}
                <div className="w-full flex items-center justify-between mt-1.5">
                  <p className="py-0.5 px-2 bg-zinc-300/60 rounded-sm inter-regular">
                    {item.type}
                  </p>
                  <BtnRedirect link="/" content="Saber Mais" />
                </div>
              </div>
            </section>
          ))}
        </main>

        <div className="group">
          <BtnRedirect link="/" content="Ver Mais Projetos" />
        </div>
      </section>
    </>
  );
}

export default App;
