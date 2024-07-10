"use client";
import Header from "@/components/header/Header";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import st1 from "@/assets/images/el1.png";
import StarItem1 from "@/components/item1/Star";

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
import Clients from "@/components/Clients";
import Map from "@/components/map/Map";
import Brands from "@/components/Brands/Brands";

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
              <BreadcrumbPage>Отзывы</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <h1 className="ml-30 m-20 text-[48px]">Отзывы</h1>

      <div className="mb-4 flex items-center justify-center gap-6">
        <div className="h-[350px] w-[650px] rounded-[10px] rounded-lg border border-[#E5E2EE] bg-white">
          <img src={st1.src} alt="st1" className="m-3" />
          <div className="relative bottom-[75px] left-[90px]">
            <h1 className="m-  text-[18px] font-semibold">
              ООО Название компании
            </h1>
            <p
              style={{ color: "#7A7687" }}
              className="text-customGray ml- text-[12px]"
            >
              Михаил Булич Андреевич, Директор
            </p>
            <p
              style={{ color: "#7A7687" }}
              className="text-customGray relative bottom-[20px] left-[460px] w-[60px] text-[12px]"
            >
              14.03.2023
            </p>
            <StarItem1 />
          </div>
          <p
            style={{ color: "#7A7687" }}
            className="text-customGray relative bottom-[50px] ml-4 w-[580px] text-[16px]"
          >
            Каждый из нс понимает очевидную вещь: понимание сути
            ресурсосберегающих технологий создаёт необходимость включения в
            производственный план целого ряда внеочередных мероприятий с учётом
            комплекса новых принципов формирования материально-технической и
            кадровой базы. Господа, повышение уровня гражданского сознания
            играет определяющее значение для стандартных подходов. План целого
            ряда внеочередных мероприятий с учётом комплекса.
          </p>
        </div>
        <div className="h-[350px] w-[650px] rounded-[10px] rounded-lg border border-[#E5E2EE] bg-white">
          <img src={st1.src} alt="st1" className="m-3" />
          <div className="relative bottom-[75px] left-[90px]">
            <h1 className="m-  text-[18px] font-semibold">
              ООО Название компании
            </h1>
            <p
              style={{ color: "#7A7687" }}
              className="text-customGray ml- text-[12px]"
            >
              Михаил Булич Андреевич, Директор
            </p>
            <p
              style={{ color: "#7A7687" }}
              className="text-customGray relative bottom-[20px] left-[460px] w-[60px]  text-[12px]"
            >
              14.03.2023
            </p>
            <StarItem1 />
          </div>
          <p
            style={{ color: "#7A7687" }}
            className="text-customGray relative bottom-[50px] ml-4 w-[580px] text-[16px]"
          >
            Не следует, однако, забывать, что граница обучения кадров, а также
            свежий взгляд на привычные вещи — безусловно открывает новые
            горизонты для новых принципов формирования.
          </p>
        </div>
      </div>
      <div className="mb-4 flex items-center justify-center gap-6">
        <div className="h-[350px] w-[650px] rounded-[10px] rounded-lg border border-[#E5E2EE] bg-white">
          <img src={st1.src} alt="st1" className="m-3" />
          <div className="relative bottom-[75px] left-[90px]">
            <h1 className="m-  text-[18px] font-semibold">
              ООО Название компании
            </h1>
            <p
              style={{ color: "#7A7687" }}
              className="text-customGray ml- text-[12px]"
            >
              Михаил Булич Андреевич, Директор
            </p>
            <p
              style={{ color: "#7A7687" }}
              className="text-customGray relative bottom-[20px] left-[460px] w-[60px]  text-[12px]"
            >
              14.03.2023
            </p>
            <StarItem1 />
          </div>
          <p
            style={{ color: "#7A7687" }}
            className="text-customGray relative bottom-[50px] ml-4 w-[580px] text-[16px]"
          >
            Не следует, однако, забывать, что граница обучения кадров, а также
            свежий взгляд на привычные вещи — безусловно открывает новые
            горизонты для новых принципов формирования.
          </p>
        </div>
        <div className="h-[350px] w-[650px] rounded-[10px] rounded-lg border border-[#E5E2EE] bg-white">
          <img src={st1.src} alt="st1" className="m-3" />
          <div className="relative bottom-[75px] left-[90px]">
            <h1 className="m-  text-[18px] font-semibold">
              ООО Название компании
            </h1>
            <p
              style={{ color: "#7A7687" }}
              className="text-customGray ml- text-[12px]"
            >
              Михаил Булич Андреевич, Директор
            </p>
            <p
              style={{ color: "#7A7687" }}
              className="text-customGray relative bottom-[20px] left-[460px] w-[60px]  text-[12px]"
            >
              14.03.2023
            </p>
            <StarItem1 />
          </div>
          <p
            style={{ color: "#7A7687" }}
            className="text-customGray relative bottom-[50px] ml-4 w-[580px] text-[16px]"
          >
            Каждый из нс понимает очевидную вещь: понимание сути
            ресурсосберегающих технологий создаёт необходимость включения в
            производственный план целого ряда внеочередных мероприятий с учётом
            комплекса новых принципов формирования материально-технической и
            кадровой базы.
          </p>
        </div>
      </div>
      <div className="mb-4 flex items-center justify-center gap-6">
        <div className="h-[350px] w-[650px] rounded-[10px] rounded-lg border border-[#E5E2EE] bg-white">
          <img src={st1.src} alt="st1" className="m-3" />
          <div className="relative bottom-[75px] left-[90px]">
            <h1 className="m-  text-[18px] font-semibold">
              ООО Название компании
            </h1>
            <p
              style={{ color: "#7A7687" }}
              className="text-customGray ml- text-[12px]"
            >
              Михаил Булич Андреевич, Директор
            </p>
            <p
              style={{ color: "#7A7687" }}
              className="text-customGray relative bottom-[20px] left-[460px] w-[60px]  text-[12px]"
            >
              14.03.2023
            </p>
            <StarItem1 />
          </div>
          <p
            style={{ color: "#7A7687" }}
            className="text-customGray relative bottom-[50px] ml-4 w-[580px] text-[16px]"
          >
            Каждый из нс понимает очевидную вещь: понимание сути
            ресурсосберегающих технологий создаёт необходимость включения в
            производственный план целого ряда внеочередных мероприятий с учётом
            комплекса новых принципов формирования материально-технической и
            кадровой базы. Господа, повышение уровня гражданского сознания
            играет определяющее значение для стандартных подходов.{" "}
          </p>
        </div>
        <div className="h-[350px] w-[650px] rounded-[10px] rounded-lg border border-[#E5E2EE] bg-white">
          <img src={st1.src} alt="st1" className="m-3" />
          <div className="relative bottom-[75px] left-[90px]">
            <h1 className="m-  text-[18px] font-semibold">
              ООО Название компании
            </h1>
            <p
              style={{ color: "#7A7687" }}
              className="text-customGray ml- text-[12px]"
            >
              Михаил Булич Андреевич, Директор
            </p>
            <p
              style={{ color: "#7A7687" }}
              className="text-customGray relative bottom-[20px] left-[460px] w-[60px]  text-[12px]"
            >
              14.03.2023
            </p>
            <StarItem1 />
          </div>
          <p
            style={{ color: "#7A7687" }}
            className="text-customGray relative bottom-[50px] ml-4 w-[580px] text-[16px]"
          >
            Каждый из нс понимает очевидную вещь: понимание сути
            ресурсосберегающих технологий создаёт необходимость включения в
            производственный план целого ряда внеочередных мероприятий с учётом
            комплекса новых принципов формирования материально-технической и
            кадровой базы. Господа, повышение уровня гражданского сознания
            играет определяющее значение для стандартных подходов. План целого
            ряда внеочередных мероприятий с учётом комплекса.
          </p>
        </div>
      </div>
      <div className="mb-4 flex items-center justify-center gap-6">
        <div className="h-[350px] w-[650px] rounded-[10px] rounded-lg border border-[#E5E2EE] bg-white">
          <img src={st1.src} alt="st1" className="m-3" />
          <div className="relative bottom-[75px] left-[90px]">
            <h1 className="m-  text-[18px] font-semibold">
              ООО Название компании
            </h1>
            <p
              style={{ color: "#7A7687" }}
              className="text-customGray ml- text-[12px]"
            >
              Михаил Булич Андреевич, Директор
            </p>
            <p
              style={{ color: "#7A7687" }}
              className="text-customGray relative bottom-[20px] left-[460px] w-[60px]  text-[12px]"
            >
              14.03.2023
            </p>
            <StarItem1 />
          </div>
          <p
            style={{ color: "#7A7687" }}
            className="text-customGray relative bottom-[50px] ml-4 w-[580px] text-[16px]"
          >
            Каждый из нс понимает очевидную вещь: понимание сути
            ресурсосберегающих технологий создаёт необходимость включения в
            производственный план целого ряда внеочередных мероприятий с учётом
            комплекса новых принципов формирования материально-технической и
            кадровой базы. Господа, повышение уровня гражданского сознания
            играет определяющее значение для стандартных подходов. План целого
            ряда внеочередных мероприятий с учётом комплекса.
          </p>
        </div>
        <div className="h-[350px] w-[650px] rounded-[10px] rounded-lg border border-[#E5E2EE] bg-white">
          <img src={st1.src} alt="st1" className="m-3" />
          <div className="relative bottom-[75px] left-[90px]">
            <h1 className="m-  text-[18px] font-semibold">
              ООО Название компании
            </h1>
            <p
              style={{ color: "#7A7687" }}
              className="text-customGray ml- text-[12px]"
            >
              Михаил Булич Андреевич, Директор
            </p>
            <p
              style={{ color: "#7A7687" }}
              className="text-customGray relative bottom-[20px] left-[460px] w-[60px]  text-[12px]"
            >
              14.03.2023
            </p>
            <StarItem1 />
          </div>
          <p
            style={{ color: "#7A7687" }}
            className="text-customGray relative bottom-[50px] ml-4 w-[580px] text-[16px]"
          >
            Каждый из нс понимает очевидную вещь: понимание сути
            ресурсосберегающих технологий создаёт необходимость включения в
            производственный план целого ряда внеочередных мероприятий с учётом
            комплекса новых принципов формирования материально-технической и
            кадровой базы. Господа, повышение уровня гражданского сознания
            играет определяющее значение для стандартных подходов. План целого
            ряда внеочередных мероприятий с учётом комплекса.
          </p>
        </div>
      </div>
      <div className="mb-4 flex items-center justify-center gap-6">
        <div className="h-[350px] w-[650px] rounded-[10px] rounded-lg border border-[#E5E2EE] bg-white">
          <img src={st1.src} alt="st1" className="m-3" />
          <div className="relative bottom-[75px] left-[90px]">
            <h1 className="m-  text-[18px] font-semibold">
              ООО Название компании
            </h1>
            <p
              style={{ color: "#7A7687" }}
              className="text-customGray ml- text-[12px]"
            >
              Михаил Булич Андреевич, Директор
            </p>
            <p
              style={{ color: "#7A7687" }}
              className="text-customGray relative bottom-[20px] left-[460px] w-[60px]  text-[12px]"
            >
              14.03.2023
            </p>
            <StarItem1 />
          </div>
          <p
            style={{ color: "#7A7687" }}
            className="text-customGray relative bottom-[50px] ml-4 w-[580px] text-[16px]"
          >
            Каждый из нс понимает очевидную вещь: понимание сути
            ресурсосберегающих технологий создаёт необходимость включения в
            производственный план целого ряда внеочередных мероприятий с учётом
            комплекса новых принципов формирования материально-технической и
            кадровой базы. Господа, повышение уровня гражданского сознания
            играет определяющее значение для стандартных подходов. План целого
            ряда внеочередных мероприятий с учётом комплекса.
          </p>
        </div>
        <div className="h-[350px] w-[650px] rounded-[10px] rounded-lg border border-[#E5E2EE] bg-white">
          <img src={st1.src} alt="st1" className="m-3" />
          <div className="relative bottom-[75px] left-[90px]">
            <h1 className="m-  text-[18px] font-semibold">
              ООО Название компании
            </h1>
            <p
              style={{ color: "#7A7687" }}
              className="text-customGray ml- text-[12px]"
            >
              Михаил Булич Андреевич, Директор
            </p>
            <p
              style={{ color: "#7A7687" }}
              className="text-customGray relative bottom-[20px] left-[460px] w-[60px]  text-[12px]"
            >
              14.03.2023
            </p>
            <StarItem1 />
          </div>
          <p
            style={{ color: "#7A7687" }}
            className="text-customGray relative bottom-[50px] ml-4 w-[580px] text-[16px]"
          >
            Каждый из нс понимает очевидную вещь: понимание сути
            ресурсосберегающих технологий создаёт необходимость включения в
            производственный план целого ряда внеочередных мероприятий с учётом
            комплекса новых принципов формирования материально-технической и
            кадровой базы. Господа, повышение уровня гражданского сознания
            играет определяющее значение для стандартных подходов. План целого
            ряда внеочередных мероприятий с учётом комплекса.
          </p>
        </div>
      </div>
      <div className="mb-4 flex items-center justify-center gap-6">
        <div className="h-[350px] w-[650px] rounded-[10px] rounded-lg border border-[#E5E2EE] bg-white">
          <img src={st1.src} alt="st1" className="m-3" />
          <div className="relative bottom-[75px] left-[90px]">
            <h1 className="m-  text-[18px] font-semibold">
              ООО Название компании
            </h1>
            <p
              style={{ color: "#7A7687" }}
              className="text-customGray ml- text-[12px]"
            >
              Михаил Булич Андреевич, Директор
            </p>
            <p
              style={{ color: "#7A7687" }}
              className="text-customGray relative bottom-[20px] left-[460px] w-[60px]  text-[12px]"
            >
              14.03.2023
            </p>
            <StarItem1 />
          </div>
          <p
            style={{ color: "#7A7687" }}
            className="text-customGray relative bottom-[50px] ml-4 w-[580px] text-[16px]"
          >
            Каждый из нс понимает очевидную вещь: понимание сути
            ресурсосберегающих технологий создаёт необходимость включения в
            производственный план целого ряда внеочередных мероприятий с учётом
            комплекса новых принципов формирования материально-технической и
            кадровой базы. Господа, повышение уровня гражданского сознания
            играет определяющее значение для стандартных подходов. План целого
            ряда внеочередных мероприятий с учётом комплекса.
          </p>
        </div>
        <div className="h-[350px] w-[650px] rounded-[10px] rounded-lg border border-[#E5E2EE] bg-white">
          <img src={st1.src} alt="st1" className="m-3" />
          <div className="relative bottom-[75px] left-[90px]">
            <h1 className="m-  text-[18px] font-semibold">
              ООО Название компании
            </h1>
            <p
              style={{ color: "#7A7687" }}
              className="text-customGray ml- text-[12px]"
            >
              Михаил Булич Андреевич, Директор
            </p>
            <p
              style={{ color: "#7A7687" }}
              className="text-customGray relative bottom-[20px] left-[460px] w-[60px]  text-[12px]"
            >
              14.03.2023
            </p>
            <StarItem1 />
          </div>
          <p
            style={{ color: "#7A7687" }}
            className="text-customGray relative bottom-[50px] ml-4 w-[580px] text-[16px]"
          >
            Каждый из нс понимает очевидную вещь: понимание сути
            ресурсосберегающих технологий создаёт необходимость включения в
            производственный план целого ряда внеочередных мероприятий с учётом
            комплекса новых принципов формирования материально-технической и
            кадровой базы. Господа, повышение уровня гражданского сознания
            играет определяющее значение для стандартных подходов. План целого
            ряда внеочередных мероприятий с учётом комплекса.
          </p>
        </div>
      </div>
      <div className="mb-4 flex items-center justify-center gap-6">
        <div className="h-[350px] w-[650px] rounded-[10px] rounded-lg border border-[#E5E2EE] bg-white">
          <img src={st1.src} alt="st1" className="m-3" />
          <div className="relative bottom-[75px] left-[90px]">
            <h1 className="m-  text-[18px] font-semibold">
              ООО Название компании
            </h1>
            <p
              style={{ color: "#7A7687" }}
              className="text-customGray ml- text-[12px]"
            >
              Михаил Булич Андреевич, Директор
            </p>
            <p
              style={{ color: "#7A7687" }}
              className="text-customGray relative bottom-[20px] left-[460px] w-[60px]  text-[12px]"
            >
              14.03.2023
            </p>
            <StarItem1 />
          </div>
          <p
            style={{ color: "#7A7687" }}
            className="text-customGray relative bottom-[50px] ml-4 w-[580px] text-[16px]"
          >
            Каждый из нс понимает очевидную вещь: понимание сути
            ресурсосберегающих технологий создаёт необходимость включения в
            производственный план целого ряда внеочередных мероприятий с учётом
            комплекса новых принципов формирования материально-технической и
            кадровой базы. Господа, повышение уровня гражданского сознания
            играет определяющее значение для стандартных подходов. План целого
            ряда внеочередных мероприятий с учётом комплекса.
          </p>
        </div>
        <div className="h-[350px] w-[650px] rounded-[10px] rounded-lg border border-[#E5E2EE] bg-white">
          <img src={st1.src} alt="st1" className="m-3" />
          <div className="relative bottom-[75px] left-[90px]">
            <h1 className="m-  text-[18px] font-semibold">
              ООО Название компании
            </h1>
            <p
              style={{ color: "#7A7687" }}
              className="text-customGray ml- text-[12px]"
            >
              Михаил Булич Андреевич, Директор
            </p>
            <p
              style={{ color: "#7A7687" }}
              className="text-customGray relative bottom-[20px] left-[460px] w-[60px]  text-[12px]"
            >
              14.03.2023
            </p>
            <StarItem1 />
          </div>
          <p
            style={{ color: "#7A7687" }}
            className="text-customGray relative bottom-[50px] ml-4 w-[580px] text-[16px]"
          >
            Каждый из нс понимает очевидную вещь: понимание сути
            ресурсосберегающих технологий создаёт необходимость включения в
            производственный план целого ряда внеочередных мероприятий с учётом
            комплекса новых принципов формирования материально-технической и
            кадровой базы. Господа, повышение уровня гражданского сознания
            играет определяющее значение для стандартных подходов. План целого
            ряда внеочередных мероприятий с учётом комплекса.
          </p>
        </div>
      </div>
      <div className="mb-4 flex items-center justify-center gap-6">
        <div className="h-[350px] w-[650px] rounded-[10px] rounded-lg border border-[#E5E2EE] bg-white">
          <img src={st1.src} alt="st1" className="m-3" />
          <div className="relative bottom-[75px] left-[90px]">
            <h1 className="m-  text-[18px] font-semibold">
              ООО Название компании
            </h1>
            <p
              style={{ color: "#7A7687" }}
              className="text-customGray ml- text-[12px]"
            >
              Михаил Булич Андреевич, Директор
            </p>
            <p
              style={{ color: "#7A7687" }}
              className="text-customGray relative bottom-[20px] left-[460px] w-[60px]  text-[12px]"
            >
              14.03.2023
            </p>
            <StarItem1 />
          </div>
          <p
            style={{ color: "#7A7687" }}
            className="text-customGray relative bottom-[50px] ml-4 w-[580px] text-[16px]"
          >
            Каждый из нс понимает очевидную вещь: понимание сути
            ресурсосберегающих технологий создаёт необходимость включения в
            производственный план целого ряда внеочередных мероприятий с учётом
            комплекса новых принципов формирования материально-технической и
            кадровой базы. Господа, повышение уровня гражданского сознания
            играет определяющее значение для стандартных подходов. План целого
            ряда внеочередных мероприятий с учётом комплекса.
          </p>
        </div>
        <div className="h-[350px] w-[650px] rounded-[10px] rounded-lg border border-[#E5E2EE] bg-white">
          <img src={st1.src} alt="st1" className="m-3" />
          <div className="relative bottom-[75px] left-[90px]">
            <h1 className="m-  text-[18px] font-semibold">
              ООО Название компании
            </h1>
            <p
              style={{ color: "#7A7687" }}
              className="text-customGray ml- text-[12px]"
            >
              Михаил Булич Андреевич, Директор
            </p>
            <p
              style={{ color: "#7A7687" }}
              className="text-customGray relative bottom-[20px] left-[460px] w-[60px]  text-[12px]"
            >
              14.03.2023
            </p>
            <StarItem1 />
          </div>
          <p
            style={{ color: "#7A7687" }}
            className="text-customGray relative bottom-[50px] ml-4 w-[580px] text-[16px]"
          >
            Каждый из нс понимает очевидную вещь: понимание сути
            ресурсосберегающих технологий создаёт необходимость включения в
            производственный план целого ряда внеочередных мероприятий с учётом
            комплекса новых принципов формирования материально-технической и
            кадровой базы. Господа, повышение уровня гражданского сознания
            играет определяющее значение для стандартных подходов. План целого
            ряда внеочередных мероприятий с учётом комплекса.
          </p>
        </div>
      </div>
      <div className="mb-4 flex items-center justify-center gap-6">
        <div className="h-[350px] w-[650px] rounded-[10px] rounded-lg border border-[#E5E2EE] bg-white">
          <img src={st1.src} alt="st1" className="m-3" />
          <div className="relative bottom-[75px] left-[90px]">
            <h1 className="m-  text-[18px] font-semibold">
              ООО Название компании
            </h1>
            <p
              style={{ color: "#7A7687" }}
              className="text-customGray ml- text-[12px]"
            >
              Михаил Булич Андреевич, Директор
            </p>
            <p
              style={{ color: "#7A7687" }}
              className="text-customGray relative bottom-[20px] left-[460px] w-[60px]  text-[12px]"
            >
              14.03.2023
            </p>
            <StarItem1 />
          </div>
          <p
            style={{ color: "#7A7687" }}
            className="text-customGray relative bottom-[50px] ml-4 w-[580px] text-[16px]"
          >
            Каждый из нс понимает очевидную вещь: понимание сути
            ресурсосберегающих технологий создаёт необходимость включения в
            производственный план целого ряда внеочередных мероприятий с учётом
            комплекса новых принципов формирования материально-технической и
            кадровой базы. Господа, повышение уровня гражданского сознания
            играет определяющее значение для стандартных подходов. План целого
            ряда внеочередных мероприятий с учётом комплекса.
          </p>
        </div>
        <div className="h-[350px] w-[650px] rounded-[10px] rounded-lg border border-[#E5E2EE] bg-white">
          <img src={st1.src} alt="st1" className="m-3" />
          <div className="relative bottom-[75px] left-[90px]">
            <h1 className="m-  text-[18px] font-semibold">
              ООО Название компании
            </h1>
            <p
              style={{ color: "#7A7687" }}
              className="text-customGray ml- text-[12px]"
            >
              Михаил Булич Андреевич, Директор
            </p>
            <p
              style={{ color: "#7A7687" }}
              className="text-customGray relative bottom-[20px] left-[460px] w-[60px]  text-[12px]"
            >
              14.03.2023
            </p>
            <StarItem1 />
          </div>
          <p
            style={{ color: "#7A7687" }}
            className="text-customGray relative bottom-[50px] ml-4 w-[580px] text-[16px]"
          >
            Каждый из нс понимает очевидную вещь: понимание сути
            ресурсосберегающих технологий создаёт необходимость включения в
            производственный план целого ряда внеочередных мероприятий с учётом
            комплекса новых принципов формирования материально-технической и
            кадровой базы. Господа, повышение уровня гражданского сознания
            играет определяющее значение для стандартных подходов. План целого
            ряда внеочередных мероприятий с учётом комплекса.
          </p>
        </div>
      </div>
      <div className="mb-4 flex items-center justify-center gap-6">
        <div className="h-[350px] w-[650px] rounded-[10px] rounded-lg border border-[#E5E2EE] bg-white">
          <img src={st1.src} alt="st1" className="m-3" />
          <div className="relative bottom-[75px] left-[90px]">
            <h1 className="m-  text-[18px] font-semibold">
              ООО Название компании
            </h1>
            <p
              style={{ color: "#7A7687" }}
              className="text-customGray ml- text-[12px]"
            >
              Михаил Булич Андреевич, Директор
            </p>
            <p
              style={{ color: "#7A7687" }}
              className="text-customGray relative bottom-[20px] left-[460px] w-[60px]  text-[12px]"
            >
              14.03.2023
            </p>
            <StarItem1 />
          </div>
          <p
            style={{ color: "#7A7687" }}
            className="text-customGray relative bottom-[50px] ml-4 w-[580px] text-[16px]"
          >
            Каждый из нс понимает очевидную вещь: понимание сути
            ресурсосберегающих технологий создаёт необходимость включения в
            производственный план целого ряда внеочередных мероприятий с учётом
            комплекса новых принципов формирования материально-технической и
            кадровой базы. Господа, повышение уровня гражданского сознания
            играет определяющее значение для стандартных подходов. План целого
            ряда внеочередных мероприятий с учётом комплекса.
          </p>
        </div>
        <div className="h-[350px] w-[650px] rounded-[10px] rounded-lg border border-[#E5E2EE] bg-white">
          <img src={st1.src} alt="st1" className="m-3" />
          <div className="relative bottom-[75px] left-[90px]">
            <h1 className="m-  text-[18px] font-semibold">
              ООО Название компании
            </h1>
            <p
              style={{ color: "#7A7687" }}
              className="text-customGray ml- text-[12px]"
            >
              Михаил Булич Андреевич, Директор
            </p>
            <p
              style={{ color: "#7A7687" }}
              className="text-customGray relative bottom-[20px] left-[460px] w-[60px]  text-[12px]"
            >
              14.03.2023
            </p>
            <StarItem1 />
          </div>
          <p
            style={{ color: "#7A7687" }}
            className="text-customGray relative bottom-[50px] ml-4 w-[580px] text-[16px]"
          >
            Каждый из нс понимает очевидную вещь: понимание сути
            ресурсосберегающих технологий создаёт необходимость включения в
            производственный план целого ряда внеочередных мероприятий с учётом
            комплекса новых принципов формирования материально-технической и
            кадровой базы. Господа, повышение уровня гражданского сознания
            играет определяющее значение для стандартных подходов. План целого
            ряда внеочередных мероприятий с учётом комплекса.
          </p>
        </div>
      </div>
      <div className="mb-4 flex items-center justify-center gap-6">
        <div className="h-[350px] w-[650px] rounded-[10px] rounded-lg border border-[#E5E2EE] bg-white">
          <img src={st1.src} alt="st1" className="m-3" />
          <div className="relative bottom-[75px] left-[90px]">
            <h1 className="m-  text-[18px] font-semibold">
              ООО Название компании
            </h1>
            <p
              style={{ color: "#7A7687" }}
              className="text-customGray ml- text-[12px]"
            >
              Михаил Булич Андреевич, Директор
            </p>
            <p
              style={{ color: "#7A7687" }}
              className="text-customGray relative bottom-[20px] left-[460px] w-[60px]  text-[12px]"
            >
              14.03.2023
            </p>
            <StarItem1 />
          </div>
          <p
            style={{ color: "#7A7687" }}
            className="text-customGray relative bottom-[50px] ml-4 w-[580px] text-[16px]"
          >
            Каждый из нс понимает очевидную вещь: понимание сути
            ресурсосберегающих технологий создаёт необходимость включения в
            производственный план целого ряда внеочередных мероприятий с учётом
            комплекса новых принципов формирования материально-технической и
            кадровой базы. Господа, повышение уровня гражданского сознания
            играет определяющее значение для стандартных подходов. План целого
            ряда внеочередных мероприятий с учётом комплекса.
          </p>
        </div>
        <div className="h-[350px] w-[650px] rounded-[10px] rounded-lg border border-[#E5E2EE] bg-white">
          <img src={st1.src} alt="st1" className="m-3" />
          <div className="relative bottom-[75px] left-[90px]">
            <h1 className="m-  text-[18px] font-semibold">
              ООО Название компании
            </h1>
            <p
              style={{ color: "#7A7687" }}
              className="text-customGray ml- text-[12px]"
            >
              Михаил Булич Андреевич, Директор
            </p>
            <p
              style={{ color: "#7A7687" }}
              className="text-customGray relative bottom-[20px] left-[460px] w-[60px]  text-[12px]"
            >
              14.03.2023
            </p>
            <StarItem1 />
          </div>
          <p
            style={{ color: "#7A7687" }}
            className="text-customGray relative bottom-[50px] ml-4 w-[580px] text-[16px]"
          >
            Каждый из нс понимает очевидную вещь: понимание сути
            ресурсосберегающих технологий создаёт необходимость включения в
            производственный план целого ряда внеочередных мероприятий с учётом
            комплекса новых принципов формирования материально-технической и
            кадровой базы. Господа, повышение уровня гражданского сознания
            играет определяющее значение для стандартных подходов. План целого
            ряда внеочередных мероприятий с учётом комплекса.
          </p>
        </div>
      </div>
      <div className="mb-4 flex items-center justify-center gap-6">
        <div className="h-[350px] w-[650px] rounded-[10px] rounded-lg border border-[#E5E2EE] bg-white">
          <img src={st1.src} alt="st1" className="m-3" />
          <div className="relative bottom-[75px] left-[90px]">
            <h1 className="m-  text-[18px] font-semibold">
              ООО Название компании
            </h1>
            <p
              style={{ color: "#7A7687" }}
              className="text-customGray ml- text-[12px]"
            >
              Михаил Булич Андреевич, Директор
            </p>
            <p
              style={{ color: "#7A7687" }}
              className="text-customGray relative bottom-[20px] left-[460px] w-[60px]  text-[12px]"
            >
              14.03.2023
            </p>
            <StarItem1 />
          </div>
          <p
            style={{ color: "#7A7687" }}
            className="text-customGray relative bottom-[50px] ml-4 w-[580px] text-[16px]"
          >
            Каждый из нс понимает очевидную вещь: понимание сути
            ресурсосберегающих технологий создаёт необходимость включения в
            производственный план целого ряда внеочередных мероприятий с учётом
            комплекса новых принципов формирования материально-технической и
            кадровой базы. Господа, повышение уровня гражданского сознания
            играет определяющее значение для стандартных подходов. План целого
            ряда внеочередных мероприятий с учётом комплекса.
          </p>
        </div>
        <div className="h-[350px] w-[650px] rounded-[10px] rounded-lg border border-[#E5E2EE] bg-white">
          <img src={st1.src} alt="st1" className="m-3" />
          <div className="relative bottom-[75px] left-[90px]">
            <h1 className="m-  text-[18px] font-semibold">
              ООО Название компании
            </h1>
            <p
              style={{ color: "#7A7687" }}
              className="text-customGray ml- text-[12px]"
            >
              Михаил Булич Андреевич, Директор
            </p>
            <p
              style={{ color: "#7A7687" }}
              className="text-customGray relative bottom-[20px] left-[460px] w-[60px]  text-[12px]"
            >
              14.03.2023
            </p>
            <StarItem1 />
          </div>
          <p
            style={{ color: "#7A7687" }}
            className="text-customGray relative bottom-[50px] ml-4 w-[580px] text-[16px]"
          >
            Каждый из нс понимает очевидную вещь: понимание сути
            ресурсосберегающих технологий создаёт необходимость включения в
            производственный план целого ряда внеочередных мероприятий с учётом
            комплекса новых принципов формирования материально-технической и
            кадровой базы. Господа, повышение уровня гражданского сознания
            играет определяющее значение для стандартных подходов. План целого
            ряда внеочередных мероприятий с учётом комплекса.
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
