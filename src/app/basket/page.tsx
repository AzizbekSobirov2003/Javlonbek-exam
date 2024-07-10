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
import { Iks, Like, Reyt } from "@/assets/images";

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
              <BreadcrumbPage>Корзина ({dataLength})</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="ml-[1100px] h-[287px] w-[320px] rounded-[10px] border-[1px] border-[#D5D1E1] bg-white">
        <div className="m-3 flex gap-20 p-3">
          <p>Итого</p>
          <p>900.000 руб.</p>
        </div>
        <hr className="w-[300px]" />
        <div className="m-2 flex gap-20 p-2">
          <p className="text-[12px]">Товары (3 шт)</p>
          <p className="text-[12px]">900.000 руб.</p>
        </div>
        <div className="m-2 flex gap-40 p-2">
          <p className="text-[12px]">Скидка</p>
          <p className="text-[12px]">0 руб.</p>
        </div>
        <button className="ml-[15px] h-[41px] w-[280px] rounded-[50px] bg-[#088269]  text-white">
          Оформить заказ
        </button>
        <br />
        <br />
        <button className="ml-[15px] h-[41px] w-[280px] rounded-[50px] border-[1px] border-[#D5D1E1] bg-white text-black">
          Задать вопрос
        </button>
      </div>
      <section className="relative bottom-[270px] ml-[100px] w-[980px]">
        {favorites.map((item) => (
          <div key={item.id} className="my-5 shadow-xl">
            <div className="relative flex justify-start border">
              <div className="flex w-[30%] items-center justify-center border bg-white">
                <Image
                  src={item.img}
                  alt="imgsrc"
                  className="m-3 h-[237px] w-[320px]"
                />
              </div>
              <div className="bg-custom-b flex w-[70%] justify-between border">
                <div className="ml-10 mt-5">
                  <h1 className="text-[18px] font-[500]">{item.title}</h1>
                  <p>Артикул: 213134</p>
                  <p>В наличии</p>
                </div>
                <div className=" m-5 ">
                  <br />
                  <div className="m-3 flex items-center justify-between rounded-[30px] border px-5 py-2 text-[#088269]">
                    <br />{" "}
                    <button onClick={() => setCount(count - 1)}>-</button>
                    <h1 className="px-3  ">{count}</h1>
                    <button onClick={() => setCount(count + 1)}> +</button>
                  </div>
                  <br />
                  <h1 className="relative right-[450px] text-[18px]  font-[600]">
                    300 000 руб.
                  </h1>{" "}
                </div>
                <div className="absolute right-5 top-5 flex justify-between">
                  <button>{/* <Reyt /> */}</button>
                  <button className="mx-5">{/* <Like /> */}</button>
                  <button
                    onClick={() => removeFromFavorites(item.id)}
                    className="flex items-center text-[20px] font-[700]"
                  >
                    <Iks />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Basket;
