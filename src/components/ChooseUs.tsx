// data
import { ChooseUsData } from "@/data/ChooseUsData";
// M ui 
import { Card, CardActionArea } from "@mui/material";
// next images
import Image from "next/image";

const ChooseUs = () => {
  return (
    <div className="mt-[100px]">
      <div className="mx-auto w-[90%]">
        <h1 className="text-[30px] font-[500]">Почему выбирают нас?</h1>
      </div>
      <main className="mx-auto mt-[50px] grid grid-cols-1 gap-4 w-[90%] sm:grid-cols-2 md:grid-cols-4">
        {ChooseUsData.map((item) => (
          <Card key={item.id} className="rounded-[10px] bg-[#F8F7F3FF]">
            <CardActionArea>
              <div className="flex h-[260px] bg-[#F8F7F3] w-full cursor-pointer items-center justify-center rounded-[10px] border hover:bg-gray-100">
                <div className="p-5">
                  <div className="flex items-center justify-center p-8">
                    <Image src={item.img} alt={item.alt} width={60} height={60} />
                  </div>
                  <p className="text-center text-[16px] font-[500]">
                    {item.title}
                  </p>
                </div>
              </div>
            </CardActionArea>
          </Card>
        ))}
      </main>
    </div>
  );
};

export default ChooseUs;
