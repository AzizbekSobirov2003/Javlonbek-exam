import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import { autoPlay } from "react-swipeable-views-utils-react-18-fix";
import Image from "next/image";
import Link from "next/link";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";
import CloseIcon from "@mui/icons-material/Close";

import img1 from "@/assets/images/Banner.png";
import img2 from "@/assets/images/gms_4.png";
import img3 from "@/assets/images/fibro.jpg";
import img4 from "@/assets/images/gmt_na_glavnuyu2_.png";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    h1: "Заголовок баннера в пару строк",
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: img1,
  },
  {
    h1: "Заголовок баннера в пару строк",
    label: "Bird",
    imgPath: img3,
  },
  {
    h1: "Заголовок баннера в пару строк",
    label: "Bali, Indonesia",
    imgPath: img4,
  },
  {
    h1: "Предлагаем уникальную программу",
    label: "Goč, Serbia",
    imgPath: img2,
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  return (
    <Box sx={{ height: 325, maxWidth: "100%", margin: "0 auto", flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label} className="">
            {Math.abs(activeStep - index) <= 2 ? (
              <>
                <div className="wi flex items-center justify-between rounded-[8px]">
                  <div>
                    <h1 className="text-[48px] font-[500]">{step.h1}</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                      elit, sed do eiusmod tempor
                    </p>
                    <div className="mt-5">
                      <button
                        className="rounded-[30px] bg-[#088269FF] px-5 py-3 text-[14px] text-white"
                        onClick={openDialog}
                      >
                        Запросить цену
                      </button>
                      <Link href="/catalog">
                        <button className="mx-5 rounded-[30px] border border-gray-500 px-5 py-3 text-[14px]">
                          В каталог
                        </button>
                      </Link>
                    </div>
                  </div>
                  <Image src={step.imgPath} alt={step.label} />
                </div>
              </>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
        {images.map((_, index) => (
          <Box
            key={index}
            sx={{
              height: 7,
              width: activeStep === index ? 34 : 7,
              backgroundColor: activeStep === index ? "#088269FF" : "grey",
              borderRadius: 5,
              mx: 0.5,
              transition: "width 0.3s ease-in-out",
            }}
          />
        ))}
      </Box>
      <Box sx={{ display: "flex", gap: 3 }}>
        <Button
          size="small"
          className="relative bottom-[70px] left-[1140px] h-[41px] w-[41px] rounded-[100px] bg-white text-black"
          onClick={handleBack}
          disabled={activeStep === 0}
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
        </Button>
        <Button
          size="small"
          className="relative bottom-[70px] left-[1150px]  h-[41px] w-[41px] rounded-[100px] bg-white text-black"
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      </Box>
      <Dialog open={dialogOpen} onClose={closeDialog}>
        <DialogTitle className="h-[67px] w-[500px]">Запросить цену</DialogTitle>
        <div className="flex gap-[5px]">
          <div>
            <input type="text" placeholder="Ваше имя*" className="m-3" />
            <hr className="w-[250px]" />{" "}
          </div>
          <div>
            <input type="text" placeholder="Ваш телефон*" className="m-3" />
            <hr className="w-[250px]" />
          </div>
        </div>
        <input type="text" placeholder="Ваш email*" className="m-3" />
        <hr className="w-[480px]" />
        <input
          type="text"
          placeholder="Название вашей организации*"
          className="m-3"
        />
        <hr className="w-[480px]" />
        <input type="text" placeholder="Ваше сообщение" className="m-3" />

        <br />
        <br />
        <br />
        <hr className="w-[480px]" />
        <br />
        <div className="flex gap-[30px]">
          <button className=" text-12px] ml-4 h-[41px] w-[134px] rounded-full bg-[#088269] text-white ">
            Отправить
          </button>
          <p className="w-[294px] text-[12px] ">
            Нажимая «Отправить», я соглашаюсь c обработкой персональных данных
            на условиях Политики конфиденциальности.
          </p>
        </div>
        <DialogContent>
          <DialogContentText></DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog} color="primary">
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default SwipeableTextMobileStepper;
