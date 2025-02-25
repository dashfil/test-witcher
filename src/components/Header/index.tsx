"use client";
import {
  Button,
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/react";
import Link from "next/link";
import NextImage from "next/image";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  return (
    <Navbar
      classNames={{
        wrapper: "px-0 max-w-full",
        base: "w-full bg-black h-[80px] md:h-[72px] lg:h-[88px] lg:px-[120px] md:px-16 px-4",
      }}
    >
      <NavbarBrand>
        <Link href="/">
          <Image
            alt="HeroUI hero Image"
            as={NextImage}
            height={44}
            src="/logo-24.png"
            width={130}
          />
        </Link>
      </NavbarBrand>
      {!pathname.includes("subscribe") && (
        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              as={Link}
              href="/subscribe"
              radius="none"
              className="
            h-[48px] text-white bg-darkRed hover:bg-lightRed hover:shadow-[0_2px_24px_0px_rgba(255,30,30,0.5)] border-[1px] border-red"
            >
              Подключить подписку
            </Button>
          </NavbarItem>
        </NavbarContent>
      )}
    </Navbar>
  );
};
