"use client";

import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import Link from "next/link";
import NextImage from "next/image";
import IconFacebook from "public/facebook.svg";
import IconInst from "public/inst.svg";
import IconVk from "public/vk.svg";
import { Documents } from "./components/Documents";
import { SocialMedia } from "./components/SocialMedia";

export const Footer = () => {
  return (
    <footer className="bg-grey flex flex-wrap justify-between items-center md:h-32 h-[142px] lg:px-[120px] md:px-16 px-4">

      <Link href="/">
        <Image
          alt="HeroUI hero Image"
          as={NextImage}
          height={44}
          src="/logo-24.png"
          width={130}
        />
      </Link>
     <SocialMedia />
      <Documents />

    </footer>
  );
};
