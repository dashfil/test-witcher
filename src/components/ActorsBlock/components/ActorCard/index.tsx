"use client";

import { FC } from "react";
import { Card, CardHeader, CardFooter, Image, Button } from "@heroui/react";

type Props = {
  actor: { img?: string; title?: string; actor?: string; description?: string };
};

export const ActorCard: FC<Props> = ({ actor }) => {

  return (
    <Card className="group h-[400px] first:lg:ml-[120px] first:md:ml-[64px] first:ml-4 rounded-none cursor-pointer">
      <CardHeader className="absolute z-10 bottom-2 group-hover:top-2 flex-col !items-start">
        <p className="lg:text-2xl md:text-xl text-base text-white font-semibold">
          {actor.title}
        </p>
        <p className="text-white font-normal lg:text-2xl md:text-xl text-base ">
          {actor.actor}
        </p>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover rounded-none"
        src={actor.img}
      />
      <CardFooter className="hidden group-hover:block absolute bottom-2 z-10 ">
        <p className="text-white font-normal text-base">{actor.description}</p>
      </CardFooter>
    </Card>
  );
};
