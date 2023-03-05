import Image, { ImageProps } from "next/image";
import styled from "styled-components";

type BadgeIconImageProps = ImageProps;

const BadgeIconImageWithSize = styled(Image)<BadgeIconImageProps>`
  height: 10;
  width: auto;
  margin-right: 0.3rem;
`;

const BadgeIconImage = (Props: BadgeIconImageProps) => {
  const { ...imageProps } = Props;
  return <BadgeIconImageWithSize {...imageProps} />;
};

export default BadgeIconImage;
