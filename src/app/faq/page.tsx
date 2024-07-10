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
        Часто задаваемые вопросы
      </h1>
      <form className="ml-[100px] flex" style={{ width: "100%" }}>
        <input
          type="search"
          placeholder="Поиск по вопросам"
          className="border-1 border-customLightGray  h-[49px] w-[496px] rounded-[50px] border px-5 text-[14px] focus:outline-none"
        />
        <button
          className="ml-[2px] rounded-[50%] p-3 hover:bg-white"
          style={{ marginLeft: "2px" }}
        >
          <Image src={Search} alt="Search icon" width={15} />
        </button>
      </form>

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
            <span className="text-[18px] font-[600]">О компании</span>
          </AccordionSummary>
          <AccordionDetails>
            <span className="text-[16px] font-[500] ">
              Но синтетическое тестирование, в своём классическом представлении,
              <br />
              допускает внедрение поэтапного и последовательного развития
              общества.
              <br />В рамках спецификации современных стандартов, сторонники
              <br />
              тоталитаризма в науке будут функционально разнесены.
              <br />
            </span>
            <h1 className="">.</h1>
            <Link href="#" className="mt-[40px] flex items-center ">
              Подробнее <LinkIcon />
            </Link>
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
              Преимущества сотрудников
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
            <span className="text-[18px] font-[600]">Достижения компании</span>
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
              Возврат товара или заказа
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
            <span className="text-[18px] font-[600]">Стоимость доставки</span>
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
      <Map />

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Basket;
