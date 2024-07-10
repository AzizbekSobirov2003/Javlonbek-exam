import AccordionUsage from "@/components/About/Accordion";

const AboutCompany: React.FC = () => {
  return (
    <div className="mt-[100px] bg-[#088269FF] p-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:">
        <h1 className="mb-5 md:mb-0 text-[30px] font-[500] text-white md:m-[50px]">
          Информация о компании
        </h1>
        <div className="w-full md:w-[50%]">
          <AccordionUsage />
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
