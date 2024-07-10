"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/header/Header";
import Image, { StaticImageData } from "next/image";
import Map from "@/components/map/Map";
import Search from "@/assets/icons/search.svg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { LinkIcon } from "@/assets/images";
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
              <BreadcrumbPage>FAQ</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <h1 className="relative left-[70px] m-10 w-[600px] text-[48px]">
        Вакансии
      </h1>
      <p className="ml-20 w-[540px] text-[16px]">
        В «Глобал Медикал Трейд» всегда есть место как для новичков,
        так и для состоявшихся экспертов. Тем, кто только начинает строить
        карьеру, мы предлагаем возможность получить ценные знания, а опытным
        специалистам — расширить компетенции.
      </p>

      <div className="relative bottom-[200px] ml-[800px]">
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
            <span className="text-[18px] font-[600]">Актуальные вакансии</span>
          </AccordionSummary>
          <AccordionDetails>
            <span className="text-[16px] font-[500] ">
              Менеджер по продажам
            </span>
            <br />
            <br />
            <span className="text-[16px] font-[500] text-[#7A7687]">
              Обязанности
            </span>
            <br />
            <br />
            <span className="text-[16px] font-[500] ">
              Работа с входящими/исходящими звонками
              <br />
              Работа с договорами составление/заключение
              <br />
              Ведение деловой переписки (эл. почта, переписка в мессенджерах)
              <br />
              Выполнение плановых показателей
            </span>
            <br />
            <br />
            <span className="text-[16px] font-[500] text-[#7A7687]">
              Требования
            </span>
            <br />
            <br />
            <span className="text-[16px] font-[500]">
              Опыт работы телефонных продаж
            </span>
            <br />
            <span className="text-[16px] font-[500]">Опыт работы в CRM</span>
            <br />
            <span className="text-[16px] font-[500]">
              Способность восприятия большого объема информации
            </span>
            <br />
            <br />
            <span className="text-[16px] font-[500] text-[#7A7687]">
              График работы:
            </span>
            <span className="text-[16px] font-[500]">
              Оформление с первого рабочего дня
            </span>
            <span className="text-[16px] font-[500]">00:00 - 23:59</span>
            <br />
            <br />
            <button className="h-[41px] w-[191px] rounded-[50px] bg-[#088269] text-white">
              Отправить резюме
            </button>
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
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4477.9909401976765!2d37.547854!3d55.862745!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b537991f01afa9%3A0x53c1f16b1398a554!2z0JTQvNC40YLRgNC-0LLRgdC60L7QtSDRiC4sIDg1LCDQnNC-0YHQutCy0LAsINCg0L7RgdGB0LjRjywgMTI3MjM4!5e0!3m2!1sru!2sam!4v1719345687051!5m2!1sru!2sam"
        width="1310"
        height="389"
        className="mb-20 ml-[100px] rounded-[10px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Basket;
