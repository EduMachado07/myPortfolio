import React, { useRef } from "react";

// COMPONENTES SHADCN
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { IconsConnect, SocialMedia } from "./store";

const Footer = () => {
  const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  if (!ACCESS_KEY) {
    throw new Error(
      "Chave de acesso não está definida nas variáveis de ambiente."
    );
  }

  const formRef = useRef(null);

  const onSubmitForm = async (event) => {
    event.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      formRef.current.reset();
    } catch (error) {
      console.log("deu ruim");
    }
  };

  return (
    <main className="bg-[#004BA0] mt-10 max-md:px-6 px-28 py-9 w-full max-md:flex-col flex justify-between max-md:gap-8">
      {/* INFO */}
      <section className="flex flex-col gap-6 max-md:w-full">
        {/* CONNECT */}
        <section className="flex flex-col gap-4">
          <h1 className="text-slate-50 font-semibold">Vamos nos conectar</h1>
          {/* ICONS */}
          {IconsConnect.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="bg-[#0077FF] rounded-full p-2.5 shadow-2xl">
                {item.icon}
              </div>
              {item.text}
            </div>
          ))}
        </section>

        {/* SOCIAL MEDIA */}
        <section className="flex flex-col gap-4">
          <h1 className="text-slate-50 font-semibold">
            Acompanhe o meu trabalho
          </h1>
          {/* ICONS */}
          <section className="flex gap-5">
            {SocialMedia.map((item, index) => (
              <a
                key={index}
                target="_blank"
                href={item.href}
                className="bg-[#0077FF] size-11 p-2 flex justify-center items-center rounded-full bg-colorTertiary shadow-xl cursor-pointer hover:scale-110 border-transparent border-2 hover:border-slate-50 transition-all"
              >
                {item.content}
              </a>
            ))}
          </section>
        </section>
      </section>

      <hr className="border md:hidden" />

      {/* FORMULARIO EMAIL CONTATO */}
      <section className="flex flex-col gap-2 max-md:w-full w-2/4">
        <h1 className="text-slate-50 font-semibold text-pretty max-md:text-justify">
          Possui um problema, tem uma ideia para ser desenvolvida, envia uma
          mensagem para o meu email. Vamos construir algo juntos!!
        </h1>

        <form
          ref={formRef}
          className="w-full flex flex-col items-start gap-5 mt-2"
          onSubmit={onSubmitForm}
        >
          <Input
            className="bg-zinc-200"
            type="text"
            name="name"
            placeholder="nome completo"
            autoComplete="off"
            required
          />
          <Input
            className="bg-zinc-200"
            type="text"
            name="email"
            placeholder="seu email"
            autoComplete="off"
            required
          />
          <Textarea
            className="bg-zinc-200 h-24 max-h-24"
            name="message"
            placeholder="assunto"
            required
          />
          <div className="w-full flex justify-end">
            <Button
              className="max-sm:w-full text-slate-50 border border-slate-50 bg-transparent hover:bg-blue-950"
              size={"lg"}
              type="submit"
            >
              Enviar mensagem
            </Button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Footer;
