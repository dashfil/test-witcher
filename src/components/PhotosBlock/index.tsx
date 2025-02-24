import { Button } from "@heroui/react";
import Image from "next/image";

export const PhotosBlock = () => {
  return (
    <div className="w-full">
      <p className="font-semibold text-[28px] md:text-[32px] lg:text-[40px] mb-6 lg:mb-10">
        Кадры со съемок
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <Image
          alt="main"
          src="/photo-1.png"
          height={588}
          width={588}
          sizes="100vw"
          className=" lg:h-[588px]  md:h-[314px] w-full min-h-[212px] object-cover object-center overflow-hidden"
        />
        <div className="grid md:grid-cols-2 gap-6">
          <Image
            alt="main"
            src="/photo-2.png"
            height={0}
            width={0}
            sizes="100vw"
            className=" lg:h-[282px]  md:h-[148px] w-full min-h-[148px] object-cover object-center overflow-hidden"
          />
          <Image
            alt="main"
            src="/photo-3.png"
            height={0}
            width={0}
            sizes="100vw"
            className=" lg:h-[282px]  md:h-[148px] w-full min-h-[148px] object-cover object-center overflow-hidden"
          />
          <Image
            alt="main"
            src="/photo-4.png"
            height={0}
            width={0}
            sizes="100vw"
            className=" lg:h-[282px]  md:h-[148px] w-full min-h-[148px] object-cover object-center overflow-hidden"
          />
          <Image
            alt="main"
            src="/photo-5.png"
            height={0}
            width={0}
            sizes="100vw"
            className=" lg:h-[282px]  md:h-[148px] w-full min-h-[148px] object-cover object-center overflow-hidden"
          />
        </div>
      </div>
      <Button
        radius="none"
        className="
            mt-6 lg:mt-8 w-full h-[56px] text-white bg-darkRed hover:bg-lightRed hover:shadow-[0_2px_24px_0px_rgba(255,30,30,0.5)] border-[1px] border-red"
      >
        <p className="font-semibold text-base">Показать еще</p>
      </Button>
    </div>
  );
};
