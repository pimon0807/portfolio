import React from "react";
import Image from "next/image";

interface MicroCMSImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}
const MicroCMSImage: React.FC<MicroCMSImage> = (props) => {
  return (
    <Image
      src={props.src}
      width={props.width}
      height={props.height}
      alt={props.alt}
    />
  );
};
export default MicroCMSImage;
