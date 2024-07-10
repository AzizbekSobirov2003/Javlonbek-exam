"use client";
import Header from "@/components/header/Header";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import ChooseUs from "@/components/ChooseUs";
import ka1 from "@/assets/images/ka1.png";
import ka2 from "@/assets/images/ka2.png";

import AboutCompany from "@/components/About/AboutCompany";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbPage,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import Map from "@/components/map/Map";
import pod from "@/app/podklyuch/page";

const Basket = () => {
  const [favorites, setFavorites] = useState<UseType[]>([]);
  const [count, setCount] = useState(1);
  const [phone, setPhone] = useState("");
  const [isValid, setIsValid] = useState(true);

  interface UseType {
    id: number;
    title: string;
    img: StaticImageData;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const keys = Object.keys(localStorage);
        const favoriteItems = keys.map((key) => {
          if (key.startsWith("likeData_")) {
            return JSON.parse(localStorage.getItem(key) as string);
          }
          return null;
        });
        setFavorites(favoriteItems.filter((item) => item !== null) as []);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const removeFromFavorites = (itemId: number) => {
    localStorage.removeItem(`likeData_${itemId}`);
    setFavorites((prevFavorites) =>
      prevFavorites.filter((item: { id: number }) => item.id !== itemId),
    );
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isNumeric = /^\d+$/.test(value) || value === "";
    setPhone(value);
    setIsValid(isNumeric);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValid && phone !== "") {
      console.log("Phone submitted:", phone);
      setPhone("");
    }
  };

  const handleDivClick = () => {
    // router.push("/@/app/podklyuch/page");
  };

  return (
    <div className="bacround">
      <Header />
      <div className="mx-auto mt-8 w-[90%]">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/">Главная</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Кабинеты под ключ</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <h1 className="m-20 text-[48px]">Кабинеты под ключ</h1>
      <div className="m-5 flex items-center justify-center gap-5">
        <Link href="/podklyuch">
          <div
            className="h-[389px] w-[650px] cursor-pointer rounded-lg bg-white transition-transform duration-300 hover:scale-105 hover:transform hover:shadow-lg"
            onClick={handleDivClick}
          >
            <img src={ka1.src} alt="ka1" className="" />
            <p className="m-4">Реанимация</p>
          </div>
        </Link>
        <div
          className="h-[389px] w-[650px] cursor-pointer rounded-lg bg-white transition-transform duration-300 hover:scale-105 hover:transform hover:shadow-lg"
          onClick={handleDivClick}
        >
          <img src={ka2.src} alt="ka2" className="" />
          <p className="m-4">Реанимация</p>
        </div>
      </div>
      <div className="m-5 flex items-center justify-center gap-5">
        <div
          className="h-[389px] w-[650px] cursor-pointer rounded-lg bg-white transition-transform duration-300 hover:scale-105 hover:transform hover:shadow-lg"
          onClick={handleDivClick}
        >
          <img src={ka2.src} alt="ka2" className="" />
          <p className="m-4">Реанимация</p>
        </div>
        <div
          className="h-[389px] w-[650px] cursor-pointer rounded-lg bg-white transition-transform duration-300 hover:scale-105 hover:transform hover:shadow-lg"
          onClick={handleDivClick}
        >
          <img src={ka1.src} alt="ka1" className="" />
          <p className="m-4">Реанимация</p>
        </div>
      </div>
      <div className="m-5 flex items-center justify-center gap-5">
        <div
          className="h-[389px] w-[650px] cursor-pointer rounded-lg bg-white transition-transform duration-300 hover:scale-105 hover:transform hover:shadow-lg"
          onClick={handleDivClick}
        >
          <img src={ka2.src} alt="ka2" className="" />
          <p className="m-4">Реанимация</p>
        </div>
        <div
          className="h-[389px] w-[650px] cursor-pointer rounded-lg bg-white transition-transform duration-300 hover:scale-105 hover:transform hover:shadow-lg"
          onClick={handleDivClick}
        >
          <img src={ka1.src} alt="ka1" className="" />
          <p className="m-4">Реанимация</p>
        </div>
      </div>
      <div className="m-5 flex items-center justify-center gap-5">
        <div
          className="h-[389px] w-[650px] cursor-pointer rounded-lg bg-white transition-transform duration-300 hover:scale-105 hover:transform hover:shadow-lg"
          onClick={handleDivClick}
        >
          <img src={ka2.src} alt="ka2" className="" />
          <p className="m-4">Реанимация</p>
        </div>
        <div
          className="h-[389px] w-[650px] cursor-pointer rounded-lg bg-white transition-transform duration-300 hover:scale-105 hover:transform hover:shadow-lg"
          onClick={handleDivClick}
        >
          <img src={ka1.src} alt="ka1" className="" />
          <p className="m-4">Реанимация</p>
        </div>
      </div>
      <div
        className="m-5 ml-[103px] w-[650px] cursor-pointer gap-5"
        onClick={handleDivClick}
      >
        <div className="h-[389px] w-[650px] rounded-lg bg-white transition-transform duration-300 hover:scale-105 hover:transform hover:shadow-lg">
          <img src={ka1.src} alt="ka1" className="" />
          <p className="m-4">Реанимация</p>
        </div>
      </div>

      <ChooseUs />
      <br />
      <br />
      <br />
      <div className="flex items-center justify-center">
        <div className="flex h-[202px] w-[1309px] rounded-lg bg-white">
          <h1 className="m-5 w-[416px] text-[30px]">
            Закажите у нас комплексное оснащение
          </h1>
          <form
            className="relative relative bottom-[-60px] ml-[230px] w-[417px]"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              id="phone"
              className={`peer h-[50px] w-full rounded-[10px] px-4 placeholder-transparent focus:outline-none ${
                isValid ? "" : "border-red-500"
              }`}
              value={phone}
              onChange={handlePhoneChange}
              // placeholder="Ваш телефон"
            />
            <label
              className={`absolute left-4 -translate-y-1/2 transform text-[16px] text-gray-400 transition-all 
                peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-500
              `}
              htmlFor="phone"
            >
              Ваш телефон
            </label>
            {!isValid && (
              <p className="mt-1 text-xs text-red-500">
                Пожалуйста, введите только цифры.
              </p>
            )}
            <hr
              className="border-t-1 relative right-[40px] mt-2 border-gray-400 text-[#D5D1E1]"
              style={{ width: "570px" }}
            />
            <div className="flex w-[650px] gap-10">
              <button
                type="submit"
                className="m-3 h-[41px] w-[134px] rounded-[50px] bg-teal-600 text-white"
              >
                Отправить
              </button>
              <p className="m-3 w-[406px] text-[12px]">
                Нажимая «Отправить», я соглашаюсь c обработкой персональных
                данных на условиях Политики конфиденциальности.
              </p>
            </div>
          </form>
        </div>
      </div>
      <AboutCompany />
      <Map />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Basket;
