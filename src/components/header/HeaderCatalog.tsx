import Link from "next/link";
import Image from "next/image";
// images
import Map from "@/assets/icons/map.svg";
import CatalogImg from "@/assets/icons/catalog.svg";
// react-hooks
import { useState } from "react";
// components
import CatalogHover from "./CatalogHover";
import HoverManufacturers from "./HoverManufacturers";
import HoverShop from "./HoverShop";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";

const HeaderCatalog = () => {
  const [isHoverCatalog, setisHoverCatalog] = useState(false);
  const [isHoverManufacturers, setisHoverManufacturers] = useState(false);
  const [isHoverShop, setisHoverShop] = useState(false);

  const handleMouseEnter = () => {
    setisHoverCatalog(true);
  };
  const handleMouseLeave = () => {
    setisHoverCatalog(false);
  };

  // Manufacturers
  const handleMouseEnterManufacturers = () => {
    setisHoverManufacturers(true);
  };
  const handleMouseLeaveManufacturers = () => {
    setisHoverManufacturers(false);
  };

  // Shop
  const handleMouseEnterShop = () => {
    setisHoverShop(true);
  };
  const handleMouseLeaveShop = () => {
    setisHoverShop(false);
  };

  return (
    <div className="hidden w-[100%] border-b-2 py-5 sm:grid">
      <div className="mx-auto flex w-[90%] items-center justify-between">
        <nav>
          <ul className="absolute">
            <CatalogHover
              isHoverCatalog={isHoverCatalog}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
            />
            <HoverManufacturers
              isHoverManufacturers={isHoverManufacturers}
              handleMouseEnterManufacturers={handleMouseEnterManufacturers}
              handleMouseLeaveManufacturers={handleMouseLeaveManufacturers}
            />
            <HoverShop
              isHoverShop={isHoverShop}
              handleMouseEnterShop={handleMouseEnterShop}
              handleMouseLeaveShop={handleMouseLeaveShop}
            />
            <li className="flex items-center justify-between">
              <Link
                className="mx-3 flex items-center text-[14px] hover:text-[#07745E]"
                href="/catalog"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span>
                  <Image src={CatalogImg} alt="catalog img" className="" />
                </span>
                Каталог
              </Link>
              <Link
                className="mx-3 text-[14px] hover:text-[#07745E]"
                href="/prois"
                onMouseEnter={handleMouseEnterManufacturers}
                onMouseLeave={handleMouseLeaveManufacturers}
              >
                Производители
              </Link>
              <Link
                className="mx-3 text-[14px] hover:text-[#07745E]"
                href="/kabinet"
              >
                Кабинеты под ключ
              </Link>
              <Link
                className="mx-3 text-[14px] hover:text-[#07745E]"
                href="/usluga"
              >
                Услуги
              </Link>
              <Link className="mx-3 text-[14px] hover:text-[#07745E]" href="#">
                Акции
              </Link>
              <Link
                className="mx-3 text-[14px] hover:text-[#07745E]"
                href="#"
                onMouseEnter={handleMouseEnterShop}
                onMouseLeave={handleMouseLeaveShop}
              >
                Покупателям
              </Link>
              <Link
                className="mx-3 text-[14px] hover:text-[#07745E]"
                href="/kontakt"
              >
                Контакты
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center justify-between">
          <Dialog>
            <DialogTrigger asChild>
              <button className="mx-3 flex">
                <p>Москва</p>
                <Image src={Map} alt="map icon" />
              </button>
            </DialogTrigger>
            <DialogContent className="h-[519px] sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Укажите свой город</DialogTitle>
                <form className="flex" style={{ width: "100%" }}>
                  <input
                    type="search"
                    placeholder="Поиск"
                    className="h-[46px] rounded-r-[20px] px-5 text-[14px] focus:outline-none"
                    style={{ width: "100%" }}
                  />
                  <button
                    className="ml-[2px] rounded-[50%] p-3 hover:bg-white"
                    style={{ marginLeft: "2px" }}
                  >
                    {/* <Image src={Search.} alt="Search" width={15} /> */}
                  </button>
                </form>
                <div className="flex gap-[50px]">
                  <div>
                    <p className="[14px]"> Москва</p>
                    <p className="[14px]">Апрелевка</p>
                    <p className="[14px]">Балашиха</p>
                    <p className="[14px]">Бронницы</p>
                    <p className="[14px]">Верея</p>
                    <p className="[14px]">Видное</p>
                    <p className="[14px]">Волоколамск</p>
                    <p className="[14px]">Воскресенск</p>
                    <p className="[14px]">Высоковск</p>
                    <p className="[14px]">Голицыно</p>
                  </div>
                  <div>
                    <p className="[14px]"></p>
                    <p className="[14px]">Дедовск</p>
                    <p className="[14px]">Дзержинский</p>
                    <p className="[14px]">Дмитров</p>
                    <p className="[14px]">Долгопрудный</p>
                    <p className="[14px]">Домодедово</p>
                    <p className="[14px]">Дрезна</p>
                    <p className="[14px]">Санкт-Петербург</p>
                    <p className="[14px]">Абакан</p>
                    <p className="[14px]">Азов</p>
                    <p className="[14px]">Александров</p>
                  </div>
                  <div>
                    <p className="[14px]">Алексин</p>
                    <p className="[14px]">Альметьевск</p>
                    <p className="[14px]">Анапа</p>
                    <p className="[14px]">Анжеро-Судженск</p>
                    <p className="[14px]">Апатиты</p>
                    <p className="[14px]">Арзамас</p>
                    <p className="[14px]">Армавир</p>
                    <p className="[14px]">Артем</p>
                    <p className="[14px]">Архангельск</p>
                  </div>
                </div>
              </DialogHeader>
              <Button className="mt-4 h-[41px]  w-[137px] rounded-[20px] bg-[#088269FF] hover:bg-[#08826ad2]">
                Все города
              </Button>
            </DialogContent>
          </Dialog>
          <button className="mx-3 rounded-[20px] border px-5 py-3 text-[14px]">
            +7(495)000-00-00
          </button>
          <button className="mx-3 rounded-[25px] bg-[#088269] px-5 py-3 text-white">
            Заказать звонок
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderCatalog;
