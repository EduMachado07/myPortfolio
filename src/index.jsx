import Navbar from "./components/reusable/navbar";

function Index() {
  return (
    <main className="w-full h-screen bg-colorBack px-5">
      {/* <Navbar /> */}

      {/* <section className="border border-colorBorder rounded shadow-md flex flex-col">
        <div className="w-full bg-red-500 h-96">
          <img src="" alt="" className="w-full object-cover" />
        </div>
        <div className="p-4 flex flex-col gap-2.5">
          <p className="text-sm">Olá, meu nome é Eduardo Machado!</p>
          <h1 className="capitalize text-colorPrimary text-xl font-bold text-pretty">
            Desenvolvedor Full-Stack, Apaixonado Pela Tecnologia
          </h1>
          <p className="text-lg">Sobre mim...</p>
        </div>
      </section> */}

      <h1 className="capitalize text-colorPrimary text-xl font-bold text-pretty">
        Meus Projetos
      </h1>
      <section className="border border-colorBorder rounded shadow-md flex flex-col">
        <div className="w-full bg-red-500 h-45">
          <img src="" alt="" className="w-full object-cover" />
        </div>
        <div className="p-4 flex flex-col gap-1">
          <p className="text-sm">React, Tailwind e Vite</p>
          <h1 className="capitalize text-colorPrimary text-xl font-bold text-pretty">
            Fin x
          </h1>
          <p className="text-base">Sobre o projeto...</p>
          <div className="w-full flex justify-between">
            <p>2025</p>
            <button className="flex items-center gap-2">
              Ver Projeto
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 -rotate-45"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Index;
