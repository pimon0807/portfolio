import ShapeImage from "@/components/atoms/ShapeImage";
import Text from "@/components/atoms/Text";
import Box from "@/components/layout/Box";
import Flex from "@/components/layout/Flex";
import { myApp } from "@/types/myApp";
import Link from "next/link";
import styled from "styled-components";

export interface AppIconProps {
  app: myApp;
}

const AppIconBox = styled(Box)`
  border-radius: 10%;
`;

const AppIcon = ({ app }: AppIconProps) => {
  return (
    <Flex justifyContent="cneter" alignItems="center" margin={2}>
      <Box>
        <Link href={`/app/${app.id}`}>
          <AppIconBox border={"solid 1px"} padding={1}>
            <ShapeImage
              src={app.icon.url}
              alt={"appIcon"}
              height={75}
              width={75}
            />
          </AppIconBox>
          <Text as="p" textAlign={"center"}>
            {app.title}
          </Text>
        </Link>
      </Box>
    </Flex>
  );
};

export default AppIcon;
