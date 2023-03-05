import BadgeIconImage from "@/components/atoms/budgeIcon";
import { BackIcon, CodeIcon, PlayIcon } from "@/components/atoms/IconButton";
import Text from "@/components/atoms/Text";
import Box from "@/components/layout/Box";
import Flex from "@/components/layout/Flex";
import Slider from "@/components/molecules/Slider";
import Layout from "@/components/templates/Layout";
import { theme } from "@/themes";
import { myApp } from "@/types/myApp";
import { client } from "libs/client";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "myapp" });
  const paths = data.contents.map((app: myApp) => `/app/${app.id}`);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params?.id;
  const data = await client.get({ endpoint: "myapp", contentId: id });

  return {
    props: {
      apps: data,
    },
  };
};

type Props = {
  apps: myApp;
};

const Anchor = styled(Flex)`
  color: ${theme.colors.black};
  opacity: 0.6;
  cursor: pointer;
  &:hover {
    opacity: 1;
    background-color: #eeeeee;
  }
  &:active {
    background-color: #dddddd;
  }
`;

export default function BlogId({ apps }: Props) {
  const techList = apps.usedTech.split(",");
  const imgs = [apps.logo, apps.demo1, apps.demo2, apps.demo3];
  return (
    <Layout title={apps.title}>
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <Text as={"h1"} variant="extraLarge" textAlign="center">
          {apps.title}
        </Text>
        <Flex marginBottom={3} width={"50%"}>
          <Slider imgList={imgs} />
        </Flex>
        <Flex flexDirection={"column"} alignItems="center">
          <Box width={"50%"}>
            {techList.map((item, index) => (
              <BadgeIconImage
                key={index}
                src={item}
                alt=""
                sizes="100vw"
                width={20}
                height={20}
              />
            ))}
            <Text
              dangerouslySetInnerHTML={{
                __html: `${apps.description}`,
              }}
              variant={"medium"}
            />
          </Box>
          <Box>
            <Flex alignContent="center" justifyContent="cneter">
              <Box marginRight={3}>
                <Link href={apps.appUrl}>
                  <Anchor>
                    <PlayIcon />
                    <Text textAlign="center">Play</Text>
                  </Anchor>
                </Link>
              </Box>
              <Box marginRight={3}>
                <Link href={apps.repoUrl}>
                  <Anchor>
                    <CodeIcon />
                    <Text textAlign="center">Code</Text>
                  </Anchor>
                </Link>
              </Box>
              <Box>
                <Link href={"/app"}>
                  <Anchor>
                    <BackIcon />
                    <Text textAlign="center">Back</Text>
                  </Anchor>
                </Link>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Layout>
  );
}
