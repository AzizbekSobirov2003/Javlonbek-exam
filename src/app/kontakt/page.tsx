"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/header/HeaderCatalog";
import Image, { StaticImageData } from "next/image";
import loc from "@/assets/images/loc.png";
import time from "@/assets/images/time.png";
import call from "@/assets/images/call.png";
import mail from "@/assets/images/mail.png";
import sot from "@/assets/images/sot.png";
import Map from "@/components/map/Map";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";

// Map komponentini dynamic import qilish

const Basket = () => {
  const [favorites, setFavorites] = useState<UseType[]>([]);
  const [isMounted, setIsMounted] = useState(false); // Komponentni faqat mijoz tomonida yuklash uchun

  interface UseType {
    id: number;
    title: string;
    img: StaticImageData;
  }

  useEffect(() => {
    setIsMounted(true); // Komponentni yuklanganini bildirish uchun
    const fetchData = async () => {
      try {
        const keys = Object.keys(localStorage);
        const favoriteItems = keys.map((key) => {
          if (key.startsWith("likeData_")) {
            return JSON.parse(localStorage.getItem(key) as string);
          }
          return null;
        });
        setFavorites(
          favoriteItems.filter((item) => item !== null) as UseType[],
        );
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const removeFromFavorites = (itemId: number) => {
    localStorage.removeItem(`likeData_${itemId}`);
    setFavorites((prevFavorites) =>
      prevFavorites.filter((item) => item.id !== itemId),
    );
  };

  if (!isMounted) {
    return null; // Komponent server tomonda render qilinmasligi uchun
  }

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
              <BreadcrumbPage>Контакты</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <h1 className="relative left-[70px] m-10 w-[600px] text-[48px]">
        Контакты
      </h1>
      <div className="m-20 h-[652px] w-[650px] rounded-lg bg-white">
        <p className="font-madium m-4 p-4 text-[30px] ">
          ООО Глобал Медикал Трейд
        </p>
        <p className="ml-4 flex gap-2 text-[16px] text-gray-700">
          {" "}
          <img className="h-[15px] w-[11px]" src={loc.src} alt="loc" />
          Юридический адрес:
        </p>
        <p className="font-madium ml-8 ">
          Россия, г. Москва, ул. Докукина, 8, стр. 2
        </p>
        <br />
        <p className="ml-4 flex gap-2 text-[16px] text-gray-700">
          {" "}
          <img className="h-[15px] w-[11px]" src={loc.src} alt="loc" />
          Фактический адрес:
        </p>
        <p className="font-madium ml-8 ">
          Россия, г. Москва, ул. Докукина, 8, стр. 2
        </p>
        <br />
        <p className="ml-4 flex gap-2 text-[16px] text-gray-700">
          {" "}
          <img className="h-[15px] w-[15px]" src={time.src} alt="timevvd" />
          Режим работы:
        </p>
        <p className="font-madium ml-8  w-[156px]">
          Россия, г. Москва, ул. Докукина, 8, стр. 2
        </p>
        <br />
        <p className="ml-8 font-semibold">
          Звоните. Звонки по России бесплатны:{" "}
        </p>
        <br />
        <p className="ml-4 flex gap-2 text-[16px] text-gray-700">
          {" "}
          <img className="h-[15px] w-[15px]" src={call.src} alt="call" />
          Телефоны:
        </p>
        <p className="font-madium ml-8  flex">
          8-800-000-00-00 .... +7-000-000-00-00 .... +7-495-000-00-00
        </p>
        <br />
        <p className="ml-4 flex gap-2 text-[16px] text-gray-700">
          {" "}
          <img className="h-[11px] w-[15px]" src={mail.src} alt="mail" />
          Пишите:{" "}
        </p>
        <p className="font-madium ml-8  flex">info@mail.ru</p>
        <br />
        <p className="font-madium ml-8  flex">Реквизиты: </p>
        <br />
        <div className="flex">
          <div>
            <p className="ml-8 flex gap-2 text-[16px] text-gray-700">ИНН</p>
            <p className="font-madium ml-8  flex">9717039181</p>
          </div>
          <div>
            <p className="ml-8 flex gap-2 text-[16px] text-gray-700">ОГРН</p>
            <p className="font-madium ml-8  flex">1167746796986</p>
          </div>
          <div className=" relative bottom-[50px] left-[50px] items-center justify-center">
            <p className="font-madium ml-8 flex text-[18px] ">Мы в соцсетях</p>
            <br />
            <img className=" ml-[30px]" src={sot.src} alt="sot" />
          </div>
        </div>
      </div>
      <Map />

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Basket;
