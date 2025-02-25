import { Button } from "@heroui/react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";

export const Feedback = () => {
  const name = useSelector((state: RootState) => state.user.name);

  console.log("name", name);
  return (
    <div className="w-full lg:mt-24 md:mt-20 mt-10">
      <p className="font-semibold lg:text-[56px] md:text-[40px] text-[32px]">
        Заявка отправлена!
      </p>
      <p className="text-base lg:text-2xl font-normal md:mt-6 lg:mb-10 md:mb-6 mt-4 mb-8">
        Мы получили вашу заявку. Наши специалисты свяжутся с вами в ближайшее
        время, чтобы уточнить все детали заказа.
      </p>
      <Button
        as={Link}
        href="/"
        radius="none"
        className="mt-8 lg:mt-10 h-[48px] md:h-[56px] w-full md:w-[240px] text-white bg-red hover:bg-lightRed hover:shadow-[0_2px_24px_0px_rgba(255,30,30,0.5)]"
      >
        Вернуться на главную
      </Button>
    </div>
  );
};
