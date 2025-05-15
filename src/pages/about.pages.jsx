import imgPerfil from "../assets/perfil.jpg";
import imgMicrocamp from "../assets/img_Microcamp.png";

import Title from "@/components/title";
import BtnRedirect from "@/components/btnRedirect";

import { AboutMe } from "@/store/aboutMe.store";

const About = () => {
  return (
    <>
      <section className="flex-1 max-md:p-4 flex flex-col justify-between">
        <section className="flex px-4 flex-col gap-3">
          <div className="flex gap-4 items-center">
            <div className="rounded-full size-25 overflow-hidden">
              <img
                src={imgPerfil}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-lg lato-semibold">
                Olá, meu nome é Eduardo Machado !
              </p>
              <Title
                font={"text-3xl"}
                title={"Desenvolvedor Full Stack Apaixonado Pela Tecnologia"}
              />
            </div>
          </div>
          <p className="text-lg inter-regular text-justify">
            Tenho 18 anos e sou um Desenvolvedor Full Stack apaixonado por
            tecnologia e pelo seu impacto na vida das pessoas. Gosto de criar
            projetos com foco em experiências de usuário dinâmicas, com
            interfaces limpas, modernas e funcionais. Desde o primeiro contato
            com o JavaScript, me encantei pela linguagem e venho explorando cada
            vez mais seu potencial no desenvolvimento de soluções.
          </p>
          <p className="text-lg inter-regular text-justify max-sm:hidden">
            Atualmente, estou em busca da minha primeira oportunidade
            profissional na área, onde eu possa aplicar meus conhecimentos,
            aprender com novos desafios e contribuir com projetos de impacto.
          </p>

          <hr className="my-0.5 border-[#1a1a1a]" />

          <section className="flex flex-wrap gap-5 px-2">
            {AboutMe.map((item, index) => (
              <div key={index} className="w-[calc(33%-14px)] max-sm:w-full">
                <Title font={"text-sm"} title={item.name} />
                <p className="text-base inter-regular text-nowrap">
                  {item.value}
                </p>
              </div>
            ))}
          </section>
        </section>
      </section>
      <h1 className="capitalize text-primary text-xl lato-semibold text-pretty -mb-1">
        Minha Formação
      </h1>
      <section className="">
        <div className="flex gap-10">
          <div className="rounded-lg w-50 overflow-hidden">
            <img
              src={imgMicrocamp}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <p className="w-2/3 inter-regular text-lg">
            Minha jornada na tecnologia começou cedo, com um curso de Design de
            Games entre 2019 e 2021, onde despertei meu interesse pela lógica e
            pela criação de experiências interativas.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
