"use client";

import { Controller, useForm } from "react-hook-form";
import { Input, Textarea } from "@heroui/react";
import { Button } from "@heroui/react";
import { Select, SelectItem } from "@heroui/react";
import { Checkbox } from "@heroui/react";
import IconPaperclip from "public/paperclip.svg";
import NextImage from "next/image";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { setName } from "@/redux/userSlice";
import clsx from "clsx";

const cities = ["Москва", "Санкт-Петербург", "Казань", "Новосибирск"];

type Props = {
  setIsSend(isSend: boolean): void;
};

export const SubscriptionForm: FC<Props> = ({ setIsSend }) => {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    dispatch(setName(data.name));
    setIsSend(true);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col space-y-4"
    >
      <p className="text-[32px] md:text-[40px] lg:text-[56px] font-semibold">
        Оставьте заявку
      </p>

      <Controller
        name="city"
        control={control}
        rules={{ required: "Город не выбран" }}
        render={({ field }) => (
          <Select
            label="Выберите город"
            radius="none"
            isInvalid={Boolean(errors.city)}
            errorMessage={Boolean(errors.city) && "Поле не заполненно"}
            selectedKeys={field.value ? [field.value] : []}
            onSelectionChange={(keys) => {
              const selectedCity = Array.from(keys)[0];
              field.onChange(selectedCity);
              setValue("city", selectedCity, { shouldValidate: true });
            }}
            classNames={{
              listbox: "bg-grey",
              listboxWrapper: "bg-grey border-grey",
              popoverContent: "bg-grey border-grey rounded-none",
              base: "data-[invalid=true]: text-red",
            }}
            listboxProps={{
              itemClasses: {
                base: [
                  "rounded-none",
                  "text-white",
                  "data-[selected=true]:bg-gray",
                  "data-[hover=true]:bg-gray",
                  "data-[focus=true]:bg-gray",
                  "data-[selectable=true]:focus:bg-gray",
                  "data-[selectable=true]:focus:text-white",
                ],
              },
            }}
          >
            {cities.map((city) => (
              <SelectItem key={city}>{city}</SelectItem>
            ))}
          </Select>
        )}
      />

      <Input
        label="Имя"
        radius="none"
        isInvalid={Boolean(errors.name)}
        errorMessage={Boolean(errors.name) && "Поле не заполненно"}
        {...register("name", { required: true })}
      />

      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Email"
          radius="none"
          isInvalid={Boolean(errors.email)}
          errorMessage={Boolean(errors.email) && "Поле не заполненно"}
          {...register("email", { required: true })}
        />
        <Input
          label="Телефон"
          radius="none"
          isInvalid={Boolean(errors.phone)}
          errorMessage={Boolean(errors.phone) && "Поле не заполненно"}
          placeholder="+7 (___) ___-__-__"
          {...register("phone", { required: true })}
        />
      </div>

      <Textarea
        label="Оставьте пометку к заказу"
        radius="none"
        isInvalid={Boolean(errors.note)}
        errorMessage={Boolean(errors.note) && "Поле не заполненно"}
        {...register("note", { required: true })}
        rows={3}
      />
      <div>
        <div
          className={clsx(
            "relative border rounded-none p-3 flex  items-center",
            Boolean(errors.file)
              ? "bg-danger-50 border-danger-50"
              : "bg-grey border-grey"
          )}
        >
          <input
            type="file"
            {...register("file", {
              required: true,
              onChange(event) {
                setFile(event.target.files[0].name);
              },
            })}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
          <div className="h-full w-full flex justify-between ml-2 text-gray-400 ">
            {file ? (
              <p className="text-sm text-white">{file}</p>
            ) : (
              <p className="text-sm text-foreground-500">Прикрепите файл</p>
            )}
            <NextImage
              src={IconPaperclip}
              alt="paperclip"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </div>
        </div>
        {Boolean(errors.file) && (
          <p className="mt-0 text-xs text-danger">Поле не заполненно</p>
        )}
      </div>
      <div className="flex flex-col">
        <Checkbox
          color="default"
          size="lg"
          radius="none"
          isInvalid={Boolean(errors.consent)}
          {...register("consent", { required: true })}
        >
          <p className="text-base font-normal ml-6 text-white">
            Даю согласие на обработку своих персональных данных
          </p>
        </Checkbox>
        {errors.consent && (
          <span className="mt-0 text-xs text-danger">
            Обязательно для отправки
          </span>
        )}
      </div>
      <Button
        radius="none"
        type="submit"
        className="mt-8 lg:mt-10 h-[48px] md:h-[56px] w-full lg:w-[200px] text-white bg-red hover:bg-lightRed hover:shadow-[0_2px_24px_0px_rgba(255,30,30,0.5)]"
      >
        Оставить заявку
      </Button>
    </form>
  );
};
