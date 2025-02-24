"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import IconBack from "public/back.svg";
import IconForward from "public/forward.svg";
import NextImage from "next/image";
import { ActorCard } from "../ActorCard";

const mockActors: {
  img?: string;
  title?: string;
  actor?: string;
  description?: string;
}[] = [
  {
    img: "/gerald.png",
    title: "Геральт",
    actor: "Генри Кавилл",
    description:
      "Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник",
  },
  {
    img: "/lutik.png",
    title: "Лютик",
    actor: "Джои Бэти",
    description:
      "Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник",
  },
  {
    img: "/enifer.png",
    title: "Йеннифэр",
    actor: "Аня Чалотра",
    description:
      "Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник",
  },
  {
    img: "/ciri.png",
    title: "Цири",
    actor: "Фрейя Аллан",
    description:
      "Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник",
  },
  {
    img: "/emger.png",
    title: "Эмгыр вар Эмрейс",
    actor: "Барт Эдвардс",
    description:
      "Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник",
  },

  {
    img: "/gerald.png",
    title: "Геральт",
    actor: "Генри Кавилл",
    description:
      "Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник",
  },
  {
    img: "/lutik.png",
    title: "Лютик",
    actor: "Джои Бэти",
    description:
      "Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник",
  },
  {
    img: "/enifer.png",
    title: "Йеннифэр",
    actor: "Аня Чалотра",
    description:
      "Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник",
  },
  {
    img: "/ciri.png",
    title: "Цири",
    actor: "Фрейя Аллан",
    description:
      "Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник",
  },
  {
    img: "/emger.png",
    title: "Эмгыр вар Эмрейс",
    actor: "Барт Эдвардс",
    description:
      "Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник",
  },
];

const Slider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const scrollPercentage = getScrollPercentage();
    if (progressBarRef.current) {
      progressBarRef.current.style.width = `${scrollPercentage}%`;
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += e.deltaY;
    }
  };

  const getScrollPercentage = () => {
    if (sliderRef.current) {
      return (
        (sliderRef.current.scrollLeft /
          (sliderRef.current.scrollWidth - sliderRef.current.clientWidth)) *
        100
      );
    }
    return 0;
  };

  const handleForward = () => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.scrollWidth / 8;
      sliderRef.current.scrollLeft += scrollAmount;
      handleScroll();
    }
  };

  const handleBack = () => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.scrollWidth / 8;
      sliderRef.current.scrollLeft -= scrollAmount;
      handleScroll();
    }
  };

  return (
    <div>
      <div className="flex justify-between">
        <p className="mb-6 lg:px-[120px] md:px-[64px] px-4 lg:text-[40px] md:text-[32px] text-[28px] font-semibold">
          Актерский состав
        </p>
        <div className="lg:px-[120px] md:px-[64px] px-4">
          <Button
            isIconOnly
            onPress={handleBack}
            className="bg-transparent disableRipple"
          >
            <NextImage
              src={IconBack}
              alt="Back"
              width={32}
              height={32}
              className="hover:text-lightRed"
            />
          </Button>
          <Button
            isIconOnly
            onPress={handleForward}
            className="bg-transparent disableRipple"
          >
            <NextImage
              src={IconForward}
              alt="Back"
              width={32}
              height={32}
              className="hover:text-lightRed"
            />
          </Button>
        </div>
      </div>
      <div className="w-[86vw] h-[2px] mx-auto mb-8 bg-grey ">
        <motion.div
          ref={progressBarRef}
          className=" h-full bg-red"
          initial={{ width: "0%" }}
        />
      </div>
      <div className="relative w-[100vw] h-[400px] top-[10%]">
        <div
          ref={sliderRef}
          className="absolute top-0 left-0 w-[100vw] h-full overflow-scroll scrollbar-hide"
          onScroll={handleScroll}
          onWheel={handleWheel}
        >
          <motion.div className="absolute top-0 left-0 w-[3000px] h-full flex gap-4 md:gap-6">
            {mockActors.map((actor, index) => (
              <ActorCard key={index} actor={actor} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
