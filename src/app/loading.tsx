import React from "react";

import mainImg from "@/assets/icons/main.svg";
import Image from "next/image";

const Loading = () => {
  return (
    <div
      className="flex h-screen items-center 
    justify-center"
    >
      <Image
        className="h-auto w-1/4 animate-spin"
        src={mainImg}
        alt="main img"
      />
    </div>
  );
};

export default Loading;
