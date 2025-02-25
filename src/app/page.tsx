import { ActorsBlock } from "@/components/ActorsBlock";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MainBlock } from "@/components/MainBlock";
import { MapBlock } from "@/components/MapBlock";
import { PhotosBlock } from "@/components/PhotosBlock";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <MainBlock />
      <main className="flex min-h-screen flex-col items-center justify-between lg:px-[120px] md:px-[64px] px-4 gap-[72px]">
        <ActorsBlock />
        <PhotosBlock />
        <MapBlock />
      </main>
    </>
  );
}
