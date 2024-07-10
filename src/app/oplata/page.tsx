"use client";
import Header from "@/components/header/Header";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
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
              <BreadcrumbPage>Оплата</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div>
        <br />
        <br />
        <br />
        <h1 className="ml-20 text-[48px]">Оплата</h1>
        <br />
        <p className="ml-20 w-[650px]">
          Учитывая стремительное развитие мировых медицинских технологий, врачи
          в Российской Федерации и соседних странах столкнулись с вызовом,
          требующим обновления приборов в различных направлениях, от установок
          компьютерной томографии до ультразвуковых сканеров и ЛОР комбайнов.{" "}
        </p>
      </div>
      <br />
      <div className="flex items-center justify-center gap-3">
        <div className="h-[240px] w-[430px] rounded-[10px] border border-gray-200 bg-white">
          <p className="m-2 p-2 text-[18px] font-semibold">Оплата наличными</p>
          <p className="ml-5 w-[342px] text-[16px] text-gray-700">
            1. Также как постоянное обеспечение нашей деятельности требует
            определения{" "}
          </p>
          <p className="ml-5 w-[342px] text-[16px] text-gray-700">
            2. Требующим обновления приборов в различных направлениях,
            от установок компьютерной томографии{" "}
          </p>
          <p className="ml-5 w-[342px] text-[16px] text-gray-700">
            3. Также как постоянное обеспечение нашей{" "}
          </p>
        </div>
        <div className="h-[240px] w-[430px] rounded-[10px] border border-gray-200 bg-white">
          {" "}
          <p className="m-2 p-2 text-[18px] font-semibold">
            Безналичный расчет
          </p>
          <p className="ml-5 w-[342px] text-[16px] text-gray-700">
            1. Также как постоянное обеспечение нашей деятельности требует
            определения{" "}
          </p>
          <p className="ml-5 w-[342px] text-[16px] text-gray-700">
            2. Также как постоянное обеспечение нашей{" "}
          </p>
          <p className="ml-5 w-[342px] text-[16px] text-gray-700">
            3. Также как постоянное
          </p>
        </div>
        <div className="h-[240px] w-[430px] rounded-[10px] border border-gray-200 bg-white">
          <p className="m-2 p-2 text-[18px] font-semibold">Оплата наличными</p>
          <p className="ml-5 w-[342px] text-[16px] text-gray-700">
            1. Требующим обновления приборов в различных направлениях,
            от установок компьютерной томографии{" "}
          </p>
          <p className="ml-5 w-[342px] text-[16px] text-gray-700">
            2. Также как постоянное обеспечение нашей{" "}
          </p>
          <p className="ml-5 w-[342px] text-[16px] text-gray-700">
            3. Также как постоянное
          </p>
          <p className="ml-5 w-[342px] text-[16px] text-gray-700">
            4. Также как постоянное обеспечение{" "}
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <h1 className="ml-20 text-[48px]">Порядок возврата денежных средств</h1>
      <br />
      <p className="ml-20 w-[650px]">
        Учитывая стремительное развитие мировых медицинских технологий, врачи
        в Российской Федерации и соседних странах столкнулись с вызовом,
        требующим обновления приборов в различных направлениях, от установок
        компьютерной томографии до ультразвуковых сканеров и ЛОР комбайнов.{" "}
      </p>
      <br />
      <div className="ml-20 flex items-center gap-3">
        <div className="h-[240px] w-[430px] rounded-[10px] border border-gray-200 bg-white">
          <p className="m-2 p-2 text-[18px] font-semibold">
            При оплате наличными
          </p>
          <p className="ml-5 w-[342px] text-[16px] text-gray-700">
            1. Также как постоянное обеспечение нашей деятельности требует
            определения{" "}
          </p>
          <p className="ml-5 w-[342px] text-[16px] text-gray-700">
            2. Требующим обновления приборов в различных направлениях,
            от установок компьютерной томографии{" "}
          </p>
        </div>
        <div className="h-[240px] w-[430px] rounded-[10px] border border-gray-200 bg-white">
          <p className="m-2 p-2 text-[18px] font-semibold">
            При оплате банковской картой
          </p>
          <p className="ml-5 w-[342px] text-[16px] text-gray-700">
            1. Также как постоянное обеспечение нашей деятельности требует
            определения{" "}
          </p>
          <p className="ml-5 w-[342px] text-[16px] text-gray-700">
            2. Также как постоянное обеспечение нашей{" "}
          </p>
          <p className="ml-5 w-[342px] text-[16px] text-gray-700">
            3. Требующим обновления приборов в различных направлениях,
            от установок компьютерной томографии{" "}
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <h1 className="ml-20 text-[48px]">Условия поставок</h1>
      <br />
      <p className="ml-20 w-[650px]">
        Учитывая стремительное развитие мировых медицинских технологий, врачи
        в Российской Федерации и соседних странах столкнулись с вызовом,
        требующим обновления приборов в различных направлениях, от установок
        компьютерной томографии до ультразвуковых сканеров и ЛОР комбайнов.{" "}
      </p>
      <br />
      <div className="ml-20 flex items-center gap-3">
        <div className="h-[240px] w-[430px] rounded-[10px] border border-gray-200 bg-white">
          <p className="m-2 p-2 text-[18px] font-semibold">Лизинг</p>
          <p className="ml-5 w-[342px] text-[16px] text-gray-700">
            1. Также как постоянное обеспечение нашей деятельности требует
            определения{" "}
          </p>
          <p className="ml-5 w-[342px] text-[16px] text-gray-700">
            2.Также как постоянное
          </p>
          <p className="ml-5 w-[342px] text-[16px] text-gray-700">
            3. Требующим обновления приборов в различных направлениях,
            от установок компьютерной томографии{" "}
          </p>
        </div>
        <div className="h-[240px] w-[430px] rounded-[10px] border border-gray-200 bg-white">
          <p className="m-2 p-2 text-[18px] font-semibold">Рассрочка</p>
          <p className="ml-5 w-[342px] text-[16px] text-gray-700">
            1. Требующим обновления приборов в различных направлениях,
            от установок компьютерной томографии{" "}
          </p>
          <p className="ml-5 w-[342px] text-[16px] text-gray-700">
            2. Также как постоянное{" "}
          </p>
          <p className="ml-5 w-[342px] text-[16px] text-gray-700">
            3. Также как постоянное обеспечение нашей{" "}
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
