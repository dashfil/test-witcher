import { Button } from "@heroui/react";
import Image from "next/image";

export const MainBlock = () => {
  return (
    <div className="relative">
      <Image
        alt="main"
        src="/main.png"
        height={0}
        width={0}
        sizes="100vw"
        className="w-full min-h-[400px] object-cover object-[top_0_right_-300px] md:object-top object-center overflow-hidden"
      />
      <div className="absolute lg:top-28 top-14 w-[280px] md:w-[370px] lg:w-[480px] ml-4 lg:ml-[120px] md:ml-[67px]">
        <p className="lg:text-[56px] md:text-[40px] text-[38px] font-semibold text-nowrap">
          Сериал Ведьмак
        </p>
        <p className="text-base font-normal">
          Геральт из Ривии, наемный охотник за чудовищами, перенесший мутации,
          идет навстречу своей судьбе в неспокойном мире, где люди часто
          оказываются куда коварнее чудовищ.
        </p>
        <Button
          radius="none"
          className="mt-8 lg:mt-10 h-[48px] md:h-[56px] w-[200px] text-white bg-red hover:bg-lightRed hover:shadow-[0_2px_24px_0px_rgba(255,30,30,0.5)]"
        >
          Смотреть сериал
        </Button>
      </div>
    </div>
  );
};
