import React from "react";
import Header from "./Header";
import { motion } from "framer-motion";

function MainDiv() {
  return (
    <div>
      <Header />
      <div className="mt-28 mr-52 ml-24 max-sm:flex max-sm:flex-col max-sm:mx-5">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col px-5 mt-3.5 font-bold max-md:mt-10 max-md:max-w-full">
              <div className="text-6xl tracking-tighter leading-[78px] text-zinc-800 max-md:max-w-full max-md:text-4xl max-md:leading-[58px]">
                Gestión de talento humano para empresas
              </div>
              <div className="mt-11 text-base font-medium leading-8 text-neutral-900 text-opacity-60 max-md:mt-10 max-md:max-w-full">
                Soluciones y asesoría para empresas para reclutar el talento
                humano que necesitan. <br />
              </div>
              <div className="flex gap-5 px-5 pt-7 pb-7 mt-11 w-72 max-w-full text-lg tracking-tight leading-8 text-white bg-indigo-600 rounded-lg max-md:pl-5 max-md:mt-10">
                <div className="flex-auto">Contratar W2</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/fcf998976eb1ef48a21c2a5ececac3cc799cb96516821aee5a75fed400ec063a?apiKey=6be6dd5b90fb4db2b9632e2f5aba57f6&"
                  className="shrink-0 self-start my-auto aspect-[0.43] w-[15px] max-sm:w-[15px]"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-row grow px-5 max-md:mt-10 max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/11235a8e98dbed6ed006977bd4c9b6b0efc18b1723ab647dad4b0bd76c67d096?apiKey=6be6dd5b90fb4db2b9632e2f5aba57f6&"
                className="shrink-0 my-auto w-14 aspect-[0.68]"
              />
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ed753f77f17cdc8e523dfcd5be1f43299c4a16501fa820ae967cc3ba7514dc42?apiKey=6be6dd5b90fb4db2b9632e2f5aba57f6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed753f77f17cdc8e523dfcd5be1f43299c4a16501fa820ae967cc3ba7514dc42?apiKey=6be6dd5b90fb4db2b9632e2f5aba57f6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed753f77f17cdc8e523dfcd5be1f43299c4a16501fa820ae967cc3ba7514dc42?apiKey=6be6dd5b90fb4db2b9632e2f5aba57f6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed753f77f17cdc8e523dfcd5be1f43299c4a16501fa820ae967cc3ba7514dc42?apiKey=6be6dd5b90fb4db2b9632e2f5aba57f6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed753f77f17cdc8e523dfcd5be1f43299c4a16501fa820ae967cc3ba7514dc42?apiKey=6be6dd5b90fb4db2b9632e2f5aba57f6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed753f77f17cdc8e523dfcd5be1f43299c4a16501fa820ae967cc3ba7514dc42?apiKey=6be6dd5b90fb4db2b9632e2f5aba57f6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed753f77f17cdc8e523dfcd5be1f43299c4a16501fa820ae967cc3ba7514dc42?apiKey=6be6dd5b90fb4db2b9632e2f5aba57f6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed753f77f17cdc8e523dfcd5be1f43299c4a16501fa820ae967cc3ba7514dc42?apiKey=6be6dd5b90fb4db2b9632e2f5aba57f6&"
                className="grow shrink-0 mx-2.5 aspect-[1.14] basis-0 w-fit max-md:max-w-full"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d42741c09f0215be189a71b6495bdcc80f89ae00870acd7366d6733c63888d8?apiKey=6be6dd5b90fb4db2b9632e2f5aba57f6&"
                className="shrink-0 my-auto w-14 aspect-[0.68]"
              />
            </div>
            <div className="box-border relative shrink-0 mt-5 h-auto text-center">
              <p>Head Hunting</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainDiv;
