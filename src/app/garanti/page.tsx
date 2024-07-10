"use client";
import Header from "@/components/header/Header";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import YouUs from "@/components/youUs"; 

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import Map from "@/components/map/Map";

const Basket = () => {
  const [favorites, setFavorites] = useState<UseType[]>([]);
  const [count, setCount] = useState(1);

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

  const dataLength = favorites.length;

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
              <BreadcrumbPage>Гарантии</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div>
        <h1 className="m-20 text-[48px] ">Гарантии</h1>
        <p className="ml-20 w-[650px] text-[16px]">
          Регулярное сервисное обслуживание медицинской техники – залог ее
          надежной, беспроблемной эксплуатации, а также продолжительного срока
          службы. Периодическая диагностика позволяет выявить любые
          неисправности, отклонения от нормального рабочего режима на самых
          ранних сроках. Это предотвратит серьезные поломки, приводящие к
          дорогостоящим ремонтам.{" "}
        </p>
        <br />
        <p className="ml-20 w-[650px] text-[16px]">
          Являясь авторизованным дилером брендов, продукция которых представлена
          в каталоге, компания:
        </p>
        <p className="ml-40">
          1. Предоставляет услуги сервисного и гарантийного обслуживания.
        </p>
        <p className="ml-40">
          2. Осуществляет поставку оригинальных запчастей и комплектующих.
        </p>
        <p className="ml-40 w-[650px]">
          3. Обучает медицинский персонал работе с современным
          высокотехнологичным оборудованием.
        </p>
        <p className="ml-20 w-[650px] text-[16px]">
          Глобал Медикал Трейд является надежным поставщиком медицинского
          оборудовани, предлагая своим клиентам качественную продукцию по лучшей
          цене. Наша компания гарантирует всем клиентам возможность
          воспользоваться услугами квалифицированных мастеров в установке,
          пуско-наладке, сервисном и техническом обслуживании приобретенного
          оборудования.
        </p>
      </div>
      <h1 className="m-20 text-[30px] ">Перечень гарантийных услуг</h1>
      <YouUs /> {/* youUs o'rniga YouUs */}
      <div className=" gap-15 m-10 ml-[1050px]  flex">
        <button className="hover: m-1 h-[41px] w-[241px] rounded-full border-2 border-solid border-gray-300 text-[#088269] hover:text-green-600">
          Гарантийный случай
        </button>
        <button
          className="m-1 h-[41px] w-[163px] rounded-full border-2 border-solid border-gray-300 bg-[#088269] text-[14px] 
  text-white hover:bg-[#0d9a6f] hover:text-white"
        >
          Гарантийный случай
        </button>
      </div>
      <div className=" flex items-center justify-center">
        <div className="h-[264px] w-[1309px] rounded-[10px]  bg-[#088269]">
          <h1 className="relative bottom-[-25px] left-[25px] text-[30px] text-white">
            Внимание!
          </h1>
          <p className="relative left-[700px] w-[589px] text-[16px] text-white ">
            Рассмотрение заявки на замену товара осуществляется в срок до 30
            дней со дня её регистрации согласно п. 1 ст. 12 Закона № 59-ФЗ, при
            условии предоставления документов, перечисленных в договоре.
          </p>
          <br />
          <p className="relative left-[700px] w-[589px] text-[16px] text-white">
            Оформление гарантийного случая осуществляется согласно Гражданскому
            кодексу РФ, при условии предоставления документов, перечисленных в
            договоре и при наличии заявления с указанием причины возврата,
            оформленного надлежащим образом.
          </p>
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
