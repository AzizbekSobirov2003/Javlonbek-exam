"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/header/Header";
import Image, { StaticImageData } from "next/image";
import Map from "@/components/map/Map";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { LinkIcon } from "@/assets/images";
import Catalog from "@/components/Catalog/Catalog";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import { styled } from "@mui/material/styles";

const ExpandMoreIconCustom = styled("div")(({}) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 24,
  height: 24,
  borderRadius: "50%",
  backgroundColor: "#FFFFFF",
  color: "#088269FF",
  fontWeight: "bold",
  fontSize: 18,
}));

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
              <BreadcrumbPage>Сертификаты</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <h1 className="relative left-[70px] m-10 w-[600px] text-[48px]">
        Сертификаты
      </h1>

      <div className="relative bottom-[00px] ml-[800px]">
        <Accordion
          defaultExpanded
          className="w-[650px] border-none bg-[#F8F7F3]  "
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIconCustom className="bg-[#088269] text-white">
                +
              </ExpandMoreIconCustom>
            }
            aria-controls="panel1-content"
            id="panel1-header"
            className=""
          >
            <span className="text-[18px] font-[600]">
              Медицинские инструменты
            </span>
          </AccordionSummary>
          <AccordionDetails>
            <span className="text-[16px] font-[500] ">
              Менеджер по продажам
            </span>
            <p className="m-1 text-[12px] text-[#07745E]">
              {" "}
              Инструменты медицинские хирургические РУ № РЗН 2015/3121 от 12
              октября 2015 г.
            </p>
            <p className="m-1 text-[12px] text-[#07745E]">
              Фильтры медицинские РУ № РЗН 2019/8405 от 5 июня 2019 г.
            </p>
            <p className="m-1 text-[12px] text-[#07745E]">
              Воздуховоды полимерные РУ № ФСР 2011/10719 от 15 августа 2016 г
            </p>
            <p className="m-1 text-[12px] text-[#07745E]">
              Набор оториноларингологический РУ № ФСЗ 2010/08840 от 23 ноября
              2018 г.
            </p>
            <p className="m-1 text-[12px] text-[#07745E]">
              Инструменты одноразовые РУ № ФСЗ 2009/05638 от 23 ноября 2018 года
            </p>
            <p className="m-1 text-[12px] text-[#07745E]">
              Пипетка офтальмологическая РУ № ФСР 2009/04211 от 23 ноября 2015
              г.
            </p>
            <p className="m-1 text-[12px] text-[#07745E]">
              Термометр инфракрасный РУ № ФСЗ 2012/13255 от 22 ноября 2012 г.
            </p>
            <p className="m-1 text-[12px] text-[#07745E]">
              Зажим пупочный РУ № ФСР 2011/10731 от 6 мая 2011 г.
            </p>
            <p className="m-1 text-[12px] text-[#07745E]">
              Гигрометры ВИТ Свидетельство об утверждении
            </p>
            <p className="m-1 text-[12px] text-[#07745E]">
              Термометры медицинские РУ № РЗН 2015/2853 от 6 июля 2017 г.
            </p>
            <p className="m-1 text-[12px] text-[#07745E]">
              {" "}
              Станов для бритья РУ № ФСЗ 2009/04329 от 20 июля 2009 г.
            </p>
            <p className="m-1 text-[12px] text-[#07745E]">
              Пинцеты медицинские РУ № ФСЗ 2010/06996 от 23 ноября 2018 г.
            </p>
            <p className="m-1 text-[12px] text-[#07745E]">
              Емкость-контейнеры для сбора РУ № РЗН 2014/2254 от 18 марта 2020
              г.
            </p>
            <p className="m-1 text-[12px] text-[#07745E]">
              Емкости-контейнеры РУ № ФСР 2012/13095 ч.1
            </p>
            <p className="m-1 text-[12px] text-[#07745E]">
              Электроды медицинские РУ № ФСЗ 2012/12612
            </p>
            <p className="m-1 text-[12px] text-[#07745E]">
              Инструменты хирургические РУ № ФСЗ 2012/12251 от 30 мая 2012 г.
            </p>
            <p className="m-1 text-[12px] text-[#07745E]">
              Изделие медицинское для инфуз.-трансфуз. РУ № ФСЗ 2011/11287 от 27
              декабря 2011 г.
            </p>
            <p className="m-1 text-[12px] text-[#07745E]">
              Термометр медицинский РУ № ФСЗ 2011/10572
            </p>
            <p className="m-1 text-[12px] text-[#07745E]">
              Мундштуки картонные и адаптеры РУ № ФСР 2012/13317 от 27 августа
              2019 г.
            </p>
            <p className="m-1 text-[12px] text-[#07745E]">
              Мундштуки картонные одноразовые РУ № ФСР 2012/13607 от 13 февраля
              2018 г.
            </p>
            <p className="m-1 text-[12px] text-[#07745E]">
              Анализатор паров этанола Alcotest РУ № РЗН 2016/5237 от 13 января
              2017 г.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion className="mt-5 w-[650px] border-none bg-[#F8F7F3] shadow-none">
          <AccordionSummary
            expandIcon={
              <ExpandMoreIconCustom className="bg-[#088269] text-white">
                +
              </ExpandMoreIconCustom>
            }
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <span className="text text-[18px] font-[600]">
              Специалист по медицинскому оборудованию{" "}
            </span>
          </AccordionSummary>
          <AccordionDetails>
            <span className="tex text-[14px] font-[600]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </span>
          </AccordionDetails>
        </Accordion>
        <Accordion className="mt-5 w-[650px] border-none bg-[#F8F7F3] shadow-none">
          <AccordionSummary
            expandIcon={
              <ExpandMoreIconCustom className="bg-[#088269] text-white">
                +
              </ExpandMoreIconCustom>
            }
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <span className="text-[18px] font-[600]">Офис менеджер </span>
          </AccordionSummary>
          <AccordionDetails>
            <span className="text-[14px] font-[600]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </span>
          </AccordionDetails>
        </Accordion>
        <Accordion className="mt-5 w-[650px] border-none bg-[#F8F7F3] shadow-none">
          <AccordionSummary
            expandIcon={
              <ExpandMoreIconCustom className="bg-[#088269] text-white">
                +
              </ExpandMoreIconCustom>
            }
            aria-controls="panel4-content"
            id="panel4-header"
          >
            <span className="text-[18px] font-[600]">HR–менеджер </span>
          </AccordionSummary>
          <AccordionDetails>
            <span className="text-[14px] font-[600]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </span>
          </AccordionDetails>
        </Accordion>
        <br />
        <h1 className="text-[30px] text-[500]">Архив вакансий</h1>
        <br />
        <Accordion className="mt-5 w-[650px] border-none bg-[#F8F7F3] shadow-none">
          <AccordionSummary
            expandIcon={
              <ExpandMoreIconCustom className="bg-[#088269] text-white">
                +
              </ExpandMoreIconCustom>
            }
            aria-controls="panel4-content"
            id="panel4-header"
          >
            <span className="text-[18px] font-[600]">
              Специалист по медицинскому оборудованию
            </span>
          </AccordionSummary>
          <AccordionDetails>
            <span className="text-[14px] font-[600]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </span>
          </AccordionDetails>
        </Accordion>
        <Accordion className="mt-5 w-[650px] border-none bg-[#F8F7F3] shadow-none">
          <AccordionSummary
            expandIcon={
              <ExpandMoreIconCustom className="bg-[#088269] text-white">
                +
              </ExpandMoreIconCustom>
            }
            aria-controls="panel4-content"
            id="panel4-header"
          >
            <span className="text-[18px] font-[600]">Стать поставщиком</span>
          </AccordionSummary>
          <AccordionDetails>
            <span className="text-[14px] font-[600]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </span>
          </AccordionDetails>
        </Accordion>
        <Accordion className="mt-5 w-[650px] border-none bg-[#F8F7F3] shadow-none">
          <AccordionSummary
            expandIcon={
              <ExpandMoreIconCustom className="bg-[#088269] text-white">
                +
              </ExpandMoreIconCustom>
            }
            aria-controls="panel4-content"
            id="panel4-header"
          >
            <span className="text-[18px] font-[600]">
              Возможен ли возврат денежных средств?
            </span>
          </AccordionSummary>
          <AccordionDetails>
            <span className="text-[14px] font-[600]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </span>
          </AccordionDetails>
        </Accordion>
        <Accordion className="mt-5 w-[650px] border-none bg-[#F8F7F3] shadow-none">
          <AccordionSummary
            expandIcon={
              <ExpandMoreIconCustom className="bg-[#088269] text-white">
                +
              </ExpandMoreIconCustom>
            }
            aria-controls="panel4-content"
            id="panel4-header"
          >
            <span className="text-[18px] font-[600]">
              Правила расторжения договора?
            </span>
          </AccordionSummary>
          <AccordionDetails>
            <span className="text-[14px] font-[600]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </span>
          </AccordionDetails>
        </Accordion>
        <Accordion className="mt-5 w-[650px] border-none bg-[#F8F7F3] shadow-none">
          <AccordionSummary
            expandIcon={
              <ExpandMoreIconCustom className="bg-[#088269] text-white">
                +
              </ExpandMoreIconCustom>
            }
            aria-controls="panel4-content"
            id="panel4-header"
          >
            <span className="text-[18px] font-[600]">
              Почему не отгружаем по платежному поручению?
            </span>
          </AccordionSummary>
          <AccordionDetails>
            <span className="text-[14px] font-[600]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </span>
          </AccordionDetails>
        </Accordion>
        <Accordion className="mt-5 w-[650px] border-none bg-[#F8F7F3] shadow-none">
          <AccordionSummary
            expandIcon={
              <ExpandMoreIconCustom className="bg-[#088269] text-white">
                +
              </ExpandMoreIconCustom>
            }
            aria-controls="panel4-content"
            id="panel4-header"
          >
            <span className="text-[18px] font-[600]">
              Как можно купить товар за наличный расчет?
            </span>
          </AccordionSummary>
          <AccordionDetails>
            <span className="text-[14px] font-[600]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </span>
          </AccordionDetails>
        </Accordion>
        <Accordion className="mt-5 w-[650px] border-none bg-[#F8F7F3] shadow-none">
          <AccordionSummary
            expandIcon={
              <ExpandMoreIconCustom className="bg-[#088269] text-white">
                +
              </ExpandMoreIconCustom>
            }
            aria-controls="panel4-content"
            id="panel4-header"
          >
            <span className="text-[18px] font-[600]">
              Как сравнить товары на сайте?
            </span>
          </AccordionSummary>
          <AccordionDetails>
            <span className="text-[14px] font-[600]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </span>
          </AccordionDetails>
        </Accordion>
      </div>
      <Catalog />
      <Map />

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Basket;
