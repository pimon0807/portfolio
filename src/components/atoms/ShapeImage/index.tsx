import Image, { ImageProps } from "next/image";
import styled from "styled-components";

type ImageShape = "circle" | "spuare";
type ShapeImageProps = ImageProps & { shape?: ImageShape };

const ImageWithShape = styled(Image)<{ shape?: ImageShape }>`
  border-radius: ${({ shape }) => (shape === "circle" ? "50%" : "0")};
`;

const ShapeImage = (Props: ShapeImageProps) => {
  const { shape, ...imageProps } = Props;

  return <ImageWithShape shape={shape} {...imageProps} />;
};

export default ShapeImage;
