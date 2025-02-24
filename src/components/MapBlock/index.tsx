"use client";

import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const center = [55.75, 37.62];
const placemarks = [[55.75, 37.62], [55.72, 37.61], [55.73, 37.63], [55.76, 37.60], [55.78, 37.65]]

export const MapBlock = () => {
  return (
    <div className="lg:w-full w-[100vw]">
      <p className="lg:text-[40px] md:text-[32px] text-[28px] font-semibold md:px-[64px] px-4 lg:px-0 lg:mb-[40px] mb-[24px]">Магазины мерча ведьмака</p>
      <div>
        <YMaps query={{ load: "package.full" }}>
          <Map
            state={{
              center,
              zoom: 13,
              controls: [],
            }}
            width="100%"
            height="50vh"
          >
            {placemarks.map((n, i) => (
              <Placemark
                key={i}
                geometry={n}
                options={{
                  iconLayout: "default#image",
                  iconImageSize: [50, 50],
                  iconImageHref: "/point.png",
                }}
              />
            ))}
          </Map>
        </YMaps>
      </div>
    </div>
  );
};
