import IconFacebook from "public/facebook.svg";
import IconInst from "public/inst.svg";
import IconVk from "public/vk.svg";
import NextImage from "next/image";

export const SocialMedia = () => {
    return (
        <div className="flex gap-5 md:order-3">
        <NextImage
          src={IconFacebook}
          alt="Facebook"
          width={32}
          height={32}
          className="cursor-pointer"
        />
        <NextImage
          src={IconInst}
          alt="Instagram"
          width={32}
          height={32}
          className="cursor-pointer"
        />
        <NextImage
          src={IconVk}
          alt="VK"
          width={32}
          height={32}
          className="cursor-pointer"
        />
      </div>
    )
}