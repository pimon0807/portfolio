import Flex from "@/components/layout/Flex";
import { img } from "@/types/myApp";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";

interface SliderProps {
  imgList: img[];
}

export const Slider = (props: SliderProps) => {
  return (
    <Splide
      aria-label=""
      options={{
        rewind: true,
        autoplay: true,
        interval: 2000,
        type: "fade",
      }}
    >
      {props.imgList.map((i: img, index) => (
        <SplideSlide key={index}>
          <Flex alignItems="center" justifyContent="center">
            <Image
              alt=""
              src={i.url}
              width={1980}
              height={1150}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </Flex>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default Slider;
