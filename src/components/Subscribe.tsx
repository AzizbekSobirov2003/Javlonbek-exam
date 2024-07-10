"use client";
import Image from "next/image";
import { FormEvent } from "react";
import Pochta from "@/assets/icons/pochta.svg";
import ButtonMy from "./Button";

const Subscribe = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements[0] as HTMLInputElement;
    input.value = "";
  };

  return (
    <div className="mt-[200px] bg-[#E5E4EDFF] py-10 sm:mt-[100px]">
      <div className="mx-auto flex w-[90%] flex-col items-center justify-between md:flex-row">
        <div className="mb-5 md:mb-0">
          <Image src={Pochta} alt="pochta" />
        </div>
        <div className="w-full md:w-auto">
          <h1 className="text-[30px] font-[500] text-center md:text-left">
            Подпишитесь и будьте в курсе!
          </h1>
          <p className="text-[16px] font-[500] text-[#7A7687] text-center md:text-left">
            Акции, скидки, распродажи ждут!
          </p>
          <form
            onSubmit={handleSubmit}
            className="m-5 mt-[30px] flex flex-col items-center justify-between rounded-[24px] bg-white md:flex-row"
          >
            <input
              type="email"
              placeholder="Введите email"
              className="w-full rounded-3xl px-5 py-3 text-[14px] focus:outline-none md:w-[80%]"
            />
            <ButtonMy >Подписаться</ButtonMy>
          </form>
          <div className="mt-5 flex flex-col items-center justify-center md:flex-row">
            <input type="checkbox" className="mx-3" id="cheks" />
            <label htmlFor="cheks" className="text-center md:text-left">
              Я даю согласие на обработку своих персональных данных.
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
